export interface FormModel {
  name: string;
  age: number;
  email: string;
  newPassword: string;
  confirmPassword: string;
  gender: 'female' | 'male';
  accept: boolean;
  upload: FileList;
  country: string;
}
