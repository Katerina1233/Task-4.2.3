import axios from 'axios';

export interface Job {
  id: number;
  title: string;
  salary: string;
  experience: string;
  remote: boolean;
  office: boolean;
  hybrid: boolean;
  company: string;
  city: string;
}

export interface JobsResponse {
  jobs: Job[];
  total: number;
}

const BASE_URL = 'https://kata-jobs.onrender.com/api/jobs';

export const fetchJobs = async (params: {
  page: number;
  limit: number;
  search?: string;
  city?: string;
  skills?: string[];
}) => {
  const searchParams = new URLSearchParams();
  searchParams.set('page', String(params.page));
  searchParams.set('limit', String(params.limit));

  if (params.search) searchParams.set('search', params.search);
  if (params.city && params.city !== 'Все') searchParams.set('city', params.city);
  if (params.skills?.length) {
    searchParams.set('skills', params.skills.join(','));
  }

  const { data } = await axios.get<JobsResponse>(
    `${BASE_URL}?${searchParams.toString()}`
  );

  return data;
};
