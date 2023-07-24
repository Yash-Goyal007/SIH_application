import { LoadingButton as MuiLoadingButton } from '@mui/lab'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { primary } from '../../styles/themeColors'

export const PrimaryButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '132px',
  boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(24, 26, 43, 0.25)',
}))

export const LoadingButton = styled(MuiLoadingButton)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '132px',
  boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(24, 26, 43, 0.25)',
}))

export const SecondaryButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '132px',
  background: '#EEEEEE',
  boxShadow: '8px 8px 16px rgba(24, 26, 43, 0.25)',
  color: '#0093E3',
  '&:hover': {
    backgroundColor: '#EEEEEE',
    boxShadow: '8px 8px 16px rgba(142, 209, 252, 0.25)',
  },
}))

export const WhiteButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '132px',
  background: '#EEEEEE',
  boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(142, 209, 252, 0.25)',
  transform: 'rotate(180deg)',
  color: '#0093E3',
  '&:hover': {
    backgroundColor: '#EEEEEE',
  },
}))

export const GradientButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '132px',
  background: 'linear-gradient(180deg, #8ED1FC 0%, #0093E3 100%)',
  boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(24, 26, 43, 0.25)',
  transform: 'rotate(180deg)',
  color: '#EEEEEE',
  '&:hover': {
    backgroundColor: 'linear-gradient(180deg, #8ED1FC 0%, #0093E3 100%)',
  },
}))

export const DarkLongButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '400px',
  background: '#181A2B',
  boxShadow: '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(24, 26, 43, 0.25)',
  color: '#EEEEEE',
  '&:hover': {
    backgroundColor: '#181A2B',
  },
}))

export const SecondaryLongButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '400px',
  background: '#EEEEEE',
  boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(24, 26, 43, 0.25)',
  color: '#0093E3',
  '&:hover': {
    backgroundColor: '#EEEEEE',
  },
}))

export const SecondaryWhiteButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '400px',
  background: '#EEEEEE',
  boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(142, 209, 252, 0.25)',
  transform: 'rotate(180deg)',
  color: '#0093E3',
  '&:hover': {
    backgroundColor: '#EEEEEE',
  },
}))

//Buttons for sign up page

export const BlackButton = styled(Button)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  color: 'white',
  backgroundColor: 'black',
  '&:hover': {
    backgroundColor: 'black',
  },
}))

//Explore Page Filter Button
export const ExploreFilterButton = styled(Button)((props) => ({
  margin: 2,
  padding: 2,
  borderRadius: '5px',
  color: '#181A2B',
  fontWeight: 700,
  '&:hover': {
    color: primary.main,
  },
}))

//Explore Page Search Button
export const Searchbutton = styled(Button)((props) => ({
  minHeight: '46px',
  MaxWidth: '64px',
  background: primary.main,
  boxShadow:
    '-10px -10px 20px #FFFFFF, 10px 10px 20px rgba(142, 209, 252, 0.25)',
  borderRadius: '0px 5px 5px 0px',
}))

//Buy Button
export const BuyButton = styled(Button)((props) => ({
  width: '100%',
  position: 'absolute',
  zIndex: '2',
  display: 'none',
  borderRadius: '0px',
}))

//Card Explore Button
export const FavoriteIconButton = styled(Button)((props) => ({
  color: primary.main,
}))

export const FormIconButton = styled(Button)((props) => ({
  color: 'Background',
  zIndex: '2',
  boxShadow: '-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(24, 26, 43, 0.25)',
  borderRadius: '5px',
  marginLeft: '0.5em',
}))

export const FormActionsButtons = styled(Button)((props) => ({
  borderRadius: '5px',
}))
