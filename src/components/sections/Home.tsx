const Home = () => {
  return (
    <section
      id="home"
      className="min-h-dvh flex flex-col justify-center items-center bg-gradient-to-b from-[#7500cb] to-black text-white pt-[52px] sm:pt-[56px] px-6"
    >
      <h2 className="font-semibold text-gray-300 
      text-2xl text-center
      sm:text-2xl sm:text-left 
      lg:text-3xl">
        <div>Empowering</div>
        {/* Gradient Text */}
        <span
          className="relative block font-regular bg-gradient-to-r from-[#5b21b6] to-[#6b7280] bg-clip-text text-transparent
                after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 
                after:w-[120%] after:h-[50px] after:bg-white after:opacity-50 after:blur-[60px] after:z-[0] 
                text-4xl mt-2 mb-6
                sm:text-6xl sm:mt-0 sm:mb-6 
                md:text-8xl md:mb-6
                lg:text-10xl lg:-mt-6"
        >
          creativity
        </span>
        <span className="block text-center
        text-lg -mt-4
        sm:text-xl sm:-mt-6
        md:text-xl  
        lg:text-2xl lg:-mt-9">
          with AI-driven innovation
        </span>
      </h2>

      <div
        className="flex mt-12
            space-x-4
            lg:space-x-6"
      >
        <button
          className="btn btn-large btn-primary btn-grow font-semibold text-lg px-6 py-3">
          <a href="#technology">Learn more</a>
        </button>
        <button
          className="btn btn-large btn-hero btn-grow font-semibold text-lg px-6 py-3">
          <a href="#contact">Contact us</a>
        </button>
      </div>

      <div className="mr-auto text-right max-w-sm mt-12">
        <h2 className="text-lg font-normal">
          NeuralForge Studios{" "}
          <span className="text-gray-400">is redefining</span>
        </h2>
        <h2 className="text-left text-gray-400 text-lg font-normal">
          the future of creativity with cutting-edge AI technology...
        </h2>
      </div>
    </section>
  );
};

export default Home;
