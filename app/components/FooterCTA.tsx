import Link from "next/link";
import Container from "./Container";

const FooterCTA = () => {
  return (
    <>
      <section className="bg-someBlue-400 py-10">
        <Container classes="flex flex-col gap-3 justify-center items-center">
          <h4 className="text-bold px-8 text-center text-xl">
            Connect with us to explore your concepts or request tailored items
          </h4>

          <button className="rounded-full border border-neutral-400 bg-white py-2 px-5 font-semibold duration-200 ease-in-out hover:scale-105">
            <Link href="/contact">Get in touch!</Link>
          </button>
        </Container>
      </section>
      <div className="bg-someBlue-500">
        <Container classes="py-3 text-center text-white">
          Every product is 100% handmade.
        </Container>
      </div>
    </>
  );
};
export default FooterCTA;
