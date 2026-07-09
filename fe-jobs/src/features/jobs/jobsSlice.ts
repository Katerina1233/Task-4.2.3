import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Job } from './jobsApi';
import { fetchJobs } from './jobsApi';

export interface JobsState {
  items: Job[];
  total: number;
  page: number;
  limit: number;
  search: string;
  city: string;
  skills: string[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  items: [],
  total: 0,
  page: 1,
  limit: 10,
  search: '',
  city: 'Все',
  skills: ['JavaScript', 'React', 'Redux', 'Python'],
  loading: false,
  error: null,
};

export const loadJobs = createAsyncThunk(
  'jobs/loadJobs',
  async (_, { getState }) => {
    const state = getState() as { jobs: JobsState };
    const { page, limit, search, city, skills } = state.jobs;
    return await fetchJobs({ page, limit, search, city, skills });
  },
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
			state.page = 1;
			state.error = null;
		},
    setCity(state, action: PayloadAction<JobsState['city']>) {
			state.city = action.payload;
			state.page = 1;
			state.error = null;
		},
		addSkill(state, action: PayloadAction<string>) {
			const skill = action.payload.trim();
			if (skill && !state.skills.includes(skill)) {
				state.skills.push(skill);
				state.page = 1;
				state.error = null;
			}
		},
		removeSkill(state, action: PayloadAction<string>) {
			state.skills = state.skills.filter((s) => s !== action.payload);
			state.page = 1;
			state.error = null;
		},
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.jobs;
        state.total = action.payload.total;
      })
      .addCase(loadJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Ошибка загрузки вакансий';
      });
  },
});

export const { setSearch, setCity, addSkill, removeSkill, setPage } = jobsSlice.actions;
export default jobsSlice.reducer;
