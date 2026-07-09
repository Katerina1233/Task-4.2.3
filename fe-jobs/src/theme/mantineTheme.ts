import type { MantineThemeOverride } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',

		headings: {
		fontFamily: 'Inter, sans-serif',
		sizes: {
			h1: { fontSize: '2rem', fontWeight: '700', lineHeight: '1.2' },
			h2: { fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.3' },
			h3: { fontSize: '1.25rem', fontWeight: '600' },
		},
	},

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },

  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
  },

  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 2px 6px rgba(0,0,0,0.12)',
    lg: '0 4px 12px rgba(0,0,0,0.15)',
  },

  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },

  colors: {
    brand: [
      '#EDF2FF',
      '#DBE4FF',
      '#BAC8FF',
      '#91A7FF',
      '#748FFC',
      '#5C7CFA',
      '#4C6EF5',
      '#4263EB',
      '#3B5BDB',
      '#364FC7',
    ],

    gray: [
      '#F8F9FA',
      '#F1F3F5',
      '#E9ECEF',
      '#DEE2E6',
      '#CED4DA',
      '#ADB5BD',
      '#868E96',
      '#495057',
      '#343A40',
      '#212529',
    ],
  },

  primaryColor: 'brand',
};
