import React from 'react';
import { NpsServProvider } from './npsServices/NpsServContext';

const AppServices = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <NpsServProvider>{children}</NpsServProvider>;
};

export default AppServices;
