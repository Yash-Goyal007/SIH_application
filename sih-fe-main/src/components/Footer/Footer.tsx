import { useState } from 'react'
import {
  Avatar,
  Box,
  Grid,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookRounded from '@mui/icons-material/FacebookRounded'
import Youtube from '@mui/icons-material/YouTube'
import FooterHeading from './FooterHeading'
import FooterLink from './FooterLink'
import { resourcesList, companyListInternal } from './FooterMenuList'
import { SecondaryButton } from '../../components/Buttons/Buttons'
import { useSnackbarContext } from '../Snackbar/context'
import footerLogo from '../../assets/logo.png'

const Footer = () => {
  const [emailNewsletter, setEmailNewsletter] = useState('')
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const handleNewsletter = () => {
    showToast(true, 'success', 'Signed up for newsletter !!', 'center')
  }
  return (
    <Box sx={{ backgroundColor: 'primary.main' }} px={{ xs: 2, sm: 3, lg: 4 }}>
      <Box pt={6} pb={{ md: 2 }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            alt="A"
            src={footerLogo}
            sx={{
              position: 'absolute',
              top: '-75px',
              left: '75px',
              width: 50,
              height: 50,
              backgroundColor: '#FFFFFF',
            }}
          />
        </Box>
        <Grid container spacing={6} px={{ xs: 0, sm: 2, lg: 4 }} py={1}>
          <Grid item xs={12}>
            <Grid container spacing={12} justifyContent="space-between">
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="button"
                  component="p"
                  color="white"
                  sx={{ textTransform: 'none' }}
                >
                  AntarDarshnam is a Psychology based organization. Apart from
                  bridging the gap between the schools and councellors, we use
                  latest technology to overcome various pschological challenges
                  faced by students.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Grid container spacing={{ sm: 6, md: 12, lg: 20 }}>
                  <Grid item xs={6} sm={6} md={6}>
                    <FooterHeading heading="Resources" />
                    <FooterLink menuList={resourcesList} />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <FooterHeading heading="Company" />
                    <FooterLink menuList={companyListInternal} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={12}>
              <Grid item xs={12} sm={6}>
                <Stack
                  direction="column"
                  justifyContent="space-around"
                  spacing={4}
                >
                  <FooterHeading heading="Newsletter" variant="h3" />
                  <Typography
                    variant="button"
                    component="h6"
                    color="white"
                    sx={{ textTransform: 'none' }}
                  >
                    Signup for our newsletter to get the latest news in your
                    inbox.
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignContent: 'centre',
                    }}
                  >
                    <TextField
                      sx={{
                        p: 0.5,
                        height: 'fit-content',
                        marginRight: '10px',
                        background: '#EEEEEE',
                        boxShadow: '0px 4px 4px rgba(24, 26, 43, 0.25)',
                        borderRadius: '5px',
                        '& input': {
                          fontSize: '16px',
                          fontWeight: 500,
                        },
                        '& fieldset': {
                          borderWidth: '0 !important',
                        },
                      }}
                      fullWidth
                      name="newsLetter"
                      value={emailNewsletter}
                      onChange={(e) => setEmailNewsletter(e.target.value)}
                      placeholder="Enter your email address"
                      focused
                    />
                    <SecondaryButton
                      onClick={handleNewsletter}
                      variant="contained"
                    >
                      <Typography
                        component="span"
                        variant="button"
                        fontWeight="700"
                      >
                        Sign Up
                      </Typography>
                    </SecondaryButton>
                  </Box>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'end',
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  spacing={2}
                >
                  <FooterHeading heading="Join our community" variant="h3" />
                  <Stack
                    direction="row"
                    alignItems="center"
                    flexWrap="wrap"
                    spacing={4}
                  >
                    <a
                      href={
                        'https://www.youtube.com/channel/UCJT0ljhOLf0JZAae6iHeFhw'
                      }
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Youtube
                        color="primary"
                        sx={{
                          background: 'white',
                          borderRadius: '10px',
                          p: '5px',
                          height: '50px',
                          width: '50px',
                        }}
                      />
                    </a>
                    <a
                      href={'https://www.instagram.com/'}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <SvgIcon
                        viewBox="0 0 40 30"
                        sx={{
                          background: 'white',
                          borderRadius: '10px',
                          p: '5px',
                          height: '50px',
                          width: '50px',
                        }}
                      >
                        <path
                          d="M12.456 0C7.79302 0 4 3.79653 4 8.46069V20.544C4 25.207 7.79653 29 12.4607 29H24.544C29.207 29 33 25.2035 33 20.5393V8.45597C33 3.79302 29.2035 0 24.5393 0H12.456ZM26.9583 4.83333C27.6253 4.83333 28.1667 5.37467 28.1667 6.04167C28.1667 6.70867 27.6253 7.25 26.9583 7.25C26.2913 7.25 25.75 6.70867 25.75 6.04167C25.75 5.37467 26.2913 4.83333 26.9583 4.83333ZM18.5 7.25C22.4984 7.25 25.75 10.5016 25.75 14.5C25.75 18.4984 22.4984 21.75 18.5 21.75C14.5016 21.75 11.25 18.4984 11.25 14.5C11.25 10.5016 14.5016 7.25 18.5 7.25ZM18.5 9.66667C17.2181 9.66667 15.9887 10.1759 15.0823 11.0823C14.1759 11.9887 13.6667 13.2181 13.6667 14.5C13.6667 15.7819 14.1759 17.0113 15.0823 17.9177C15.9887 18.8241 17.2181 19.3333 18.5 19.3333C19.7819 19.3333 21.0113 18.8241 21.9177 17.9177C22.8241 17.0113 23.3333 15.7819 23.3333 14.5C23.3333 13.2181 22.8241 11.9887 21.9177 11.0823C21.0113 10.1759 19.7819 9.66667 18.5 9.66667Z"
                          fill="#0093E3"
                        />
                      </SvgIcon>
                    </a>
                    <a
                      href={'https://www.facebook.com/'}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FacebookRounded
                        color="primary"
                        sx={{
                          background: 'white',
                          borderRadius: '10px',
                          p: '5px',
                          height: '50px',
                          width: '50px',
                        }}
                      />
                    </a>
                    <a
                      href={'https://twitter.com/'}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <TwitterIcon
                        color="primary"
                        sx={{
                          background: 'white',
                          borderRadius: '10px',
                          p: '5px',
                          height: '50px',
                          width: '50px',
                        }}
                      />
                    </a>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
