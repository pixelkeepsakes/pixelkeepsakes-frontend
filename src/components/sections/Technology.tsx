const Technology = () => {
  return (
    <section
      id="technology"
      className="min-h-dvh flex flex-col justify-center pt-[52px] sm:pt-[56px] px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-normal leading-tight mb-9
            text-3xl lg:text-4xl"
        >
          The future of{" "}
          <span className="text-gray-400 whitespace-nowrap">
            generative AI.
          </span>
        </h2>

        <p
          className="text-sm text-gray-400 
              max-w-xs mb-14
              md:max-w-sm md:mb-16 
              lg:max-w-md lg:mb-18"
        >
          At NeuralForge Studios, we bridge the gap between advanced technology
          and creative expression. Our AI models unlock new possibilities for
          creators, enabling them to bring their ideas to life with precision
          and flair.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
        <div className="card card-dark relative z-20">
          <h3 className="text-lg mb-2 font-regular">
            Custom AI model generation
          </h3>
          <p className="text-sm">
            Create highly personalized and adaptable AI models to suit diverse
            creative needs.
          </p>
        </div>
        <div className="card card-dark relative z-20">
          <h3 className="text-lg mb-2 font-regular">
            Generative illustration & storytelling
          </h3>
          <p className="text-sm">
            Bring stories to life with dynamic, AI-powered illustrations that
            match unique narrative styles.
          </p>
        </div>
        <div className="card card-dark relative z-20">
          <h3 className="text-lg mb-2 font-regular">Cloud-based AI APIs</h3>
          <p className="text-sm">
            Deliver scalable, cloud-based solutions for seamless integration
            with creative platforms.
          </p>
        </div>
      </div>

      <div className="bg-[#000] pt-30 rounded-bl-[100%_100%] rounded-br-[100%_100%] relative z-10 -mt-30"></div>
      <div className="bg-[#1c0136] px-6 pt-24 bg-gradient-to-b from-[#260345] to-black relative z-0 -mt-15">
        <div className="px-6 max-w-3xl mx-auto">
          <h3 className="text-lg mb-2 text-[#be9ed3] font-bold">
            Coming soon: LoRA API
          </h3>
          <p className="text-sm">
            Our upcoming API will allow users to generate LoRA models from a
            single profile picture, revolutionizing personalized content
            creation by transforming photos into detailed, cartoon-like
            characters with ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
