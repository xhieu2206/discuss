'use client';

import { NextUIProvider, NextUIProviderProps } from '@nextui-org/react';
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({
  children
}: ProvidersProps) {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}
