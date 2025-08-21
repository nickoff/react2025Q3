import { z } from 'zod';
import { VALIDATION_ERRORS_MESSAGE } from '../constant/errors-message';

export const formValidationSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, VALIDATION_ERRORS_MESSAGE.required)
      .refine((val) => /^[A-ZА-ЯЁ]/.test(val), {
        error: VALIDATION_ERRORS_MESSAGE.startsWithCapital,
      })
      .refine((val) => !/\d/.test(val), {
        error: VALIDATION_ERRORS_MESSAGE.noContainsDigits,
      })
      .refine((val) => /^[A-Za-zА-Яа-яЁё\s-]+$/.test(val), {
        error: VALIDATION_ERRORS_MESSAGE.invalidCharacters,
      }),
    age: z
      .string()
      .trim()
      .min(1, VALIDATION_ERRORS_MESSAGE.required)
      .refine((val) => /\d/.test(val), {
        error: VALIDATION_ERRORS_MESSAGE.mustBeDigit,
      })
      .refine((val) => Number(val) >= 0, {
        error: VALIDATION_ERRORS_MESSAGE.mustNotBeNegative,
      }),
    email: z.email(),
    newPassword: z.string(),
    confirmPassword: z.string(),
    gender: z.string(),
    accept: z.boolean(),
    upload: z.instanceof(FileList),
    country: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    error: VALIDATION_ERRORS_MESSAGE.passwordsMustMatch,
    path: ['confirmPassword'],
  });

export type FormValidationSchema = z.infer<typeof formValidationSchema>;
