import renderWithRedux from './helpers';
import { screen } from '@testing-library/react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';


describe('Test 1', () => {
  const renderAppWithRouter = (initialEntries = ['/']) => {
    return (
      <Router history={ createMemoryHistory({ initialEntries }) }>
        <App />
      </Router>
    )
  }
  test('renders learn react link', () => {
    renderWithRedux(renderAppWithRouter());
    const linkElement = screen.getByText(/Clique Aqui/i);
    expect(linkElement).toBeInTheDocument();
  });
})
