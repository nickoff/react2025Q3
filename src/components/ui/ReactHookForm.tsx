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
    formState: { errors },
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
        <div className="flex items-center justify-between w-full">
          <label htmlFor="name">Name</label>
          {errors.name && <span className="text-red-400">{errors.name.message}</span>}
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="name" type="text" {...register('name')} />
        <div className="flex items-center justify-between w-full">
          <label htmlFor="age">Age</label>
          {errors.age && <span className="text-red-400">{errors.age.message}</span>}
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0  w-full" id="age" type="text" {...register('age')} />
        <div className="flex items-center justify-between w-full">
          <label htmlFor="email">Email</label>
          {errors.email && <span className="text-red-400">{errors.email.message}</span>}
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="email" type="email" {...register('email')} />
        <div className="flex items-center justify-between w-full">
          <label htmlFor="newPassword">New password</label>
          {errors.newPassword && <span className="text-red-400">{errors.newPassword.message}</span>}
        </div>
        <input
          className="text-base p-2 bg-gray-500 outline-0 w-full"
          id="newPassword"
          type="password"
          {...register('newPassword')}
        />
        <PasswordStrengthBar password={password} />
        <div className="flex items-center justify-between w-full">
          <label htmlFor="confirmPassword">Confirm password</label>
          {errors.confirmPassword && <span className="text-red-400">{errors.confirmPassword.message}</span>}
        </div>
        <input
          className="text-base p-2 bg-gray-500 outline-0 w-full"
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
        />
        <div className="flex items-center justify-between w-full">
          <legend>Gender</legend>
          {errors.gender && <span className="text-red-400">{errors.gender.message}</span>}
        </div>
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="female">female</label>
          <input
            className="text-base p-2 bg-gray-500 outline-0"
            id="female"
            value="female"
            type="radio"
            {...register('gender')}
          />
          <label htmlFor="male">male</label>
          <input
            className="text-base p-2 bg-gray-500 outline-0"
            id="male"
            value="male"
            type="radio"
            {...register('gender')}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
            <input
              className="text-base p-2 bg-gray-500 outline-0"
              id="accept"
              type="checkbox"
              {...register('accept')}
            />
            <label htmlFor="accept">Accept Terms and Conditions agreement</label>
          </div>
          {errors.accept && <span className="text-red-400">{errors.accept.message}</span>}
        </div>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="upload">Upload picture</label>
          {errors.upload && <span className="text-red-400">{errors.upload.message}</span>}
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="upload" type="file" {...register('upload')} />
        <div className="flex items-center justify-between w-full">
          <label htmlFor="country">Select country</label>
          {errors.country && <span className="text-red-400">{errors.country.message}</span>}
        </div>
        <input
          className="text-base p-2 bg-gray-500 outline-0 w-full"
          id="country"
          list="country-list"
          {...register('country')}
        />
        <datalist id="country-list">
          {isFetching && 'Loading...'}
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
