// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importar para usar matchers como toBeInTheDocument
import { AppRoutes } from './routes'; // Importar seu componente

test('renders the app correctly', () => {
  render(<AppRoutes />);
  // Exemplo de verificação
  const element = screen.getByText(/some text/i); // Troque "some text" pelo texto esperado
  expect(element).toBeInTheDocument();
});