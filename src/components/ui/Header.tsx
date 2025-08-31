import { memo } from 'react';

export const Header = memo(function Header() {
  return (
    <header className="py-9 uppercase font-bold flex justify-between">
      <h2>React2025Q3</h2>
      <h3 className="font-normal">Task: Performance</h3>
    </header>
  );
});
