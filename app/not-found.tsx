import Link from 'next/link';

const CONTENT = { back: 'Back to Home' };

export default function NotFound() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-5 min-h-[85vh]">
      <h3 className="text-8xl font-bold text-orange-600 text-shadow-amber-950">404: Page not found</h3>
      <Link
        className="text-2xl text-amber-50 px-4 py-1 rounded-md border border-black outline-none bg-gray-600"
        href={'/'}>
        {CONTENT.back}
      </Link>
    </main>
  );
}
