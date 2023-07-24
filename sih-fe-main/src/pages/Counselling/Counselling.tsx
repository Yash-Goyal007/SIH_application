import { useContext, useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FormDialog } from '../../components/Dialog/Dialog'
import { FormIconButton, PrimaryButton } from '../../components/Buttons/Buttons'
import { counsellings } from './counselling-types'
import { FormTextField } from '../../components/TextFields/TextField'
import { useSnackbarContext } from '../../components/Snackbar/context'
import eventService from '../../api/eventService'
import UserContext from '../../context/UserContext'

const validationSchema = yup.object({
  description: yup.string().required('Email is required'),
  datetime: yup.string().required('Password is required'),
})

const Counselling = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const {
    ToastService: { showToast },
  } = useSnackbarContext()
  const { user } = useContext(UserContext)

  const handleSubmit = (values: any, setSubmitting: any) => {}

  const formik = useFormik({
    initialValues: {
      description: '',
      datetime: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting)
    },
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      <FormDialog
        sx={{ minHeight: '25vh' }}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <DialogTitle>
            <Typography
              variant="h3"
              component="p"
              textAlign="center"
              sx={{ width: '100%' }}
            >
              Schedule a session
            </Typography>
            <FormIconButton
              aria-label="close"
              onClick={() => setOpenDialog(false)}
            >
              <Close fontSize="medium" sx={{ color: '#7C7C7C' }} />
            </FormIconButton>
          </DialogTitle>
          <DialogContent>
            <Stack
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Tell us more about your problem *
              </Typography>
              <FormTextField
                required
                multiline
                minRows="4"
                maxRows="4"
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
                sx={{ maxWidth: 350 }}
              />
              <Typography
                component="label"
                variant="subtitle2"
                color="text.secondary"
              >
                Preffered Date of counselling *
              </Typography>
              <FormTextField
                name="datetime"
                id="datetime-local"
                type="datetime-local"
                sx={{ maxWidth: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ marginTop: '50px' }}
              >
                <PrimaryButton
                  sx={{ background: '#EEEEEE' }}
                  onClick={() => {
                    console.log(user)
                    if (!user || user.profileType !== 'Patient')
                      showToast(
                        true,
                        'error',
                        'Only a registered patient can book and appointment !!',
                        'center'
                      )
                    else {
                      eventService.createEvent(
                        '63045980fd59ca63358f2ae2',
                        user._id,
                        formik.values.datetime,
                        '2'
                      )
                      showToast(
                        true,
                        'success',
                        'Appointment booked successfully !!',
                        'center'
                      )
                    }
                    setOpenDialog(false)
                  }}
                >
                  Submit
                </PrimaryButton>
              </Stack>
            </Stack>
          </DialogContent>
        </Box>
      </FormDialog>

      <Grid container spacing={4} mb={6} justifyContent="center">
        {counsellings.map((item, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                padding: 0,
                borderRadius: '10px',
                maxWidth: 300,
                height: 400,
                margin: 'auto',
                background: '#EEEEEE',
                boxShadow:
                  '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
                '&:hover': {
                  boxShadow:
                    '-12px -12px 24px #FFFFFF, 24px 24px 48px rgba(142, 209, 252, 0.6)',
                },
              }}
            >
              <CardActionArea onClick={() => setOpenDialog(true)}>
                <CardMedia
                  sx={{
                    width: '100%',
                    height: 300,
                    backgroundPosition: 'center',
                    mb: 2,
                    objectFit: 'contain',
                  }}
                  image={item.image}
                  component="img"
                />
                <CardContent>
                  <Typography
                    fontWeight="700"
                    variant="button"
                    component="h5"
                    align="center"
                    gutterBottom
                    px={2}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="500"
                    align="center"
                    color="#7C7C7C"
                    paragraph
                    px={2}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Counselling
