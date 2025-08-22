import type { FormDispatchModel, FormInputModel } from '../types/form.type';
import { convertToBase64 } from './convertToBase64';

export const transformToDispatchModel = async (form: FormInputModel): Promise<FormDispatchModel> => {
  const base64File = await convertToBase64(form.upload[0]);

  return {
    ...form,
    upload: base64File,
  };
};
