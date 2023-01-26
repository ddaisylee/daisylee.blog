import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Text = ({ children }: Props) => {
  return <div>{children}</div>;
};
export default Text;
