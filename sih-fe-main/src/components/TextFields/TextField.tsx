import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { primary } from '../../styles/themeColors'

export const FormTextField = styled(TextField)(() => ({
  borderRadius: '5px',
  '& label.Mui-focused': {
    color: primary.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: primary.main,
  },
  '& .MuiOutlinedInput-root': {
    boxShadow:
      '-12px -12px 24px rgba(255, 255, 255, 0.6), 12px 12px 24px rgba(142, 209, 252, 0.25)',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: primary.main,
    },
  },
  marginBottom: '15px',
  marginTop: '15px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  width: '100%',
}))

export const ReplyTextField = styled(TextField)(() => ({
  borderRadius: '5px',
  '& label.Mui-focused': {
    color: primary.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: primary.main,
  },
  '& .MuiOutlinedInput-root': {
    boxShadow:
      '-12px -12px 24px rgba(255, 255, 255, 0.6), 12px 12px 24px rgba(142, 209, 252, 0.25)',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: primary.main,
    },
  },
  marginBottom: '15px',
  marginTop: '15px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '12px',
  width: '100%',
}))
