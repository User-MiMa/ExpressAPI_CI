import '@testing-library/jest-dom/vitest';
import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('temporal test to pass job', () => {
  test('shows h1', () => {
    render(<App />);

    expect(document.querySelector('h1').textContent).toBe('Placeholder');
  });
});
