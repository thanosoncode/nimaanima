'use client';
import google from '../../../../public/assets/social/google.svg';
import facebook from '../../../../public/assets/social/facebook.svg';
import instagram from '../../../../public/assets/social/instagram.png';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <div className="mx-auto mt-20 flex w-min items-center  justify-center rounded-3xl border border-neutral-300 p-8 pb-14 shadow-soft">
      <div>
        <h1 className="mb-8 text-xl font-medium">Sign in</h1>
        <div className="flex flex-col gap-6">
          <button
            onClick={() => signIn('google')}
            className="flex w-[320px] items-center justify-center gap-4 whitespace-nowrap rounded-full border-2 border-black py-3 font-semibold duration-300 hover:scale-[1.04] hover:shadow-md"
          >
            <div className="relative h-4 w-4">
              <Image src={google} fill alt="google" />
            </div>
            Continue with Google
          </button>
          <button className="flex w-[320px] items-center justify-center gap-4 whitespace-nowrap rounded-full border-2 border-black py-3 font-semibold duration-300 hover:scale-[1.04] hover:shadow-md">
            <div className="relative h-4 w-4">
              <Image src={facebook} fill alt="facebook" />
            </div>
            Continue with Facebook
          </button>
          <button className="flex w-[320px] items-center justify-center gap-4 whitespace-nowrap rounded-full border-2 border-black py-3 font-semibold duration-300 hover:scale-[1.04] hover:shadow-md">
            <div className="relative h-5 w-5">
              <Image src={instagram} fill alt="instagram" />
            </div>
            Continue with Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
