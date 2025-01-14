// src/pages/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:3000';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '' }); // Reset form data on toggle
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const registerUser = async (username, email, password) => {
  try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
          throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('User registered:', data);
      navigate('/dashboard'); // Redirect to dashboard after registration
  } catch (error) {
      console.error('Error:', error);
  }
};

const loginUser = async (email, password) => {
  try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
          throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('User logged in:', data);

      // Store the JWT in localStorage
      localStorage.setItem('token', data.token); // Assuming the token is returned in the response

      // Optionally, you can set an Authorization header for future requests
      // For example: fetch(`${API_BASE_URL}/some-protected-route`, { headers: { Authorization: `Bearer ${data.token}` } })

      navigate('/dashboard'); // Redirect to dashboard after login
  } catch (error) {
      console.error('Error:', error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isLogin) {
      await loginUser(formData.email, formData.password);
  } else {
      await registerUser(formData.name, formData.email, formData.password);
  }
};

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" align="center">
            {isLogin ? 'Login' : 'Sign Up'}
          </Typography>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
              />
            )}
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <Button
              variant="text"
              color="primary"
              fullWidth
              onClick={toggleForm}
              style={{ marginTop: '10px' }}
            >
              {isLogin ? 'Create an account' : 'Already have an account? Login'}
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;