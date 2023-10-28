'use client';

import { useAppState } from '@/app/context/context';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsFilter } from 'react-icons/bs';
import { SortBy } from '../../../../utils/types';
import { BsCheckLg } from 'react-icons/bs';

type Selection = {
  name: string;
  sortBy: SortBy;
};

const Filter = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const params = useSearchParams();
  const category = params.get('category');
  const currentSortBy = params.get('sort');

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClearCategory = () => {
    if (currentSortBy) {
      router.push(`/?sort=${currentSortBy}`);
      setMenuOpen(false);
      return;
    } else {
      router.push('');
      setMenuOpen(false);
      return;
    }
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

  useEffect(() => {
    const closeModal = () => setMenuOpen(false);
    if (menuOpen && !isMouseOver) {
      document.addEventListener('click', closeModal);
    }
    return () => document.removeEventListener('click', closeModal);
  }, [menuOpen, isMouseOver]);

  const selection: Selection[] = [
    { name: 'Price: Low to High', sortBy: 'asc' },
    { name: 'Price: High to Low', sortBy: 'desc' },
  ];

  return (
    <div className='relative'>
      <div
        onClick={handleMenuOpen}
        className='w-min cursor-pointer whitespace-nowrap rounded-full border border-black px-4 py-1.5 text-center'
      >
        {currentSortBy ? (
          <p className='text-sm'>
            {selection.find((s) => s.sortBy === currentSortBy)?.name}
          </p>
        ) : (
          <BsFilter />
        )}
      </div>
      <div
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className={`absolute top-8 right-0 z-50  flex flex-col whitespace-nowrap rounded-lg border bg-white shadow-md duration-300 ease-in-out ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        } `}
      >
        {selection.map((selection) => (
          <div
            key={selection.sortBy}
            onClick={() => handleSelectionClick(selection.sortBy)}
            className={`cursor-pointer py-1.5 px-5 hover:bg-neutral-100 flex items-center gap-2 ${
              currentSortBy === selection.sortBy ? 'font-semibold' : ''
            }`}
          >
            {selection.name}
            {currentSortBy === selection.sortBy && <BsCheckLg size={20} />}
          </div>
        ))}
        <Link
          href='/'
          className='cursor-pointer border-t border-neutral-300 py-1.5 px-5 hover:bg-neutral-100'
          onClick={handleClearCategory}
        >
          Clear category
        </Link>
      </div>
    </div>
  );
};
export default Filter;
