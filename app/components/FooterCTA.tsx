import Link from "next/link";
import Container from "./Container";

const FooterCTA = () => {
  return (
    <>
      <section className="bg-someBlue-400 py-10">
        <Container classes="flex flex-col gap-3 justify-center items-center">
          <h4 className="text-bold text-2xl">
            Feel free to contact us to discuss your ideas or to order more
            personalized products.
          </h4>
          <p className="max-w-md text-center">
            Whether you have a specific idea in mind or need help exploring your
            concepts, we're here to help. We're excited to hear from you and
            start working on your next project!
          </p>
          <button className="rounded-full border border-black bg-white py-2 px-5 font-bold duration-200 ease-in-out hover:scale-105">
            <Link href="/contact">Get in touch!</Link>
          </button>
        </Container>
      </section>
      <div className="bg-someBlue-500">
        <Container classes="py-3 text-center">
          Every product is 100% handmade.
        </Container>
      </div>
    </>
  );
};
export default FooterCTA;
