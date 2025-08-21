import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formValidationSchema, type FormValidationSchema } from '../../utils/zod-schema';

interface ReactHookFormProps {
  onSuccess: () => void;
}

export const ReactHookForm = ({ onSuccess }: ReactHookFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValidationSchema>({
    mode: 'onChange',
    resolver: zodResolver(formValidationSchema),
  });

  console.log(errors);

  const handleSubmitForm = (data: FormValidationSchema) => {
    console.log(data);
    onSuccess();
  };

  return (
    <>
      <h2 className="text-2xl text-cyan-400 uppercase font-bold mb-5">React Hook Form</h2>
      <form
        className="text-xs uppercase flex flex-col items-start w-full gap-2"
        onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="name" autoFocus>
            Name
          </label>
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
          <span></span>
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
        <div className="flex items-center justify-start gap-2">
          <input className="text-base p-2 bg-gray-500 outline-0" id="accept" type="checkbox" {...register('accept')} />
          <label htmlFor="accept">Accept Terms and Conditions agreement</label>
          <span></span>
        </div>
        <div>
          <label htmlFor="upload">Upload picture</label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="upload" type="file" {...register('upload')} />
        <div>
          <label htmlFor="country">Select country</label>
          <span></span>
        </div>
        <input
          className="text-base p-2 bg-gray-500 outline-0 w-full"
          id="country"
          list="country-list"
          {...register('country')}
        />
        <datalist id="country-list">
          <option value="belarus"></option>
          <option value="poland"></option>
        </datalist>
        <div className="flex items-center justify-center gap-5">
          <button className="p-3 min-w-50 uppercase font-bold border-2 bg-cyan-700 border-cyan-800 rounded-md cursor-pointer hover:bg-cyan-800">
            Submit
          </button>
          <button
            className="p-3 min-w-50 uppercase font-bold border-2 bg-red-700 border-red-800 rounded-md cursor-pointer hover:bg-red-800"
            type="button">
            Reset form
          </button>
        </div>
      </form>
    </>
  );
};
