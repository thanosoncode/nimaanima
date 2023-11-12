"use client";

import Link from "next/link";
import Empty from "../empty/Empty";
import List from "../list/list";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useAppState } from "@/app/context/context";
import Container from "@/app/components/container/Container";

const ClientFavorites = () => {
  const { favorites: favoritesFromState } = useAppState();

  return (
    <Container classes="mt-6 sm:mt-12 pb-32">
      <div className="mb-16">
        <div className="mb-8 flex items-center justify-between  gap-8 sm:justify-start">
          <h4 className="text-neutral-950 whitespace-nowrap text-4xl font-thin  sm:text-5xl">
            Favorite items
          </h4>
          <Link
            href="/signin"
            className="block whitespace-nowrap rounded-full border-2 border-neutral-900 py-2 px-4 duration-200 hover:scale-[1.04] hover:shadow"
          >
            Sign in
          </Link>
        </div>
        <div className="mb-3 flex items-start gap-2">
          <AiOutlineClockCircle size={22} />
          <p className="font-medium">
            Don&apos;t lose your faves! Sign in or create an account.
          </p>
        </div>
        <p className="max-w-[420px] leading-relaxed text-neutral-600">
          Guest favorites are only saved to your device for 7 days, or until you
          clear your cache. Sign in or create an account to hang on to your
          picks.
        </p>
      </div>
      {}

      {favoritesFromState && favoritesFromState.length > 0 ? (
        <List favorites={favoritesFromState} />
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default ClientFavorites;
