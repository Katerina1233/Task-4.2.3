import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import {
  TextInput,
  Select,
  Group,
  Button,
  Stack,
  TagsInput,
} from '@mantine/core';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setSearch, setCity, addSkill, removeSkill, loadJobs } from '../jobsSlice';

export const JobsFilters = () => {
  const dispatch = useAppDispatch();
  const { search, city, skills } = useAppSelector((s) => s.jobs);
  const [skillInput, setSkillInput] = useState('');

  const handleSearchChange = (value: string) => {
    dispatch(setSearch(value));
  };

  const handleCityChange = (value: string | null) => {
    if (!value) return;
    dispatch(setCity(value));
  };

  const commitSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed) {
      dispatch(addSkill(trimmed));
      setSkillInput('');
    }
  };

  const onSkillKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitSkill();
    }
  };

  const onApplyFilters = () => {
    dispatch(loadJobs());
  };

  return (
    <Stack gap="xl">

      <Group align="flex-end" grow>
        <TextInput
          label="Должность или название компании"
          placeholder="Например: React"
          value={search}
          onChange={(e) => handleSearchChange(e.currentTarget.value)}
        />

        <Button size="md" radius="md" onClick={onApplyFilters}>
          Найти
        </Button>
      </Group>

      <Group align="flex-start" grow>
        <Stack flex={1} gap="sm">
          <TagsInput
            label="Навыки"
            placeholder="Добавить навык"
            value={skills}
            onChange={(newSkills) => {
              const last = newSkills[newSkills.length - 1];
              if (last && !skills.includes(last)) {
                dispatch(addSkill(last));
              }
            }}
            onKeyDown={onSkillKeyDown}
          />

          <TagsInput
            value={skills}
            onChange={(newSkills) => {
              skills.forEach((s) => {
                if (!newSkills.includes(s)) {
                  dispatch(removeSkill(s));
                }
              });
            }}
          />
        </Stack>

        <Select
          label="Город"
          value={city}
          onChange={handleCityChange}
          data={['Все', 'Москва', 'Санкт-Петербург']}
        />
      </Group>
    </Stack>
  );
};
