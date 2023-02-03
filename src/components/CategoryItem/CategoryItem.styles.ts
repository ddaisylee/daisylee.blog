import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { CategoryItemProps } from './CategoryItem';

export const Container = styled.div`
  min-width: 48px;
  height: 48px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLlink = styled(Link)<CategoryItemProps>`
  margin-right: 20px;
  font-size: 15px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
