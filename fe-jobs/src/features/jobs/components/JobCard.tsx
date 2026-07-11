import { Card, Group, Text, Badge, Button, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const openVacancy = () => {
    navigate(`/vacancies/${job.id}`);
  };

  return (
    <Card
      withBorder
      radius="md"
      p="lg"
      shadow="sm"
      style={{
        backgroundColor: '#fff',
        borderColor: '#e9ecef',
      }}
    >
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Text fw={700} size="lg">
            {job.title}
          </Text>
          {getModeBadge(job)}
        </Group>

        <Group gap="xl">
          <Text fw={600} size="md">{job.salary}</Text>
          <Text c="dimmed">{job.experience}</Text>
        </Group>

        <Group gap="xl">
          <Text fw={500}>{job.company}</Text>
          <Text c="dimmed">{job.city}</Text>
        </Group>

        <Button
          variant="light"
          color="dark"
          radius="md"
          size="md"
          style={{ fontWeight: 500 }}
          onClick={openVacancy}
        >
          Смотреть вакансию
        </Button>
      </Stack>
    </Card>
  );
};
