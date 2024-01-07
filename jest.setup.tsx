jest.mock('@clerk/nextjs', () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => children,
  useUser: () => ({
    firstName: 'John',
    lastName: 'Doe',
  }),
  UserButton: (): JSX.Element => {
    return (<div>Mock UserButton</div>);
  },
}));
