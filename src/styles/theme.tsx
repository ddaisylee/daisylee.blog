import { css, Theme } from '@emotion/react';

const colors = {
  YELLOW_000: '#fff9db',
  YELLOW_100: '#fff3bf',
  YELLOW_200: '#ffec99',
  YELLOW_300: '#ffe066',
  YELLOW_400: '#fee500',
  YELLOW_500: '#F4BD68',
  WHITE: '#ffffff',
  GRAY_000: '#f8f9fa',
  GRAY_100: '#f1f3f5',
  GRAY_200: '#e9ecef',
  GRAY_300: '#dee2e6',
  GRAY_400: '#ced4da',
  GRAY_500: '#adb5bd',
  BLACK: '#000000',
};

const flex = {
  row: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  column: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const theme: Theme = {
  colors,
  flex,
};

export default theme;
