interface ThemIconProps {
  variant: 'dark' | 'light';
}

export const ThemeIcon = (props: ThemIconProps) => {
  const { variant } = props;

  if (variant === 'dark') {
    return (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M44 32C44 47.464 30 56 20 48C28 48 36 40 36 32C36 24 28 16 20 16C30 8 44 16.536 44 32Z"
          fill="#6a7282"
        />
        <circle cx="26" cy="32" r="4" fill="#6a7282" />
        <path d="M22 28 Q26 26 30 28" stroke="#6a7282" strokeWidth="2" fill="none" />
        <path d="M24 40 Q26 42 28 40" stroke="#6a7282" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  if (variant === 'light') {
    return (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="14" fill="#6a7282" />
        <circle cx="26" cy="30" r="4" fill="none" />
        <circle cx="38" cy="30" r="4" fill="none" />
        <line x1="32" y1="4" x2="32" y2="16" stroke="#6a7282" strokeWidth="4" />
        <line x1="32" y1="48" x2="32" y2="60" stroke="#6a7282" strokeWidth="4" />
        <line x1="4" y1="32" x2="16" y2="32" stroke="#6a7282" strokeWidth="4" />
        <line x1="48" y1="32" x2="60" y2="32" stroke="#6a7282" strokeWidth="4" />
        <line x1="12" y1="12" x2="20" y2="20" stroke="#6a7282" strokeWidth="4" />
        <line x1="52" y1="12" x2="44" y2="20" stroke="#6a7282" strokeWidth="4" />
        <line x1="12" y1="52" x2="20" y2="44" stroke="#6a7282" strokeWidth="4" />
        <line x1="52" y1="52" x2="44" y2="44" stroke="#6a7282" strokeWidth="4" />
        <path d="M26 38 Q32 42 38 38" stroke="none" strokeWidth="3" fill="none" />
      </svg>
    );
  }
};
