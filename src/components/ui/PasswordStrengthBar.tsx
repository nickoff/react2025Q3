interface PasswordStrengthBarProps {
  password: string;
}

export const PasswordStrengthBar = ({ password }: PasswordStrengthBarProps) => {
  const checks = {
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[@$!%*#?&]/.test(password),
  };

  const getPasswordStrengthScore =
    password && (Object.values(checks).filter(Boolean).length / Object.values(checks).length) * 100;

  return (
    <div className="w-full items-center h-min-4 flex flex-1 gap-2">
      <p className={`text-[10px] whitespace-nowrap ${!getPasswordStrengthScore && 'text-transparent'}`}>
        Password strength
      </p>
      <div className="w-full">
        <span
          className={`block h-2  ${(getPasswordStrengthScore && getPasswordStrengthScore <= 25 && 'bg-red-300') || (getPasswordStrengthScore === 50 && 'bg-orange-300') || (getPasswordStrengthScore === 75 && 'bg-yellow-300') || (getPasswordStrengthScore === 100 && 'bg-green-300')} transition-all duration-300`}
          style={{ width: `${getPasswordStrengthScore}%` }}></span>
      </div>
    </div>
  );
};
