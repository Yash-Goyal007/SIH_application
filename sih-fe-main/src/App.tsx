import { Suspense, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Outlet, Routes } from 'react-router-dom'
import { VolumeOff, VolumeUp } from '@mui/icons-material'
import { Box, CssBaseline, IconButton, ThemeProvider } from '@mui/material'
import AppRoutes from './common/AppRoutes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import SnackbarProvider from './components/Snackbar/SnackbarProvider'
import UserContextProvider from './context/UserContextProvider'
import UploadProvider from './providers/UploadProviders/UploadProvider'
import theme from './styles/styles'
import audio from './assets/bineural.mpeg'

function App() {
  const [muted, setMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audioRef.current?.play().catch(() =>
      document.addEventListener('mousemove', () => audioRef.current?.play(), {
        once: true,
      })
    )
  }, [])

  return (
    <UserContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <CssBaseline />

              <audio ref={audioRef} muted={muted} loop autoPlay>
                <source src={audio} type="audio/mpeg" />
              </audio>
              <Box sx={{ position: 'fixed', right: 0, bottom: 0, zIndex: 5 }}>
                {muted ? (
                  <IconButton onClick={() => setMuted(false)}>
                    <VolumeOff fontSize="large" />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setMuted(true)}>
                    <VolumeUp fontSize="large" />
                  </IconButton>
                )}
              </Box>

              <Header />
              <UploadProvider>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>{AppRoutes}</Routes>
                </Suspense>
                <Outlet />
              </UploadProvider>
              <Footer />
            </Box>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
