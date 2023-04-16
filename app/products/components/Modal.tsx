"use client";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, children }) => {
  const display = open ? "flex" : "none";
  return (
    <div
      className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-slate-300"
      style={{ display }}
    >
      {children}
    </div>
  );
};
export default Modal;
