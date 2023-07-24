import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'

export const FormDialog = styled(Dialog)(({ theme }) => ({
  background: 'rgba(153, 153, 153, 0.4)',
  borderRadius: '20px',
  '& .MuiPaper-root': {
    minHeight: '50vh',
    minWidth: '50vw',
  },
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(3),
    background: '#EEEEEE',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& .MuiDialogContent-root': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    background: '#EEEEEE',
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    background: '#EEEEEE',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
