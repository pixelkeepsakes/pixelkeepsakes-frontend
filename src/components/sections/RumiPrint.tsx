import Image from "next/image";


const RumiPrint = () => {
  return (
    <section
      id="rumi"
      className="min-h-dvh flex flex-col justify-center bg-white items-center py-18 px-15 text-black"
    >
      <h2
        className="mx-auto font-normal leading-tight mb-9 text-3xl lg:text-4xl text-[var(--brand-blue)]"
      >
        Custom Character Print - Rumi
      </h2>
      <div className="w-full max-w-[1618px] pb-6">
        <Image
          src="/RumiPrint/PhotoRumiPrint.png"
          alt="Custom Character Print - Rumi"
          width={1618} // original image width
          height={809} // original image height
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <p>A custom print reimagining the characters from a popular story as younger versions. <br />The main character, Rumi, features my daughter&apos;s likeness. This is a personal, non-commercial piece inspired by the original artwork.</p>
    </section>
  );
};

export default RumiPrint;