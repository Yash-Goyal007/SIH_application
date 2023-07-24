import { Container, Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import blogService from '../../api/blogService'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { IBlog } from '../../interfaces/blog.interface'
import BlogCard from './BlogCard'
import NewPost from './NewPost'

const Blog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    blogService
      .getAll()
      .then((response) => {
        setBlogs(response)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])
  return (
    <Container
      sx={{
        mt: 10,
        p: 5,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} alignSelf="center" mb={4} height="100%">
          <NewPost setBlogs={setBlogs} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          px={3}
          sx={{ height: '80vh', overflowY: 'auto' }}
        >
          <Box>
            {loading ? (
              <LoadingSpinner />
            ) : (
              blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} setBlogs={setBlogs} />
              ))
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Blog
