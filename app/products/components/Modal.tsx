"use client";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, children }) => {
  const display = open ? "flex" : "none";
  return (
    <>
      <div
        className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-neutral-500 opacity-50"
        style={{ display }}
      ></div>
      <div
        className="absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center"
        style={{ display }}
      >
        {children}
      </div>
    </>
  );
};
export default Modal;
