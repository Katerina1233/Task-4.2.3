import { useState, useEffect, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import {
  Select,
  Group,
  Button,
  Stack,
  ScrollArea,
  Pill,
  PillsInput,
  Card,
  Title,
} from '@mantine/core';

import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setCity, addSkill, removeSkill, loadJobs } from '../jobsSlice';

export const JobsFilters = () => {
  const dispatch = useAppDispatch();
  const { city, skills } = useAppSelector((s) => s.jobs);

  const [skillInput, setSkillInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const cityParam = searchParams.get('city') || 'Все';
    const skillsParam = searchParams.get('skills')?.split(',') || [];

    dispatch(setCity(cityParam));
    skillsParam.forEach((s) => dispatch(addSkill(s)));
  }, []);

  const updateParams = useCallback(() => {
    const params = new URLSearchParams();

    if (city && city !== 'Все') params.set('city', city);
    if (skills.length) params.set('skills', skills.join(','));

    setSearchParams(params);
  }, [city, skills, setSearchParams]);

  useEffect(() => {
    updateParams();
  }, [updateParams]);

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
    <Card
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: '#e9ecef',
      }}
    >
      <Stack gap="lg">
        <Title order={5} fw={600}>
          Ключевые навыки
        </Title>

        <Group align="center">
          <PillsInput flex={1}>
            <PillsInput.Field
              value={skillInput}
              onChange={(e) => setSkillInput(e.currentTarget.value)}
              onKeyDown={onSkillKeyDown}
              placeholder="Добавить навык"
            />
          </PillsInput>

          <Button
						onClick={commitSkill}
						radius="md"
						style={{
							backgroundColor: '#228BE6',
							color: '#FFFFFF',
							fontSize: 28,
							fontWeight: 600,
							padding: '0 8px',
							lineHeight: 1,
						}}
					>
						+
					</Button>

        </Group>

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

        <Select
					label="Город"
          value={city}
          onChange={handleCityChange}
          data={['Все', 'Москва', 'Санкт-Петербург', 'Уфа', 'Набережные Челны']}
          radius="md"
        />

        <Button size="md" radius="md" onClick={onApplyFilters}>
          Применить фильтры
        </Button>
      </Stack>
    </Card>
  );
};
