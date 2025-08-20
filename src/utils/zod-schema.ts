import { z } from 'zod';
import { VALIDATION_ERRORS_MESSAGE } from '../constant/errors-message';

export const formValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, VALIDATION_ERRORS_MESSAGE.required)
    .refine((val) => /^[A-ZА-ЯЁ]/.test(val), {
      message: VALIDATION_ERRORS_MESSAGE.startsWithCapital,
    })
    .refine((val) => !/\d/.test(val), {
      message: VALIDATION_ERRORS_MESSAGE.containsDigits,
    })
    .refine((val) => /^[A-Za-zА-Яа-яЁё\s-]+$/.test(val), {
      message: VALIDATION_ERRORS_MESSAGE.invalidCharacters,
    }),
  age: z
    .string()
    .trim()
    .refine((val) => typeof Number(val) === 'number', {
      message: VALIDATION_ERRORS_MESSAGE.required,
    })
    .refine((val) => Number(val) >= 0, {
      message: VALIDATION_ERRORS_MESSAGE.mustNotBeNegative,
    }),
  email: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string(),
  gender: z.string(),
  accept: z.boolean(),
  upload: z.instanceof(FileList),
  country: z.string(),
});

export type FormValidationSchema = z.infer<typeof formValidationSchema>;
