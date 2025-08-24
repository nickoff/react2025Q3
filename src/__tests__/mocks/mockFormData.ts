import type { FormDispatchModel, FormInputModel } from '../../types/form.type';

const allowedPassword = 'Nick!1';
const allowedFile = new File(['dummy'], 'avatar.png', { type: 'image/png' });
const input = document.createElement('input');
input.setAttribute('type', 'file');
const mockFileList = Object.create(input.files);
mockFileList[0] = allowedFile;
Object.defineProperty(mockFileList, 'length', { value: 1 });

export const mockFormDataValid = {
  name: 'Nickolas',
  age: '41',
  email: 'test@exampe.com',
  newPassword: allowedPassword,
  confirmPassword: allowedPassword,
  gender: 'male',
  accept: true,
  upload: mockFileList,
  country: 'Belarus',
} as FormInputModel;

export const mockFormToStored = {
  name: 'Nickolas',
  age: '41',
  email: 'test@exampe.com',
  newPassword: allowedPassword,
  confirmPassword: allowedPassword,
  gender: 'male',
  accept: true,
  upload:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgAqv3ZkAAAAASUVORK5CYII=',
  country: 'Belarus',
} as unknown as FormDispatchModel;
