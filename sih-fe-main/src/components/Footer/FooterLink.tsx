import { MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface IMenuList {
  menuList: {
    menuLink: string;
    menuText: string;
  }[];
}

function FooterLink({ menuList }: IMenuList) {
  return (
    <>
      {menuList.map((menu, index) => (
        <MenuItem sx={{ paddingLeft: '0', ':hover': { textDecoration: 'none' } }} key={index}>
          <Link to={menu.menuLink}>
            <Typography color="#EEEEEE" textAlign="right" variant="subtitle2">
              {menu.menuText}
            </Typography>
          </Link>
        </MenuItem>
      ))}
    </>
  );
}

export function FooterLinkCustom({ menuList }: IMenuList) {
  return (
    <>
      {menuList.map((menu) => (
        <MenuItem
          sx={{ paddingLeft: '0', ':hover': { textDecoration: 'none' } }}
          key={menu.menuLink}>
          <a href={menu.menuLink} rel="noreferrer" target="_blank">
            <Typography color="#EEEEEE" textAlign="left" variant="subtitle2">
              {menu.menuText}
            </Typography>
          </a>
        </MenuItem>
      ))}
    </>
  );
}

export default FooterLink;
