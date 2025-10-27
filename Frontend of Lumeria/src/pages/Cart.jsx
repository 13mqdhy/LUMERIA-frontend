import React from 'react'
import { Container, Box, Typography, Button, Card, CardContent, IconButton, Divider } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>Your Cart is Empty</Typography>
        <Button variant="contained" onClick={() => navigate('/products')} sx={{ mt: 2 }}>Continue Shopping</Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Box sx={{ mt: 4 }}>
        {cartItems.map((item) => (
          <Card key={item.id} sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">${item.price} each</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Button variant="outlined" size="small" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <Typography>{item.quantity}</Typography>
                  <Button variant="outlined" size="small" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  <Typography variant="h6" sx={{ minWidth: 100, textAlign: 'right' }}>${(parseFloat(item.price) * item.quantity).toFixed(2)}</Typography>
                  <IconButton color="error" onClick={() => removeFromCart(item.id)}><DeleteIcon /></IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Total:</Typography>
        <Typography variant="h5" color="primary">${getTotalPrice().toFixed(2)}</Typography>
      </Box>
      <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
        <Button variant="outlined" onClick={() => navigate('/products')}>Continue Shopping</Button>
        <Button variant="contained" size="large">Checkout</Button>
      </Box>
    </Container>
  )
}

export default Cart

