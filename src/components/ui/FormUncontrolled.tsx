import { useEffect, useRef, useState } from 'react';
import { useGetCountryNamesQuery } from '../../utils/restcountries.api';
import { Button } from './Button';
import { Input } from './Input';
import { PasswordStrengthBar } from './PasswordStrengthBar';
import { createSchema } from '../../utils/zod.schema';
import { useAppDispatch } from '../../store/hooks';
import { transformToDispatchModel } from '../../utils/transformToDispatchModel';
import { submitForm } from '../../store/reducers/formSlice';

interface FormUncontrolledProps {
  onSuccess: () => void;
}

interface ErrorForm {
  name?: { message: string };
  age?: { message: string };
  email?: { message: string };
  newPassword?: { message: string };
  confirmPassword?: { message: string };
  gender?: { message: string };
  accept?: { message: string };
  upload?: { message: string };
  country?: { message: string };
}

export const FormUncontrolled = ({ onSuccess }: FormUncontrolledProps) => {
  const { data, isFetching } = useGetCountryNamesQuery(null);
  const [errors] = useState<ErrorForm>({});
  const [password, setPassword] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleChangeForm = () => {
      const newPassword = (form.elements.namedItem('newPassword') as HTMLInputElement)?.value;
      setPassword(newPassword);
    };

    form.addEventListener('input', handleChangeForm);

    return () => form.removeEventListener('input', handleChangeForm);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rawData = getRawData();
    const countries = data || [];
    const isValidForm = createSchema(countries, password).safeParse(rawData);

    console.log(isValidForm.error);

    if (isValidForm.success) {
      const form = await transformToDispatchModel(isValidForm.data);
      dispatch(submitForm(form));
      onSuccess();
    }
  };

  const handleResetForm = () => {
    formRef.current?.reset();
  };

  const getRawData = () => {
    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);
    const rawData: Record<string, unknown> = {};

    formData.forEach((value, key) => {
      rawData[key] = value;
    });

    if (rawData.accept) {
      rawData.accept = true;
    }

    const uploadInput = form.elements.namedItem('upload') as HTMLInputElement;
    if (uploadInput?.files) {
      rawData['upload'] = uploadInput.files;
    }
  };

  return (
    <>
      <h2 className="text-2xl text-red-400 uppercase font-bold mb-5">Form Uncontrolled</h2>
      <form className="text-xs uppercase flex flex-col items-start w-full gap-2" ref={formRef} onSubmit={handleSubmit}>
        <Input variant="text-input" label="Name" error={errors.name} id="name" type="text" />
        <Input variant="text-input" label="Age" error={errors.age} id="age" type="text" />
        <Input variant="text-input" label="Email" error={errors.email} id="email" type="email" />
        <Input variant="text-input" label="New password" error={errors.newPassword} id="newPassword" type="password" />
        <PasswordStrengthBar password={password} />
        <Input
          variant="text-input"
          label="Confirm password"
          error={errors.confirmPassword}
          id="confirmPassword"
          type="password"
        />
        <Input
          variant="radio-list"
          label="Gender"
          id="gender"
          error={errors.gender}
          radioList={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
        />
        <Input variant="checkbox" label="Accept Terms and Conditions agreement" error={errors.accept} id="accept" />
        <Input variant="text-input" label="Upload picture" error={errors.upload} id="upload" type="file" />
        <Input variant="text-input" label="Select country" error={errors.country} id="country" list="country-list" />
        <datalist id="country-list">
          {isFetching && <option value="Loading..."></option>}
          {data && data.map((country, index) => <option key={index} value={country}></option>)}
        </datalist>
        <div className="flex items-center justify-center gap-5">
          <Button type="submit">Submit</Button>
          <Button variant="danger" type="button" onClick={handleResetForm}>
            Reset form
          </Button>
        </div>
      </form>
    </>
  );
};
