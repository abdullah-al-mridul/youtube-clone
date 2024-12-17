import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('bg-gray-900/60 backdrop-blur-lg rounded-lg p-4', className)}>
      {children}
    </div>
  );
}