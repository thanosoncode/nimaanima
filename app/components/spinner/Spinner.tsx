const Spinner = ({ message, size }: { message?: string; size?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${
          size ? size : "h-5 w-5"
        }  infinite animate-spin rounded-full border-4 border-neutral-400 ease-linear`}
        style={{ borderTop: "3px solid #000" }}
      ></div>
      {message && <div className="text-center text-white">{message}</div>}
    </div>
  );
};
export default Spinner;
