import { Card, Group, Text, Badge, Button, Stack } from '@mantine/core';
import type { Job } from '../jobsApi';

interface Props {
  job: Job;
}

const getModeBadge = (job: Job) => {
  if (job.remote) return <Badge color="blue">Можно удалённо</Badge>;
  if (job.office) return <Badge color="gray">Офис</Badge>;
  if (job.hybrid) return <Badge color="teal">Гибрид</Badge>;
  return null;
};

export const JobCard = ({ job }: Props) => {
  return (
    <Card
      withBorder
      radius="md"
      p="lg"
      shadow="sm"
      style={{
        backgroundColor: '#fff',
        borderColor: '#e9ecef',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Text fw={700} size="lg" c="blue">
            {job.title}
          </Text>
          {getModeBadge(job)}
        </Group>

        <Group gap="xl">
          <Text fw={600} size="md">
            {job.salary ? `${job.salary} ₽` : 'Зарплата не указана'}
          </Text>
          <Text c="dimmed">{job.experience}</Text>
        </Group>

        <Stack gap={2}>
          <Text c="dimmed">{job.company}</Text>
          <Text>{job.city}</Text>
        </Stack>

        <Button
          variant="filled"
          color="dark"
          radius="md"
          size="md"
          style={{
            fontWeight: 50,
            width: 'fit-content',
          }}
        >
          Смотреть вакансию
        </Button>
      </Stack>
    </Card>
  );
};
