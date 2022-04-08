- test UserContext with a mock
- jest.mock('../../context/UserContext') -> this will mock the context file
- so that you can use the mock user
- define the shape of a mockUser if I am logged in, mockUser ={{shape of user object}}
- Mocking behaviors:
  - Auth sign in and sign out
  - Create, Edit, Delete a Job
  - initialEntries with mock URL for ex

## MSW with supabase

- mock the request URL being sent by our fetch call in services to supabase

```
const getExample = rest.get('request url', (req, res, ctx) => {
    return res(ctx.json([{id: 1, title: 'Test Example'}]))
});
const server = setupServer(getExample);
beforeAll(() => {
    server.listen()
})
afterAll(() => {
    server.close()
})
```

- use queryByLabelText
