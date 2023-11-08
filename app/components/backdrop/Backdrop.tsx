interface BackdropProps {
  open: boolean;
  children: React.ReactNode;
}

const Backdrop = ({ open, children }: BackdropProps) => {
  return (
    <div
      className={`fixed inset-0 flex h-full w-full items-center justify-center backdrop-brightness-75 ${
        open ? 'flex' : 'hidden'
      }`}
    >
      {children}
    </div>
  );
};
export default Backdrop;
