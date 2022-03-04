import { render, userEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Auth from './views/Auth/Auth';

// jest.mock('./context/UserContext/UserContext');

const mockJobs = [
  {
    id: 15,
    created_at: '2022-03-02T17:44:55.736032+00:00',
    notes: 'wohoo',
    deadline: '2222-02-22',
    company: 'wung dunee',
    position: 'windingso',
    completion: true,
    user_id: 'e4f591d3-812f-48dc-baaa-f559d65ecfaf',
  },
  {
    id: 30,
    created_at: '2022-03-03T20:54:06.897799+00:00',
    notes: 'Yeet wie the sbiset',
    deadline: '2022-03-17',
    company: 'Tanium',
    position: 'Software Engineer',
    completion: false,
    user_id: 'e4f591d3-812f-48dc-baaa-f559d65ecfaf',
  },
  {
    id: 32,
    created_at: '2022-03-04T00:32:06.77619+00:00',
    notes: 'Hello',
    deadline: '2222-02-22',
    company: 'Amazon',
    position: 'Software Engineer',
    completion: false,
    user_id: 'e4f591d3-812f-48dc-baaa-f559d65ecfaf',
  },
];

const getUser = rest.get(
  'https://tgkocaxajsfoytotcscy.supabase.co',
  (req, res, ctx) => {
    return res(ctx.json(mockJobs));
  }
);

const server = setupServer(getUser);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

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

it('should display a list of jobs', async () => {
  render(
    <UserProvider>
      <MemoryRouter initialEntries={['/profile']}>
        <Auth />
      </MemoryRouter>
    </UserProvider>
  );
  await screen.findByText(/Amazon/i);
  await screen.findByText(/Tanium/i);
});

it('should sign user up/sign in', () => {
  //find sign up button and sign up
  const signUpBtn = screen.getByRole('navigation');
  within(navigation).getByRole('link', { name: /sign up/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });
  userEvent.type('bob@example.com', emailInput);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  userEvent.type('12345678', passwordInput);
  userEvent.click(signUpBtn);

  // redirect to sign in page and sign in
  const signInBtn = screen.getByRole('button', { name: /sign in/i });
  expect(signInBtn).toBeInTheDocument();
  userEvent.type('bob@example.com', emailInput);
  userEvent.type('12345678', passwordInput);
  userEvent.click(signInBtn);
  const addJobBtn = screen.getByRole('button', { name: /add a job!/i });
  expect(addJobBtn).toBeInTheDocument();
});

it('should add a new job to the job list', () => {
  const companyInput = screen.getByRole('textbox', { name: /company\-input/i });
  userEvent.type('Amazon', companyInput);
  const positionInput = screen.getByRole('textbox', {
    name: /position\-input/i,
  });
  userEvent.type('Software Engineer', positionInput);
  const notesInput = screen.getByRole('textbox', { name: /notes\-input/i });
  userEvent.type('Hello world', notesInput);
  const save = screen.getByRole('button', { name: /save/i });
  userEvent.click(save);
  const newJob = screen.getByText(/amazon/i);
  expect(newJob).toBeInTheDocument();
});

it('should edit a job', () => {
  // expect the original name to be in the document
  const name1 = screen.getByText('Amazon');
  // edit the company name
  const companyInput = screen.getByRole('textbox', { name: /company\-input/i });
  const name2 = 'Procore';
  userEvent.type(name2, companyInput);
  // click save
  const save = screen.getByRole('button', { name: /save/i });
  userEvent.click(save);
  // expect new name to be in the document and old name to not be in the document
  expect(name1).toBeInTheDocument();
  expect(name2).not.toBeInTheDocument();
});

it('should delete a job', () => {
  // expect job to be in the document
  const jobCard = screen.getByText(/wung dunee/i);
  // click delete button
  const deleteBtn = screen.getByRole('button', { name: /delete/i });
  userEvent.click(deleteBtn);
  // expect job to not be in the document
  expect(jobCard).not.toBeInTheDocument();
});

it('should add an interview question', () => {
  const interviewHeader = screen.getByRole('heading', {
    name: /interview questions/i,
  });
  expect(interviewHeader).toBeInTheDocument();
  const questionInput = screen.getByRole('heading', {
    name: /interview questions/i,
  });
  userEvent.type('What is React?', questionInput);

  const answerInput = screen.getByRole('textbox', { name: /answer/i });
  userEvent.type('A JavaScript framework', answerInput);

  const typeInput = screen.getByRole('textbox', { name: /type/i });
  userEvent.type('General knowledge', typeInput);

  const companyInput = screen.getByRole('textbox', { name: /type/i });
  userEvent.type('Facebook', companyInput);
  userEvent.click(screen.getByRole('button', { name: /add/i }));
  expect(screen.getByText(/question: what is react\?/i)).toBeInTheDocument();
});
