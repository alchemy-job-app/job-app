import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Auth from './views/Auth/Auth';

it('should display a "sign in" button when user is logged out', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Auth />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
