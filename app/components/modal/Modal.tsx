'use client';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, children }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-neutral-700 ${
          open ? 'flex' : 'hidden'
        }`}
      ></div>
      <div className='absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center'>
        {children}
      </div>
    </>
  );
};
export default Modal;
