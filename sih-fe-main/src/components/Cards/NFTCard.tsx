import { Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { memo, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { BuyButton, FavoriteIconButton } from '../Buttons/Buttons'
import UserContext from '../../context/UserContext'

const NFTCard = (item: any) => {
  const { user } = useContext(UserContext)

  return (
    <Card
      sx={{
        backgroundColor: '#EEEEEE',
        margin: 'auto',
        position: 'relative',
        maxWidth: 350,
        maxHeight: 400,
        borderRadius: '10px',
        transition: '0s',
        boxShadow:
          '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
        ':hover .child': {
          display: 'block',
        },
      }}
    >
      <Link to={`/art/${item?.artId}`}>
        <CardMedia
          sx={{
            position: 'relative',
            zIndex: '1',
            filter: 'blur(5px) opacity(0.2)',
            display: 'block',
            height: 305,
            width: 'auto',
          }}
          image={
            item.isMinted ? item.nftUrl : `data:image/jpg;base64,${item.image}`
          }
        />
        <CardMedia
          sx={{
            position: 'relative',
            zIndex: '2',
            backgroundSize: 'contain',
            m: 'auto',
            mt: '-305px',
            display: 'block',
            height: 305,
            width: '85%',
          }}
          image={
            item.isMinted ? item.nftUrl : `data:image/jpg;base64,${item.image}`
          }
        />
      </Link>
      <Link
        to={
          item.statusInfo.mintStarted.status ||
          item.statusInfo.mintSuccess.status
            ? `/art/${item?.artId}`
            : `/mint-art/${item?.artId}`
        }
      >
        <Stack direction="row" justifyContent="center" alignItems="flex-end">
          <BuyButton className="child" variant="contained" size="large">
            {item.owner?._id !== user?._id
              ? 'Buy'
              : item.statusInfo.mintStarted.status ||
                item.statusInfo.mintSuccess.status ||
                item.isMinted
              ? 'View'
              : 'Mint'}
          </BuyButton>
        </Stack>
      </Link>
      <CardContent sx={{ textAlign: 'left', padding: '2px', margin: '10px' }}>
        <Link to={`/art/${item?.artId}`}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={0}
          >
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
              variant="subtitle1"
              gutterBottom
            >
              {item?.title}
            </Typography>
            <Typography
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                color: 'primary.main',
              }}
              variant="subtitle1"
            >
              {item?.artist?.firstName} {item?.artist?.lastName}
            </Typography>
          </Stack>
        </Link>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={0}
        >
          <Typography sx={{ color: '#7C7C7C' }} variant="subtitle2">
            {item?.rate && `${item?.rate} USD`}
          </Typography>
          <Link to={``}>
            <FavoriteIconButton>
              <FavoriteBorderIcon fontSize="small" />
            </FavoriteIconButton>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default memo(NFTCard)
