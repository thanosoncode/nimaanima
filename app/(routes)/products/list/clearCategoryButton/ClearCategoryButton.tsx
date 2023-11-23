'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const ClearCategoryButton = () => {
  const router = useRouter();
  const params = useSearchParams();
  const category = params.get('category');
  const currentSortBy = params.get('sort');

  const handleClearCategory = () => {
    if (currentSortBy) {
      router.push(`/?sort=${currentSortBy}`);
      return;
    } else {
      router.push('');
      return;
    }
  };

  return category ? (
    <button
      className="cursor-pointer p-1 text-sm hover:bg-neutral-100"
      onClick={handleClearCategory}
    >
      Clear category
    </button>
  ) : null;
};

export default ClearCategoryButton;
