import { Typography } from '@mui/material';

interface IProps {
  heading: string;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined;
}

const FooterHeading = ({ heading, variant }: IProps) => {
  return (
    <Typography color="#EEEEEE" component="h4" variant={variant ? variant : 'h4'} align="left">
      {heading}
    </Typography>
  );
};

export default FooterHeading;
