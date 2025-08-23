import { getPasswordStrengthScore } from '../../utils/getPasswordStrengthScore';

interface PasswordStrengthBarProps {
  password: string;
}

export const PasswordStrengthBar = ({ password }: PasswordStrengthBarProps) => {
  const passwordStrengthScore = getPasswordStrengthScore(password);

  return (
    <div className="w-full items-center h-min-4 flex flex-1 gap-2">
      <p className={`text-[10px] whitespace-nowrap ${!passwordStrengthScore && 'text-transparent'}`}>
        Password strength
      </p>
      <div className="w-full">
        <span
          className={`block h-2  ${(passwordStrengthScore && passwordStrengthScore <= 25 && 'bg-red-300') || (passwordStrengthScore === 50 && 'bg-orange-300') || (passwordStrengthScore === 75 && 'bg-yellow-300') || (passwordStrengthScore === 100 && 'bg-green-300')} transition-all duration-300`}
          style={{ width: `${passwordStrengthScore}%` }}></span>
      </div>
    </div>
  );
};
