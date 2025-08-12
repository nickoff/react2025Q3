interface FallbackProps {
  reloadCallback: () => void;
}

const CONTENT = {
  title: 'Ups... 😟 Something went wrong!',
  button: 'Try reload',
};

export const Fallback = (props: FallbackProps) => {
  return (
    <div className="h-svh flex flex-col justify-center items-center gap-5">
      <h2>{CONTENT.title}</h2>
      <button
        className="text-2xl px-5 py-1 rounded-md bg-blue-500 border border-blue-500 outline-none cursor-pointer"
        onClick={props.reloadCallback}>
        {CONTENT.button}
      </button>
    </div>
  );
};
