import Container from "./Container";

const Contact = () => {
  return (
    <section className="bg-lightBlue-400 py-10">
      <Container classes="flex flex-col gap-8 justify-center items-center">
        <h4 className="text-bold text-2xl">
          Feel free to contact us to discuss your ideas or to order more
          personalized products.
        </h4>
        <button
          style={{
            background: "white",
            borderRadius: "999px",
            padding: "8px 20px",
            border: "1px solid gray",
            fontWeight: "bolder",
          }}
        >
          Get in touch!
        </button>
      </Container>
    </section>
  );
};
export default Contact;
