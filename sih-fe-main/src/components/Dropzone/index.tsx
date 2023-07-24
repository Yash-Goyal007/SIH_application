//libs
import { Box, LinearProgress, Stack, Typography } from '@mui/material'
import { LoadingButton } from '../Buttons/Buttons'
import React, { memo } from 'react'
import { FileInput, ImagePreview, ProgressContainer, Span } from './styles'
import UploadIcon from '../../assets//upload-icon.svg'

//interface
interface IDropzoneProps {
  type: string
  file: File | null
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement> | null) => void
  accept: string
  uploadStatus: boolean
  onClickHandler?: () => void
}

function Dropzone({
  file,
  onChangeHandler,
  accept,
  uploadStatus,
  onClickHandler,
}: IDropzoneProps) {
  return (
    <Box
      sx={{
        minHeight: '360px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        spacing={2}
      >
        {!file && (
          <>
            <Box component="img" src={UploadIcon} height="60px" width="60px" />
            <Typography variant="h4" fontWeight="500">
              Drop your image, or{' '}
              <Span style={{ color: '#0093E3' }}>browse</Span>
            </Typography>
          </>
        )}
        {file && uploadStatus && (
          <>
            <Typography variant="h4" fontWeight="500">
              Your image is uploading, please wait...
            </Typography>
            <ProgressContainer style={{ position: 'relative' }}>
              <LinearProgress color="primary" />
            </ProgressContainer>
          </>
        )}
        {file && !uploadStatus && !onClickHandler && (
          <>
            <Typography variant="h4" fontWeight="500">
              <Span style={{ color: '#0093E3' }}>{file.name}</Span> image
              selected, or <Span style={{ color: '#0093E3' }}>change</Span>
            </Typography>
          </>
        )}
        {file && !uploadStatus && onClickHandler && (
          <ImagePreview>
            <Box
              component="img"
              src={file ? URL.createObjectURL(file) : ''}
              alt="preview image"
              maxWidth="100%"
              maxHeight='360px'
            />
          </ImagePreview>
        )}
        {file && onClickHandler && (
          <LoadingButton
            disabled={file ? false : true}
            fullWidth
            variant="contained"
            loading={uploadStatus}
            onClick={onClickHandler}
          >
            Confirm Image
          </LoadingButton>
        )}
      </Stack>
      <FileInput
        accept={accept}
        onChange={(event) => onChangeHandler(event)}
        type="file"
      />
    </Box>
  )
}

Dropzone.defaultProps = {
  type: 'new',
}

export default memo(Dropzone)
