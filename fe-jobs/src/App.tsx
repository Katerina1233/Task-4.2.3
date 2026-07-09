import { AppShell, useMantineTheme } from '@mantine/core';
import { Header } from './layout/Header';
import { JobsPage } from './features/jobs/JobsPage';

const App = () => {
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="xl"
      header={{ height: 60 }}
      styles={{
        main: {
          backgroundColor: theme.colors.gray[0],
          maxWidth: 1200,
          margin: '0 auto',
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
        },
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor: theme.white,
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}
      >
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <JobsPage />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
