import Footer from '@/app/components/footer/Footer';
import SignIn from './signIn/SignIn';
import { Level } from '@/app/utils/types';

const SignInPage = () => {
  return (
    <>
      <SignIn />
      <Footer level={Level.two} />
    </>
  );
};

export default SignInPage;
