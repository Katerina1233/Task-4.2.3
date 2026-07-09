import { Container, Stack, Title, Text } from '@mantine/core';
import { JobsFilters } from './components/JobsFilters';
import { JobsList } from './components/JobsList';

export const JobsPage = () => {
  return (
    <Container
      size="lg"
      py="xl"
      style={{
        maxWidth: 1200,
      }}
    >
      <Stack gap="xl">
        <Stack gap="xs">
          <Title
            order={2}
            style={{
              fontWeight: 700,
              fontSize: '1.75rem',
            }}
          >
            Список вакансий по профессии Frontend‑разработчик
          </Title>

          <Text c="dimmed" size="md">
            Выберите город, навыки и найдите подходящую вакансию
          </Text>
        </Stack>

        <JobsFilters />
        <JobsList />
      </Stack>
    </Container>
  );
};
