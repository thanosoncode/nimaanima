const Backdrop = ({ open, message }: { open: boolean; message: string }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full flex justify-center items-center backdrop-brightness-75 ${
        open ? "flex" : "hidden"
      }`}
    >
      {message}
    </div>
  );
};
export default Backdrop;
