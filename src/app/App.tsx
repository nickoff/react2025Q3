function App() {
  return (
    <div className="text-2xl max-w-7xl h-[100vh] mx-auto flex flex-col">
      <header className="py-9 uppercase font-bold">React2025Q3</header>
      <main className="w-full h-full flex justify-between">
        <div className="w-full flex justify-center items-start gap-10 mt-5">
          <button className="p-5 min-w-80 uppercase font-bold border-2 border-cyan-800 rounded-md cursor-pointer hover:bg-cyan-800">
            React Hook Form
          </button>
          <button className="p-5 min-w-80 uppercase font-bold border-2 border-red-800 rounded-md cursor-pointer hover:bg-red-800">
            Form uncontrolled
          </button>
        </div>
      </main>
      <footer className="py-9">2025</footer>
    </div>
  );
}

export default App;
