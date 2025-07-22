import './Fallback.css';

interface FallbackProps {
  reloadCallback: () => void;
}

export const Fallback = (props: FallbackProps) => {
  return (
    <div className="fallback">
      <h2>Ups... 😟 Something went wrong!</h2>
      <button className="fallback__reload-button" onClick={props.reloadCallback}>
        Try reload
      </button>
    </div>
  );
};
