import type { FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'text-input' | 'radio-list' | 'checkbox';
  label: string;
  id?: string;
  error?: FieldError | { message: string };
  radioList?: { label: string; value: string }[];
}

export const Input = ({
  variant = 'text-input',
  label,
  id,
  className = '',
  error,
  radioList,
  ...props
}: InputProps) => {
  const baseStyle = 'flex flex-col items-start w-full gap-2 w-full';

  if (variant === 'text-input')
    return (
      <div className={`${baseStyle} ${className}`}>
        <div className="flex items-center justify-between w-full">
          <label htmlFor={id}>{label}</label>
          {error && <span className="text-red-400">{error.message}</span>}
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id={id} name={id} {...props} />
      </div>
    );

  if (variant === 'radio-list')
    return (
      <div className={`${baseStyle} ${className}`}>
        <div className="flex items-center justify-between w-full">
          <legend>{label}</legend>
          {error && <span className="text-red-400">{error.message}</span>}
        </div>
        <div className="flex items-center justify-start gap-2">
          {radioList &&
            radioList.map((item, index) => {
              return (
                <div className="flex items-center justify-start gap-1.5" key={index}>
                  <label key={index} htmlFor={item.value}>
                    {item.label}
                  </label>
                  <input
                    className="text-base p-2 bg-gray-500 outline-0"
                    id={item.value}
                    name={id}
                    value={item.value}
                    type="radio"
                    {...props}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );

  if (variant === 'checkbox')
    return (
      <div className={`${baseStyle} ${className}`}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
            <input className="text-base p-2 bg-gray-500 outline-0" id={id} name={id} type="checkbox" {...props} />
            <label htmlFor={id}>{label}</label>
          </div>
          {error && <span className="text-red-400">{error.message}</span>}
        </div>
      </div>
    );
};
