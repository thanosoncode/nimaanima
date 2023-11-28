import Footer from '@/app/components/footer/Footer';
import Contact from './contact/Contact';
import { Level } from '@/app/utils/types';

const ContactPage = () => {
  return (
    <>
      <Contact />
      <Footer level={Level.one} />
    </>
  );
};

export default ContactPage;
