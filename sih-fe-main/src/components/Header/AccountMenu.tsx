import PersonOutline from '@mui/icons-material/PersonOutline'
import { Box, IconButton, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import { userMenuList } from './UserMenuList'
import ListItemText from '@mui/material/ListItemText'

interface IAccountMenuProps {
  handleLogout: () => void
}

function AccountMenu({ handleLogout }: IAccountMenuProps) {
  const handleMenuItemClick = (type: string) => {
    switch (type) {
      case 'logout': {
        handleLogout()
        break
      }
      default:
        return
    }
  }
  return (
    <Menu
      direction="center"
      handler={
        <Box
          sx={{ ml: 5, borderRadius: '50%', zIndex: 2000 }}
          component={IconButton}
          ml={2}
          p={1.25}
          bgcolor="grey.100"
        >
          <PersonOutline />
        </Box>
      }
    >
      {userMenuList.map((item: any) => {
        if (item.href) {
          return (
            <Link key={item.value} to={item.href}>
              <MenuItem sx={{ py: 1, px: 3, minWidth: '124px' }} key={item}>
                {/* <ListItemIcon> add icon later </ListItemIcon> */}
                <ListItemText>{item.label}</ListItemText>
              </MenuItem>
            </Link>
          )
        }
        return (
          <MenuItem
            onClick={() => {
              handleMenuItemClick(item.value)
            }}
            sx={{ py: 1, px: 3, minWidth: '124px' }}
            key={item}
          >
            {item.label}
          </MenuItem>
        )
      })}
    </Menu>
  )
}

export default AccountMenu
