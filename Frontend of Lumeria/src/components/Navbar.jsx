import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import HomeIcon from '@mui/icons-material/Home'
import { useCart } from '../context/CartContext'
const Navbar = () => {
  const { cartItems } = useCart()
  const navigate = useNavigate()
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Toolbar>
        <Typography variant="h4" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>
          LUMERIA
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" startIcon={<HomeIcon />} onClick={() => navigate('/')} sx={{ fontWeight: 600 }}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/products')} sx={{ fontWeight: 600 }}>Products</Button>
          <IconButton color="inherit" onClick={() => navigate('/cart')}>
            <Badge badgeContent={itemCount} color="error"><ShoppingCartIcon /></Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar

