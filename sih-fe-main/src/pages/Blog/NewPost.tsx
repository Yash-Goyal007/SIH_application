import { useContext, useState } from 'react'
import { AddPhotoAlternate } from '@mui/icons-material'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Switch,
  FormControlLabel,
  Box,
} from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  FavoriteIconButton,
  LoadingButton,
} from '../../components/Buttons/Buttons'
import { useSnackbarContext } from '../../components/Snackbar/context'
import { FormTextField } from '../../components/TextFields/TextField'
import blogService from '../../api/blogService'
import UserContext from '../../context/UserContext'
import ImageUploadDialog from '../../components/ImageUpload/ImageUploadDialog'
import UserAvatar from '../../components/Avatar/Avatar'
import { IBlog } from '../../interfaces/blog.interface'

const validationSchema = yup.object({
  title: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
})

const NewPost = (props: {
  setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>
}) => {
  const [open, setOpen] = useState(false)
  const [showName, setShowName] = useState<boolean>(true)
  const [file, setFile] = useState<File | null>(null)

  const { user, isUserLoggedIn } = useContext(UserContext)

  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting)
    },
  })

  const handleSubmit = (values: any, setSubmitting: any) => {
    if (!isUserLoggedIn) {
      showToast(true, 'error', 'Log In is required!!', 'center')
      setSubmitting(false)
      return
    }
    blogService
      .createPost(values.title, values.description, user?._id, showName)
      .then((response: any) => {
        showToast(true, 'success', 'Post Created successfully', 'center')
        blogService.getAll().then((response) => props.setBlogs(response))
        values.title = ''
        values.description = ''
        setShowName(true)
        setSubmitting(false)
      })
      .catch((error: any) => {
        showToast(true, 'error', 'Post Creation Failed', 'center')
        setSubmitting(false)
      })
  }

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <Card
        sx={{
          width: '100%',
          background: '#EEEEEE',
          boxShadow:
            '-12px -12px 24px rgba(142, 209, 252, 0.25), 12px 12px 24px #FFFFFF',
          borderRadius: '20px',
          p: 2,
        }}
      >
        <CardHeader
          avatar={
            user?.image ? (
              <UserAvatar name={user?.firstName} src={user?.image} />
            ) : (
              <UserAvatar name={user?.firstName ? user.firstName : 'A'} />
            )
          }
          title={
            <Typography variant="h4" color="text.primary">
              Ask a Question
            </Typography>
          }
          subheader={
            <Typography variant="subtitle1" color="text.secondary">
              Get help from the best Psychatrists
            </Typography>
          }
          sx={{ p: 1 }}
        />

        <CardContent sx={{ p: 1 }}>
          <Typography component="label" variant="h5" color="text.secondary">
            Title *
          </Typography>
          <FormTextField
            required
            fullWidth
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <Typography component="label" variant="h5" color="text.secondary">
            What do you want to ask or share?? *
          </Typography>
          <FormTextField
            required
            fullWidth
            multiline
            minRows="4"
            maxRows="4"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </CardContent>

        {file && (
          <CardMedia
            component="img"
            height="194"
            image={URL.createObjectURL(file)}
            alt="Upload Image"
            sx={{ margin: 'auto', width: 'auto' }}
          />
        )}

        <CardActions
          sx={{ p: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={!showName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setShowName(!event.target.checked)
                }}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Post Anonymously"
          />
          <FavoriteIconButton aria-label="image" onClick={() => setOpen(true)}>
            <AddPhotoAlternate fontSize="large" />
          </FavoriteIconButton>
          <LoadingButton
            type="submit"
            loading={formik.isSubmitting}
            variant="contained"
            sx={{ marginLeft: 'auto' }}
          >
            Post
          </LoadingButton>
        </CardActions>
      </Card>
      <ImageUploadDialog
        open={open}
        onClose={() => setOpen(false)}
        type="banner"
        file={file}
        setFile={setFile}
      />
    </Box>
  )
}

export default NewPost
