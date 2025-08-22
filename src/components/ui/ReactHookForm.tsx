import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createCountrySchema } from '../../utils/zod.schema';
import { PasswordStrengthBar } from './PasswordStrengthBar';
import { useEffect, useState } from 'react';
import { useGetCountryNamesQuery } from '../../utils/restcountries.api';
import type z from 'zod';
import { Button } from './Button';
import { useAppDispatch } from '../../store/hooks';
import { transformToDispatchModel } from '../../utils/transformToDispatchModel';
import { submitForm } from '../../store/reducers/formSlice';
import { Input } from './Input';

interface ReactHookFormProps {
  onSuccess: () => void;
}

export const ReactHookForm = ({ onSuccess }: ReactHookFormProps) => {
  const { data, isFetching } = useGetCountryNamesQuery(null);
  const countries = data || [];
  const [newPassword, setNewPassword] = useState('');
  const formValidationSchema = createCountrySchema(countries, newPassword);
  type FormValidationSchema = z.infer<typeof formValidationSchema>;
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
    setFocus,
  } = useForm<FormValidationSchema>({
    mode: 'onChange',
    resolver: zodResolver(formValidationSchema),
  });

  const password = watch('newPassword');

  useEffect(() => {
    setNewPassword(password);
  }, [password]);

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const handleSubmitForm = async (data: FormValidationSchema) => {
    const form = await transformToDispatchModel(data);
    dispatch(submitForm(form));

    onSuccess();
  };

  const handleResetForm = () => {
    reset();
  };

  return (
    <>
      <h2 className="text-2xl text-cyan-400 uppercase font-bold mb-5">React Hook Form</h2>
      <form
        className="text-xs uppercase flex flex-col items-start w-full gap-2"
        onSubmit={handleSubmit(handleSubmitForm)}>
        <Input variant="text-input" label="Name" error={errors.name} id="name" type="text" {...register('name')} />
        <Input variant="text-input" label="Age" error={errors.age} id="age" type="text" {...register('age')} />
        <Input variant="text-input" label="Email" error={errors.email} id="email" type="email" {...register('email')} />
        <Input
          variant="text-input"
          label="New password"
          error={errors.newPassword}
          id="newPassword"
          type="password"
          {...register('newPassword')}
        />
        <PasswordStrengthBar password={password} />
        <Input
          variant="text-input"
          label="Confirm password"
          error={errors.confirmPassword}
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
        />
        <Input
          variant="radio-list"
          label="Gender"
          error={errors.gender}
          radioList={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
          {...register('gender')}
        />
        <Input
          variant="checkbox"
          label="Accept Terms and Conditions agreement"
          error={errors.accept}
          id="accept"
          {...register('accept')}
        />
        <Input
          variant="text-input"
          label="Upload picture"
          error={errors.upload}
          id="upload"
          type="file"
          {...register('upload')}
        />
        <Input
          variant="text-input"
          label="Select country"
          error={errors.country}
          id="country"
          list="country-list"
          {...register('country')}
        />
        <datalist id="country-list">
          {isFetching && <option value="Loading..."></option>}
          {data && data.map((country, index) => <option key={index} value={country}></option>)}
        </datalist>
        <div className="flex items-center justify-center gap-5">
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
          <Button variant="danger" type="button" onClick={handleResetForm}>
            Reset form
          </Button>
        </div>
      </form>
    </>
  );
};
