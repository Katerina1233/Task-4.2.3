import { useEffect } from 'react';
import { Stack, Pagination, Loader, Center, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loadJobs, setPage } from '../jobsSlice';
import { JobCard } from './JobCard';

export const JobsList = () => {
  const dispatch = useAppDispatch();
  const { items, total, page, limit, loading, error } = useAppSelector(
    (s) => s.jobs
  );

  useEffect(() => {
    dispatch(loadJobs());
  }, [dispatch, page]);

  const totalPages = Math.ceil(total / limit) || 1;

  if (loading) {
    return (
      <Center mt="lg">
        <Loader size="lg" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center mt="lg">
        <Text c="red">{error}</Text>
      </Center>
    );
  }

  return (
    <Stack gap="lg" w="100%" maw={900} mx="auto">
      {items.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      <Center mt="xl">
        <Pagination
          value={page}
          onChange={(p) => dispatch(setPage(p))}
          total={totalPages}
        />
      </Center>
    </Stack>
  );
};
