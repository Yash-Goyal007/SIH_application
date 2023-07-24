import { MenuItem } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link'

type Props = {
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void
  active: string
  setActive: (s: string) => void
}

const MenuItems = ({ handleCloseNavMenu, active, setActive }: Props) => {
  const navigate = useNavigate()
  const menuList = [
    {
      menuLink: 'home',
      menuText: 'Home',
      onClick: () => {
        setActive('home')
        navigate('/')
      },
    },
    {
      menuLink: 'resources',
      menuText: 'Resources',
      onClick: () => {
        setActive('resources')
        navigate('/resources')
      },
    },
    {
      menuLink: 'qna',
      menuText: 'Q&A',
      onClick: () => {
        setActive('qna')
        navigate('/qna')
      },
    },
    {
      menuLink: 'about',
      menuText: 'About',
      onClick: () => {
        setActive('about')
        navigate('/about')
      },
    },
  ]
  return (
    <>
      {menuList.map((menu) => (
        <MenuItem
          key={menu.menuLink}
          onClick={handleCloseNavMenu}
          sx={{ m: 2, '&:hover': { textDecoration: 'none' } }}
        >
          <Link
            component="a"
            onClick={menu.onClick}
            color={active === menu.menuLink ? 'primary' : '#000'}
            sx={{
              fontSize: 16,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            {menu.menuText}
          </Link>
        </MenuItem>
      ))}
    </>
  )
}

export default MenuItems
