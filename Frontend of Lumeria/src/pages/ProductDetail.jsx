import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Grid, Card, CardMedia, Typography, Button, Box, CircularProgress } from '@mui/material'
import { useCart } from '../context/CartContext'
import axios from 'axios'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  useEffect(() => { fetchProduct() }, [id])

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    navigate('/cart')
  }

  if (loading) {
    return <Container maxWidth="lg"><Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh"><CircularProgress /></Box></Container>
  }

  if (!product) {
    return <Container maxWidth="lg"><Typography variant="h4">Product not found</Typography></Container>
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button onClick={() => navigate('/products')} sx={{ mb: 2 }}>← Back to Products</Button>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}><Card><CardMedia component="img" image={product.imageUrl || 'https://via.placeholder.com/500x500'} alt={product.name} /></Card></Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>{product.name}</Typography>
          <Typography variant="h4" color="primary" gutterBottom>${product.price}</Typography>
          <Typography variant="body1" paragraph>{product.description || 'No description available'}</Typography>
          <Box sx={{ my: 3 }}><Typography variant="subtitle1" gutterBottom>Stock: {product.stock}</Typography></Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button variant="outlined" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
            <Typography variant="h6">{quantity}</Typography>
            <Button variant="outlined" onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</Button>
          </Box>
          <Button variant="contained" size="large" fullWidth onClick={handleAddToCart} disabled={quantity > product.stock} sx={{ mt: 3 }}>Add to Cart</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetail

