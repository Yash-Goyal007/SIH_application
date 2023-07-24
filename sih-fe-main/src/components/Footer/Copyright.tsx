import { Typography } from '@mui/material'

const Copyright = () => {
  return (
    <Typography fontSize={'12px'} py={2} variant="body2" align="left">
      Copyright &copy; AntarDarshnam {new Date().getFullYear()}. All Rights
      Reserved.
    </Typography>
  )
}

export default Copyright
