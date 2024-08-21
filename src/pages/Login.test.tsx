// src/components/Login.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { AuthProvider } from '../context/AuthContext';

// Mock AuthContext
jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

test('renders login form', () => {
  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

  // Check if inputs and button are rendered
  expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  expect(screen.getByText(/login/i)).toBeInTheDocument();
});

test('submits login form', async () => {
  const mockLogin = jest.fn();
  jest.mock('../context/AuthContext', () => ({
    useAuth: () => ({
      login: mockLogin,
    }),
  }));

  render(
    <AuthProvider>
      <Login />
    </AuthProvider>
  );

  fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password' } });
  fireEvent.click(screen.getByText(/login/i));

  expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password');
});
