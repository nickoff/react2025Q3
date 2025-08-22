import { z } from 'zod';
import { VALIDATION_ERRORS_MESSAGE } from '../constant/errors-message';

export const createCountrySchema = (allowedCountries: string[]) =>
  z
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
      newPassword: z
        .string()
        .min(1, VALIDATION_ERRORS_MESSAGE.required)
        .refine((val) => /[a-z]/.test(val), { error: VALIDATION_ERRORS_MESSAGE.mustIncludeLowercaseLetter })
        .refine((val) => /[A-Z]/.test(val), { error: VALIDATION_ERRORS_MESSAGE.mustIncludeUppercaseLetter })
        .refine((val) => /\d/.test(val), { error: VALIDATION_ERRORS_MESSAGE.mustIncludeNumber })
        .refine((val) => /[@$!%*#?&]/.test(val), { error: VALIDATION_ERRORS_MESSAGE.mustIncludeSpecialChar }),
      confirmPassword: z.string().min(1, VALIDATION_ERRORS_MESSAGE.required),
      gender: z.enum(['female', 'male'], { error: VALIDATION_ERRORS_MESSAGE.genderSelectRequired }),
      accept: z.boolean().refine((val) => val === true, { error: VALIDATION_ERRORS_MESSAGE.mustBeAccept }),
      upload: z
        .instanceof(FileList)
        .refine((files) => files.length > 0, {
          error: VALIDATION_ERRORS_MESSAGE.required,
        })
        .refine((files) => files[0]?.type === 'image/jpeg' || files[0]?.type === 'image/png', {
          error: VALIDATION_ERRORS_MESSAGE.mustBeTypesJpegPng,
        })
        .refine((files) => files[0]?.size < 1024000, { error: VALIDATION_ERRORS_MESSAGE.fileIsLarger }),
      country: z
        .string()
        .min(1, VALIDATION_ERRORS_MESSAGE.required)
        .refine((val) => allowedCountries.includes(val), VALIDATION_ERRORS_MESSAGE.isNotValidCountry),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      error: VALIDATION_ERRORS_MESSAGE.passwordsMustMatch,
      path: ['confirmPassword'],
    });
