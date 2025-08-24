import gitLogo from '../../assets/github.svg';
import rssLogo from '../../assets/rss-logo.svg';

export const Footer = () => {
  return (
    <footer className="text-base text-gray-400 py-9 flex gap-3 items-center justify-between">
      <a className="flex gap-2 items-center underline hover:text-gray-300" href="https://github.com/nickoff">
        <img className="w-7 h-7" src={gitLogo} alt="github" />
      </a>
      &copy;2025
      <a className="flex gap-2 items-center underline hover:text-gray-300" href="https://rs.school/courses/reactjs">
        <img className="w-7 h-7" src={rssLogo} alt="rsschool" />
      </a>
    </footer>
  );
};
