import { Grid, Box } from '@mui/material';

interface IBrandLink {
  data: {
    name: string;
    img: string;
    link: string;
  }[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}
const BrandLink = ({ data, xs, sm, md, lg }: IBrandLink) => {
  return (
    <Grid container spacing={4} mb={12} justifyContent="center">
      {data.map((item, i) => (
        <Grid
          item
          xs={xs || 6}
          sm={sm || 6}
          md={md || 4}
          lg={lg || 4}
          key={i}
          sx={{ display: 'flex' }}
          justifyContent="center">
          <a href={item.link} target="blank" rel="noreferrer" style={{ alignSelf: 'center' }}>
            <Box
              sx={{
                margin: 'auto',
                width: '150px',
                maxHeight: '250px',
                maxWidth: '100%',
                objectFit: 'cover'
              }}
              component={'img'}
              src={item.img}
              alt={item.name}
            />
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default BrandLink;
