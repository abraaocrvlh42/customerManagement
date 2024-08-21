// src/setupTests.ts
import { AuthProvider } from './context/AuthContext';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';

// Configura o AuthProvider para ser usado nos testes
const renderWithAuthProvider = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: AuthProvider, ...options });

export * from '@testing-library/react';
export { renderWithAuthProvider as render };


