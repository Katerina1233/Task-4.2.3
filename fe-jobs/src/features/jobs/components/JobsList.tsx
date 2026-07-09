import { useEffect } from 'react';
import { Stack, Pagination, Loader, Center, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadJobs, setPage } from '../jobsSlice';
import { JobCard } from './JobCard';

export const JobsList = () => {
  const dispatch = useAppDispatch();
  const { items, total, page, limit, loading, error } = useAppSelector((s) => s.jobs);

  useEffect(() => {
    dispatch(loadJobs());
  }, [dispatch, page]);

  const totalPages = Math.ceil(total / limit) || 1;

  if (loading) {
    return (
      <Center mt="xl">
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center mt="xl">
        <Text c="red" size="lg">{error}</Text>
      </Center>
    );
  }

  return (
    <Stack
      gap="xl"
      w="100%"
      maw={900}
      mx="auto"
      style={{ paddingBottom: '2rem' }}
    >
      {items.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      <Center mt="lg">
        <Pagination
          value={page}
          onChange={(p) => dispatch(setPage(p))}
          total={totalPages}
          size="md"
          radius="md"
        />
      </Center>
    </Stack>
  );
};
