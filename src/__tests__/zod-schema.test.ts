import { describe, it, expect } from 'vitest';
import { createSchema } from '../utils/zod.schema';
import { mockFormDataValid } from './mocks/mockFormData';

describe('Zod Schema', () => {
  const allowedCountries = ['Belarus', 'Poland'];
  const allowedPassword = 'Nick!1';

  it('passes if valid data', () => {
    const result = createSchema(allowedCountries, allowedPassword).safeParse(mockFormDataValid);

    expect(result.success).toBe(true);
  });
});
