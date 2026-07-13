import { AppShell, useMantineTheme } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './layout/Header';
import { JobsPage } from './features/jobs/JobsPage';
import { VacancyPage } from './features/jobs/VacancyPage';

const App = () => {
  const theme = useMantineTheme();

  return (
    <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<JobsPage />} />
						<Route path="/vacancies" element={<JobsPage />} />
						<Route path="/vacancies/:id" element={<VacancyPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  );
};

export default App;
