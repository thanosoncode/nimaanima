const Backdrop = ({ open, message }: { open: boolean; message: string }) => {
  return (
    <div
      className={`absolute inset-0 flex h-full w-full items-center justify-center backdrop-brightness-75 ${
        open ? "flex" : "hidden"
      }`}
    >
      {message}
    </div>
  );
};
export default Backdrop;
