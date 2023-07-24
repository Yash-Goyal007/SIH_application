import { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { FormDialog } from '../../components/Dialog/Dialog'
import { FormIconButton, PrimaryButton } from '../../components/Buttons/Buttons'
import { FormTextField } from '../../components/TextFields/TextField'
import Books from './Books.json'
import Articles from './article.json'
import Games from './games.json'
import motivation from './motivational.json'

const Resources = () => {
  const [openDialog, setOpenDialog] = useState(true)
  const [age, setAge] = useState<number>(0)

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
        open={openDialog}
        sx={{
          '& .MuiPaper-root': {
            minHeight: '30vh',
            minWidth: '30vw',
          },
        }}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogTitle>
          <Typography
            variant="h3"
            component="p"
            textAlign="center"
            // sx={{ width: "100%" }}
          >
            Enter Your Age
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
            <FormTextField
              id="datetime-local"
              label="Your Age"
              type="number"
              value={age}
              onChange={(event) => setAge(parseInt(event.target.value))}
              sx={{ width: 250 }}
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
                  setOpenDialog(false)
                }}
              >
                Submit
              </PrimaryButton>
            </Stack>
          </Stack>
        </DialogContent>
      </FormDialog>
      <Box
        sx={{
          minHeight: '100vh',
          pt: 15,
          pb: 5,
        }}
      >
        <Container>
          <Typography sx={{ py: 5 }} variant="h2" component="h2" align="center">
            Choose Your Resources
          </Typography>
          <Typography
            sx={{ py: 5 }}
            variant="h2"
            component="h2"
            align="left"
            ml={3}
            alignItems="center"
          >
            <LibraryBooksIcon sx={{ mr: 1 }} />
            Books to read
          </Typography>

          <Grid container spacing={4} mb={6} justifyContent="center">
            {Books.map((book, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    padding: 0,
                    borderRadius: '10px',
                    maxWidth: 250,
                    minHeight: 300,
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
                  <CardMedia
                    sx={{
                      width: '100%',
                      height: 250,
                      backgroundPosition: 'center',
                      mb: 2,
                      objectFit: 'contain',
                    }}
                    image={book.img}
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
                      {book.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      align="center"
                      color="#7C7C7C"
                      paragraph
                      px={2}
                      textOverflow="ellipsis"
                    >
                      {book.description.substring(0, 200) + '...'}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      component="a"
                      href={book.link}
                      align="center"
                      color="primary"
                      target="_blank"
                      rel="noreferrer"
                      px={2}
                      textOverflow="ellipsis"
                    >
                      Get it here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography
            sx={{ py: 5 }}
            variant="h2"
            component="h2"
            align="left"
            ml={3}
            alignItems="center"
          >
            <LibraryBooksIcon sx={{ mr: 1 }} />
            Articles
          </Typography>

          <Grid container spacing={4} mb={6} justifyContent="center">
            {Articles.map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    padding: 0,
                    borderRadius: '10px',
                    maxWidth: 250,
                    maxHeight: 300,
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
                  <CardContent sx={{ p: 2 }}>
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
                      textOverflow="ellipsis"
                      maxWidth="250 px"
                      maxHeight="150 px"
                      paragraph
                      px={2}
                    >
                      {item.shortDescription}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      component="a"
                      href={item.link}
                      align="center"
                      color="primary"
                      target="_blank"
                      rel="noreferrer"
                      px={2}
                      mb={2}
                      textOverflow="ellipsis"
                    >
                      Get it here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
            sx={{ py: 5 }}
            variant="h2"
            component="h2"
            align="left"
            ml={3}
            alignItems="center"
          >
            <LibraryBooksIcon sx={{ mr: 1 }} />
            Games
          </Typography>

          <Grid container spacing={4} mb={6} justifyContent="center">
            {Games.map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    padding: 0,
                    borderRadius: '10px',
                    maxWidth: 250,
                    minHeight: 300,
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
                  <CardMedia
                    sx={{
                      width: '100%',
                      height: 250,
                      backgroundPosition: 'center',
                      mb: 2,
                      objectFit: 'contain',
                    }}
                    image={item.img}
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
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      component="a"
                      href={item.link}
                      align="center"
                      color="primary"
                      target="_blank"
                      rel="noreferrer"
                      px={2}
                      mb={2}
                      textOverflow="ellipsis"
                    >
                      Get it here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography
            sx={{ py: 5 }}
            variant="h2"
            component="h2"
            align="left"
            ml={3}
            alignItems="center"
          >
            <LibraryBooksIcon sx={{ mr: 1 }} />
            Motivational Stories
          </Typography>

          <Grid container spacing={4} mb={6} justifyContent="center">
            {motivation.map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    padding: 0,
                    borderRadius: '10px',
                    maxWidth: 250,
                    minHeight: 300,
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
                  <CardMedia
                    sx={{
                      width: '100%',
                      height: 250,
                      backgroundPosition: 'center',
                      mb: 2,
                      objectFit: 'contain',
                    }}
                    image={item.img}
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
                      {item.name}
                    </Typography>
                    {item.description && item.description.length > 200 && (
                      <Typography
                        variant="subtitle2"
                        fontWeight="500"
                        align="center"
                        color="#7C7C7C"
                        paragraph
                        px={2}
                      >
                        {item.description?.substring(0, 200) + '...'}
                      </Typography>
                    )}
                    <Typography
                      variant="subtitle2"
                      fontWeight="500"
                      component="a"
                      href={item.link}
                      align="center"
                      color="primary"
                      target="_blank"
                      rel="noreferrer"
                      px={2}
                      mb={2}
                      textOverflow="ellipsis"
                    >
                      Get it here
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Resources
