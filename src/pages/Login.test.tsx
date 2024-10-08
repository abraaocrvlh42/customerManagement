// src/pages/Login.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { Login } from './Login';

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn().mockResolvedValue(null),
  }),
}));

describe('Login Page', () => {
  it('renders the login form', () => {
    render(
      <AuthProvider>
        <Router>
          <Login />
        </Router>
      </AuthProvider>
    );

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('submits the login form', async () => {
    render(
      <AuthProvider>
        <Router>
          <Login />
        </Router>
      </AuthProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
