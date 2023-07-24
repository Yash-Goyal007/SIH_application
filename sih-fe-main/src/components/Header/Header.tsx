import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Toolbar from '@mui/material/Toolbar'
import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { APP_NAME } from '../../constants/app-info'
import UserContext from '../../context/UserContext'
import logo from '../../assets/logo.png'
import userService from '../../api/userService'
import { useSnackbarContext } from '../Snackbar/context'
import AccountMenu from './AccountMenu'
import { StyledAppbar } from './styles'
import MenuItems from './MenuItems'
import { SecondaryButton } from '../../components/Buttons/Buttons'

const Header = () => {
  const { isUserLoggedIn, setUser, setToken, setIsUserLoggedIn } =
    useContext(UserContext)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [active, setActive] = React.useState<string>('home')

  const navigate = useNavigate()
  const location = useLocation()

  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleLogOut = () => {
    userService.logout()
    setIsUserLoggedIn(false)
    setUser(null)
    setToken(null)
    showToast(true, 'success', 'User logged out successfully!', 'center')
    navigate('/')
  }

  useEffect(() => {
    const UserData = userService.getCurrentUser()
    if (UserData != null) {
      setUser(UserData.user)
      setToken(UserData.token)
      setIsUserLoggedIn(true)
    } else {
      setIsUserLoggedIn(false)
    }
  }, [setUser, setToken, setIsUserLoggedIn])

  useEffect(() => {
    setActive(location.pathname.substring(1))
  }, [location.pathname])

  return (
    <StyledAppbar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* app logo */}
          <Link to="/">
            <Box
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              height="78px"
              component={'img'}
              src={logo}
              alt={APP_NAME}
            />
          </Link>

          {/* menu items in mobile screen */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItems
                handleCloseNavMenu={handleCloseNavMenu}
                active={active}
                setActive={setActive}
              />
            </Menu>
          </Box>
          {/* menu items in large screen */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <MenuItems
              handleCloseNavMenu={handleCloseNavMenu}
              active={active}
              setActive={setActive}
            />
          </Box>

          {/*  LogIn button  */}
          <Box sx={{ flexGrow: 0 }}>
            <Box
              alignItems="center"
              sx={{ display: { xs: 'flex', md: 'flex' } }}
            >
              {!isUserLoggedIn && (
                <Link to="login">
                  <SecondaryButton variant="contained">Log In</SecondaryButton>
                </Link>
              )}
              {isUserLoggedIn && <AccountMenu handleLogout={handleLogOut} />}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppbar>
  )
}

export default Header
