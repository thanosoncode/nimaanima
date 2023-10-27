'use client';

import { useAppDispatch } from '@/app/context/context';

const ShowAllCategoriesButton = () => {
  const dispatch = useAppDispatch();
  const handleButtonClick = () => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', category: null });
  };
  return (
    <button onClick={handleButtonClick} className='mt-4 border-b-black px-2'>
      Show all
    </button>
  );
};
export default ShowAllCategoriesButton;
