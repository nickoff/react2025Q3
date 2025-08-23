import { describe, it, expect } from 'vitest';
import { createSchema } from '../utils/zod.schema';

describe('Zod Schema', () => {
  const allowedCountries = ['Belarus', 'Poland'];
  const allowedPassword = 'Nick!1';
  const allowedFile = new File(['dummy'], 'avatar.png', { type: 'image/png' });
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  const mockFileList = Object.create(input.files);
  mockFileList[0] = allowedFile;
  Object.defineProperty(mockFileList, 'length', { value: 1 });

  it('passes if valid data', () => {
    const result = createSchema(allowedCountries, allowedPassword).safeParse({
      name: 'Nickolas',
      age: '41',
      email: 'test@exampe.com',
      newPassword: allowedPassword,
      confirmPassword: allowedPassword,
      gender: 'male',
      accept: true,
      upload: mockFileList,
      country: 'Belarus',
    });

    expect(result.success).toBe(true);
  });
});
