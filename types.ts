
import type React from 'react';

export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  description: string;
  category: string;
  amount: number;
  date: string;
  Icon: React.ComponentType<{ className?: string }>;
}
