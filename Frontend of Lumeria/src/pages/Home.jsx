import React from 'react'
import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SecurityIcon from '@mui/icons-material/Security'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import StarIcon from '@mui/icons-material/Star'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 800, mb: 2, fontFamily: "'Playfair Display', serif" }}>
              Welcome to LUMERIA
            </Typography>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.25rem', md: '2rem' }, mb: 4, opacity: 0.95, fontWeight: 300 }}>
              Discover Premium Products, Unmatched Quality
            </Typography>
            <Button variant="contained" size="large" onClick={() => navigate('/products')} startIcon={<ShoppingBagIcon />} sx={{ px: 6, py: 2, fontSize: '1.2rem', fontWeight: 600, backgroundColor: 'white', color: '#667eea', borderRadius: '50px', textTransform: 'none' }}>
              Start Shopping Now
            </Button>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6, color: '#2c3e50', fontFamily: "'Playfair Display', serif" }}>Why Choose LUMERIA?</Typography>
        <Grid container spacing={4}>
          {[{ icon: <LocalShippingIcon sx={{ fontSize: 48 }} />, title: 'Fast Shipping', desc: 'Lightning-fast delivery.', color: '#3498db' }, { icon: <SecurityIcon sx={{ fontSize: 48 }} />, title: 'Secure Payment', desc: 'Bank-level encryption.', color: '#2ecc71' }, { icon: <SupportAgentIcon sx={{ fontSize: 48 }} />, title: '24/7 Support', desc: 'Round-the-clock service.', color: '#e74c3c' }].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 4, borderRadius: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)', '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 16px 40px rgba(0,0,0,0.15)' } }}>
                <CardContent>
                  <Box sx={{ display: 'inline-flex', p: 2, mb: 3, borderRadius: '50%', backgroundColor: `${feature.color}15`, color: feature.color }}>{feature.icon}</Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2, color: '#2c3e50' }}>{feature.title}</Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>{feature.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, fontWeight: 600 }}>Trusted by Thousands</Typography>
          <Grid container spacing={4} textAlign="center">
            {[{ number: '10K+', label: 'Happy Customers' }, { number: '5K+', label: 'Products' }, { number: '100+', label: 'Countries' }, { number: '4.8', label: 'Rating', icon: true }].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: '#fff' }}>{stat.number}{stat.icon && <StarIcon sx={{ color: '#f39c12', fontSize: 32 }} />}</Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home

