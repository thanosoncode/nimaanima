import Image from "next/image";
import Link from "next/link";
import RowCarousel from "@/app/components/rowCarousel/RowCarousel";

import { TechniqueData } from "@/app/utils/types";
import Container from "@/app/components/container/Container";

const Technique = (props: TechniqueData) => {
  return (
    <div className="mt-8 mb-20">
      <Container classes=" mb-16">
        <h1 className="mb-8 text-4xl font-thin sm:text-5xl">
          {props.header.title}
        </h1>
        <div className="relative h-[460px] w-full ">
          <Image
            src={props.header.image.src}
            alt={props.header.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 1076px, 95vw"
            placeholder="blur"
            priority
          />
        </div>
      </Container>
      <Container classes="grid grid-cols-1 gap-6 sm:gap-12">
        {props.steps.map((step, index) => (
          <article
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }  items-center gap-6 p-2 sm:gap-12`}
          >
            <div className="w-full text-center sm:w-1/2">
              <h3 className="mb-2 text-2xl font-semibold sm:mb-4">
                {step.info.title}
              </h3>
              <p>{step.info.text}</p>
            </div>
            <div className="relative h-[280px] w-full overflow-hidden rounded-lg sm:w-1/2">
              <Image
                src={step.image.src}
                alt={step.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 498px, (min-width: 1040px) calc(50vw - 72px), calc(50vw - 48px)"
                placeholder="blur"
              />
            </div>
          </article>
        ))}
        <article>
          <div className="mx-auto  my-12 rounded-lg bg-lightPink-400  py-4 px-4 text-center text-lg sm:px-12">
            <h3 className="pb-6 text-center text-2xl font-semibold">
              {props.footer.title}
            </h3>
            <div className="flex flex-col gap-4">
              <p>{props.footer.text}</p>
              <p>
                If you&apos;re looking for a personalized touch{" "}
                <Link href="/contact" className="font-bold underline">
                  let us know
                </Link>{" "}
                and we&apos;ll craft a custom creation just for you
              </p>
            </div>
          </div>
        </article>
        <RowCarousel
          title={props.rowCarousel.title}
          items={props.rowCarousel.products}
        />
      </Container>
    </div>
  );
};

export default Technique;
