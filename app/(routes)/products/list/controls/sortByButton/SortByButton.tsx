'use client';

import { useAppState } from '@/app/context/context';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { SortBy } from '../../../../../utils/types';
import { BsCheckLg } from 'react-icons/bs';
import { useOutsideClick } from '@/app/utils/helpers';

type Selection = {
  name: string;
  sortBy: SortBy;
};

const SortByButton = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const params = useSearchParams();
  const category = params.get('category');
  const currentSortBy = params.get('sort');
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelectionClick = (sortBy: SortBy) => {
    if (currentSortBy === sortBy) {
      if (category) {
        router.push(`/?category=${category}`);
        setMenuOpen(false);
        return;
      } else {
        router.push('/');
        setMenuOpen(false);
        return;
      }
    }
    if (category) {
      router.push(`/?category=${category}&sort=${sortBy}`);
      setMenuOpen(false);
      return;
    } else {
      router.push(`/?sort=${sortBy}`);
      setMenuOpen(false);
      return;
    }
  };

  useOutsideClick({ ref: menuRef, onOutsideClick: () => setMenuOpen(false) });

  const selection: Selection[] = [
    { name: 'Price: Low to High', sortBy: 'asc' },
    { name: 'Price: High to Low', sortBy: 'desc' },
  ];

  return (
    <div className="relative">
      <div
        onClick={handleMenuOpen}
        className="w-min cursor-pointer whitespace-nowrap rounded-full border border-black px-4 py-1.5 text-center"
      >
        {currentSortBy ? (
          <p className="text-sm">
            {selection.find((s) => s.sortBy === currentSortBy)?.name}
          </p>
        ) : (
          <BsFilter />
        )}
      </div>
      <div
        ref={menuRef}
        className={`absolute top-10 right-0 z-50  flex flex-col whitespace-nowrap rounded-lg border bg-white shadow-md duration-300 ease-in-out ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        } `}
      >
        {selection.map((selection) => (
          <div
            key={selection.sortBy}
            onClick={() => handleSelectionClick(selection.sortBy)}
            className={`flex cursor-pointer items-center gap-2 py-1.5 px-5 hover:bg-neutral-100 ${
              currentSortBy === selection.sortBy ? 'font-semibold' : ''
            }`}
          >
            {selection.name}
            {currentSortBy === selection.sortBy && <BsCheckLg size={20} />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SortByButton;
