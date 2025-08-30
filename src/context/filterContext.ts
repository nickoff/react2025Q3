import { createContext } from 'react';
import type { FilterContextType } from '../types/context.type';

export const FilterContext = createContext<FilterContextType | undefined>(undefined);
