import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import Dropzone from '../Dropzone'
import { useSnackbarContext } from '../Snackbar/context'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface IImageUploadDialog {
  open: boolean
  onClose: () => void
  type: string
  file: File | null
  setFile: (file: File | null) => void
}

export default function ImageUploadDialog({
  open,
  onClose,
  type,
  file,
  setFile,
}: IImageUploadDialog) {
  const [uploadStatus, setUploadStatus] = useState<boolean>(false)
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const onFileChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    const selectedFile = event?.target?.files ? event?.target?.files[0] : null
    setFile(selectedFile)
    if (selectedFile) {
      const fileExt = selectedFile.name.split('.').pop()
      if (selectedFile.size < 5500000) {
        if (fileExt === 'png' || fileExt === 'jpeg' || fileExt === 'jpg') {
          // if needed add message for user that file is according to rules
        } else {
          showToast(true, 'error', 'Please try jpg, jpeg or png!')
          setFile(null)
          setUploadStatus(false)
        }
      } else {
        showToast(true, 'error', 'Size limit 5MB!')
        setFile(null)
        setUploadStatus(false)
      }
    }
    onClose()
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        '& .MuiDialog-paper': {
          width: '80%',
          maxWidth: '600px',
          backgroundColor: 'background.default',
        },
      }}
    >
      <DialogTitle>Select Image</DialogTitle>
      <DialogContent>
        <Dropzone
          file={file}
          accept="image/png, image/jpeg"
          uploadStatus={uploadStatus}
          onChangeHandler={onFileChangeHandler}
        />
      </DialogContent>
    </Dialog>
  )
}
