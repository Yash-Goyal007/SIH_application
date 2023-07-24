import { useContext } from 'react'
import {
  Card,
  CardHeader,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useSnackbarContext } from '../../components/Snackbar/context'
import UserContext from '../../context/UserContext'
import blogService from '../../api/blogService'
import { ReplyTextField } from '../../components/TextFields/TextField'
import { Send } from '@mui/icons-material'
import UserAvatar from '../../components/Avatar/Avatar'
import { IBlog } from '../../interfaces/blog.interface'

const validationSchema = yup.object({
  reply: yup.string().required('This field is required'),
})

const NewReply = (props: {
  bid: string
  setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>
}) => {
  const { user, isUserLoggedIn } = useContext(UserContext)

  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const formik = useFormik({
    initialValues: {
      reply: '',
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
      .createReply(values.reply, props.bid, user?._id)
      .then((response: any) => {
        showToast(true, 'success', 'Reply Created successfully', 'center')
        blogService.getAll().then((response) => props.setBlogs(response))
        values.reply = ''
        setSubmitting(false)
      })
      .catch((error: any) => {
        showToast(true, 'error', 'Reply Creation Failed', 'center')
        setSubmitting(false)
      })
  }

  return (
    <Card
      sx={{
        width: '90%',
        background: '#EEEEEE',
        boxShadow: 'none',
        border: 'none',
        margin: 'auto',
        my: 1,
        py: 1,
      }}
    >
      <CardHeader
        avatar={<UserAvatar name={user?.firstName} src={user?.image} />}
        title={
          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <ReplyTextField
              required
              fullWidth
              multiline
              id="reply"
              name="reply"
              placeholder="Add a comment..."
              value={formik.values.reply}
              onChange={formik.handleChange}
              error={formik.touched.reply && Boolean(formik.errors.reply)}
              helperText={formik.touched.reply && formik.errors.reply}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <Send color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        }
        sx={{ p: 1 }}
      />
    </Card>
  )
}

export default NewReply
