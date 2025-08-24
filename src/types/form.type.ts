export interface FormInputModel {
  name: string;
  age: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
  gender: 'female' | 'male';
  accept: boolean;
  upload: FileList;
  country: string;
}

export type FormDispatchModel = Omit<FormInputModel, 'upload'> & { upload: string };

export interface FormStoredModel {
  id: number;
  storedForm: FormDispatchModel;
}

export interface FormStoredState {
  lastFormId: number;
  formSubmissions: FormStoredModel[];
}
