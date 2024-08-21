// src/pages/Register.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { Register } from './Register';

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    createUser: jest.fn().mockResolvedValue(null),
  }),
}));

describe('Register Page', () => {
  it('renders the registration form', () => {
    render(
      <AuthProvider>
        <Router>
          <Register />
        </Router>
      </AuthProvider>
    );

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('submits the registration form', async () => {
    render(
      <AuthProvider>
        <Router>
          <Register />
        </Router>
      </AuthProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(await screen.findByRole('button', { name: /register/i })).toBeInTheDocument();
  });
});
