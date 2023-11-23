import ClearCategoryButton from '../clearCategoryButton/ClearCategoryButton';
import SortByButton from './sortByButton/SortByButton';

const Controls = () => {
  return (
    <div className="flex items-center gap-2">
      <ClearCategoryButton />
      <SortByButton />
    </div>
  );
};

export default Controls;
