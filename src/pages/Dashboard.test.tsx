// src/pages/Dashboard.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { Dashboard } from './Dashboard';

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({
    user: { email: 'test@example.com' },
  }),
}));

describe('Dashboard Page', () => {
  it('renders the dashboard with user email', () => {
    render(
      <AuthProvider>
        <Router>
          <Dashboard />
        </Router>
      </AuthProvider>
    );

    expect(screen.getByText(/welcome, test@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/this is your dashboard./i)).toBeInTheDocument();
  });
});
