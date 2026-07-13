import { Container, Grid, Title, Text, Flex } from '@mantine/core';
import { JobsFilters } from './components/JobsFilters';
import { JobsList } from './components/JobsList';
import { SearchInput } from './components/SearchInput';

export const JobsPage = () => {
  return (
    <Container size="lg" py="xl" style={{ maxWidth: 1200 }}>
      <Flex align="center" justify="space-between" mb="md">
        <div>
          <Title order={2} fw={700} style={{ fontSize: '1.75rem' }}>
            Список вакансий
          </Title>
          <Text c="dimmed" size="md">
            по профессии Frontend‑разработчик
          </Text>
        </div>

        <SearchInput />
      </Flex>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 5, lg: 4 }}>
          <JobsFilters />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <JobsList />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
