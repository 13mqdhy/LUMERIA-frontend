import React, { useState, useEffect } from 'react'
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>All Products</Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 } }}>
              <CardMedia component="img" height="200" image={product.imageUrl || 'https://via.placeholder.com/300x200'} alt={product.name} sx={{ objectFit: 'cover', cursor: 'pointer' }} onClick={() => navigate(`/products/${product.id}`)} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{product.description || 'No description available'}</Typography>
                <Typography variant="h6" color="primary" gutterBottom>${product.price}</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" size="small" onClick={() => navigate(`/products/${product.id}`)}>View</Button>
                  <Button variant="contained" size="small" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products

