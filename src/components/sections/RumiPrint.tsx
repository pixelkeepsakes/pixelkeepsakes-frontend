import Image from "next/image";


const RumiPrint = () => {
  return (
    <section
      id="rumi"
      className="flex flex-col justify-center bg-white items-center text-black min-h-[calc(100dvh-64px)] py-[32px] px-6"
    >
      <h2
        className="text-center font-normal leading-tight mb-9 text-3xl lg:text-4xl text-[var(--brand-blue)]"
      >
        Custom Character Print - Rumi
      </h2>


      <Image
        src="/RumiPrint/PhotoRumiPrint.png"
        alt="Custom Character Print - Rumi"
        width={1618}       // original width
        height={809}       // original height
        className="w-full max-w-[1618px] rounded-lg shadow-lg"
        sizes="(max-width: 640px) 90vw,
           (max-width: 1024px) 80vw,
           (max-width: 1536px) 70vw,
           1618px"
        priority
      />


      <p className="mt-6 max-w-6xl">
        A custom print reimagining the characters from a popular story as younger versions. <br />
        The main character, Rumi, features my daughter&apos;s likeness. This is a personal, non-commercial piece inspired by the original artwork.
      </p>
    </section>
  );
};

export default RumiPrint;