import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <div className={`text-white w-full flex flex-col justify-start items-start gap-8`}>
      <h1 className="text-8xl font-bold text-orange-600 text-shadow-amber-950">About</h1>
      <p className="text-3xl text-left">
        This is a simple app to search for anime, offering users a clean interface to explore their favorite titles and
        discover new ones. It is developed as part of the React course at{' '}
        <Link
          className={`text-orange-300 underline hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out`}
          href="https://rs.school/courses/reactjs">
          RS School
        </Link>
        , with a focus on practicing key concepts like component-based architecture, dynamic routing, asynchronous API
        interactions, and modern styling using TailwindCSS.
      </p>
      <p className={`text-3xl font-bold 'text-orange-300`}>
        Author:{' '}
        <Link
          className={`text-orange-300 underline hover:text-orange-400 cursor-pointer transition duration-300 ease-in-out`}
          href="https://github.com/nickoff">
          Mikalai A
        </Link>
      </p>
    </div>
  );
}
