'use client';
import google from '../../../public/assets/social/google.svg';
import facebook from '../../../public/assets/social/facebook.svg';
import instagram from '../../../public/assets/social/instagram.png';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <div className='flex justify-center items-center rounded-3xl border  shadow-soft border-neutral-300 p-8 pb-14 mt-20 w-min mx-auto'>
      <div>
        <h1 className='text-xl font-medium mb-8'>Sign in</h1>
        <div className='flex flex-col gap-6'>
          <button
            onClick={() => signIn('google')}
            className='rounded-full justify-center py-3 whitespace-nowrap w-[320px] border-black border-2 font-semibold flex gap-4 items-center hover:scale-[1.04] hover:shadow-md duration-300'
          >
            <div className='w-4 h-4 relative'>
              <Image src={google} fill alt='google' />
            </div>
            Continue with Google
          </button>
          <button className='rounded-full justify-center py-3 whitespace-nowrap w-[320px] border-black border-2 font-semibold flex gap-4 items-center hover:scale-[1.04] hover:shadow-md duration-300'>
            <div className='w-4 h-4 relative'>
              <Image src={facebook} fill alt='facebook' />
            </div>
            Continue with Facebook
          </button>
          <button className='rounded-full justify-center py-3 whitespace-nowrap w-[320px] border-black border-2 font-semibold flex gap-4 items-center hover:scale-[1.04] hover:shadow-md duration-300'>
            <div className='w-5 h-5 relative'>
              <Image src={instagram} fill alt='instagram' />
            </div>
            Continue with Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
