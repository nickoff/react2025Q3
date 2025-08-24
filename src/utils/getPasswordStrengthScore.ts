export const getPasswordStrengthScore = (password: string) => {
  const checks = {
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[@$!%*#?&]/.test(password),
  };

  return password && (Object.values(checks).filter(Boolean).length / Object.values(checks).length) * 100;
};
