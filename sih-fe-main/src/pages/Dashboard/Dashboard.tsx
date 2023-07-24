import { Box, Card, Container, Grid, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import blogService from '../../api/blogService'
import BlogViewCard from '../../components/BlogViewCard/BlogViewCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import NotificationCard from '../../components/NotificationCard/NotificationCard'
import UserContext from '../../context/UserContext'
import { IBlog } from '../../interfaces/blog.interface'

const Dashboard = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [loading, setLoading] = useState(false)

  const { user } = useContext(UserContext)

  useEffect(() => {
    setLoading(true)
    if (user._id)
      blogService
        .getUserBlogs(user._id)
        .then((response: any) => {
          setBlogs(response)
          setLoading(false)
        })
        .catch((err: any) => setLoading(false))
  }, [user._id])

  return (
    <Container
      sx={{
        minHeight: '100vh',
        mt: 15,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <NotificationCard />
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6} pb={4.5}>
          <Card
            sx={{
              overflowY: 'auto',
              height: '75vh',
              width: '100%',
              mb: 3,
              boxShadow:
                '-12px -12px 24px rgba(142, 209, 252, 0.25), 12px 12px 24px #FFFFFF',
              borderRadius: '12px',
              p: 2,
            }}
          >
            <Typography mt={2} variant="h3" textAlign="center">
              Your Queries
            </Typography>
            <Box>
              {loading ? (
                <LoadingSpinner />
              ) : (
                blogs.map((blog) => <BlogViewCard key={blog._id} blog={blog} />)
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
