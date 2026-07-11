import { useState, useEffect, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import {
  TextInput,
  Select,
  Group,
  Button,
  Stack,
  ScrollArea,
  Pill,
  PillsInput,
} from '@mantine/core';

import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  setSearch,
  setCity,
  addSkill,
  removeSkill,
  loadJobs,
} from '../jobsSlice';

export const JobsFilters = () => {
  const dispatch = useAppDispatch();
  const { search, city, skills } = useAppSelector((s) => s.jobs);

  const [skillInput, setSkillInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchParam = searchParams.get('search') || '';
    const cityParam = searchParams.get('city') || 'Все';
    const skillsParam = searchParams.get('skills')?.split(',') || [];

    dispatch(setSearch(searchParam));
    dispatch(setCity(cityParam));
    skillsParam.forEach((s) => dispatch(addSkill(s)));
  }, []);

  const updateParams = useCallback(() => {
    const params = new URLSearchParams();

    if (search) params.set('search', search);
    if (city && city !== 'Все') params.set('city', city);
    if (skills.length) params.set('skills', skills.join(','));

    setSearchParams(params);
  }, [search, city, skills, setSearchParams]);

  useEffect(() => {
    updateParams();
  }, [updateParams]);

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
        <Stack flex={1}>
          <PillsInput>
            <PillsInput.Field
              value={skillInput}
              onChange={(e) => setSkillInput(e.currentTarget.value)}
              onKeyDown={onSkillKeyDown}
              placeholder="Добавить навык"
            />

            <Button
              onClick={commitSkill}
              variant="light"
              color="primary"
              ml="sm"
            >
              +
            </Button>
          </PillsInput>

          <ScrollArea h={80}>
            <Group gap="xs" wrap="wrap">
              {skills.map((skill) => (
                <Pill
                  key={skill}
                  withRemoveButton
                  onRemove={() => dispatch(removeSkill(skill))}
                >
                  {skill}
                </Pill>
              ))}
            </Group>
          </ScrollArea>
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
