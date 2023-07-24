import { Typography } from '@mui/material';
import { Box } from '@mui/system';

interface IHeroImage {
  src: string;
  height?: string;
  width?: string;
  background?: string;
  heading?: string;
}
function HeroImage({ src, height, width, background, heading }: IHeroImage) {
  return (
    <Box
      sx={{
        background: '#EEEEEE',
        borderRadius: '20px',
        width: '100%',
        height: '25rem',
        boxShadow: '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
      <Typography
        variant="subtitle1"
        component="h3"
        align="center"
        color="primary"
        sx={{ p: 1, zIndex: 2, background: '#EEEEEE' }}>
        {heading}
      </Typography>
      <Box
        component={'img'}
        sx={{
          position: 'relative',
          zIndex: 1,
          objectFit: 'cover',
          filter: 'blur(5px) opacity(0.2)',
          height: height ? height : '24rem',
          width: width ? width : '100%',
          background: background ? background : 'none'
        }}
        src={src}
        alt="Image"
      />
      <Box
        component={'img'}
        sx={{
          position: 'relative',
          zIndex: 2,
          objectFit: 'contain',
          m: 'auto',
          mt: height ? '-' + height : '-22.5rem',
          height: height ? height : '20rem',
          width: width ? width : '80%',
          background: background ? background : 'none'
        }}
        src={src}
        alt="Image"
      />
    </Box>
  );
}

export default HeroImage;
