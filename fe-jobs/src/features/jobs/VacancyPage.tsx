import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Stack,
  Title,
  Text,
  Badge,
  Loader,
  Center,
  Group,
  Card,
} from '@mantine/core';
import axios from 'axios';

interface Vacancy {
  id: number;
  title: string;
  salary: string;
  experience: string;
  company: string;
  city: string;
  remote: boolean;
  office: boolean;
  hybrid: boolean;
  about_company: string;
  description: string;
}

export const VacancyPage = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://kata-jobs.onrender.com/api/jobs/${id}`)
      .then((res) => setVacancy(res.data))
      .catch(() => setError('Не удалось загрузить вакансию'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Center mt="xl">
        <Loader size="lg" />
      </Center>
    );

  if (error)
    return (
      <Center mt="xl">
        <Text c="red">{error}</Text>
      </Center>
    );

  if (!vacancy) return null;

  return (
    <Container size="md" py="xl" style={{ maxWidth: 900 }}>
      <Stack gap="xl">

        <Card withBorder radius="md" p="xl" shadow="sm">
          <Stack gap="md">
            <Title order={2} fw={700}>
              {vacancy.title}
            </Title>

            <Group gap="xl">
              <Text fw={600} size="lg">
                {vacancy.salary}
              </Text>
              <Text c="dimmed">{vacancy.experience}</Text>
            </Group>

            <Group gap="md">
              {vacancy.remote && <Badge color="blue">Можно удалённо</Badge>}
              {vacancy.office && <Badge color="gray">Офис</Badge>}
              {vacancy.hybrid && <Badge color="teal">Гибрид</Badge>}
            </Group>

            <Group gap="xl">
              <Text fw={500}>{vacancy.company}</Text>
              <Text c="dimmed">{vacancy.city}</Text>
            </Group>
          </Stack>
        </Card>

        <Stack gap="xs">
          <Title order={3}>О компании</Title>
          <Text>{vacancy.about_company}</Text>
        </Stack>

        <Stack gap="xs">
          <Title order={3}>Описание вакансии</Title>
          <Text>{vacancy.description}</Text>
        </Stack>
      </Stack>
    </Container>
  );
};
