const Spinner = ({ message, size }: { message?: string; size?: string }) => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
      <div
        className={`${
          size ? size : 'w-5 h-5'
        }  rounded-full border-4 border-neutral-400 animate-spin ease-linear infinite`}
        style={{ borderTop: '3px solid #000' }}
      ></div>
      {message && <div className='text-center text-white'>{message}</div>}
    </div>
  );
};
export default Spinner;
