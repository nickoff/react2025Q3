const CONTENT = {
  title: 'Welcome, fellow otaku 🌸',
  content:
    'Select an anime from the list on the left to view its details. Use the search bar to find your favorite titles.',
};

export default function Page() {
  return (
    <div className="flex flex-col gap-5 items-center mt-28 text-center text-muted-foreground px-6">
      <h2 className="text-8xl font-bold text-orange-600 text-shadow-amber-950">{CONTENT.title}</h2>
      <p className="text-3xl">{CONTENT.content}</p>
    </div>
  );
}
