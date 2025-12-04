const Hero = () => {
  const trackHeroButtonClick = (label: string) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "hero_button_click", {
        button_label: label,
      });
    }
  };
  return (
    <section
      id="home"
      className="min-h-dvh flex flex-col justify-center items-center text-white pt-[64px] px-6 hero-bg"
    >
      <div className="hero-shape p-11 sm:p-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-center">
          See yourself <br />in the story.
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-xl text-center max-w-xl">
          Custom keepsake books that turn <br />your favorite people into the characters.
        </p>
      </div>

      <div
        className="flex 
            mt-4 sm:mt-6 lg:mt-8 xl:mt-10
            space-x-4 lg:space-x-6"
      >
        <button
          className="btn btn-large btn-primary btn-grow font-semibold text-lg px-6 py-3"
          onClick={() => trackHeroButtonClick("Browse Stories")}
          >
          <a href="#mystery">Browse Stories</a>
        </button>
        <button
          className="btn btn-large btn-hero btn-grow font-semibold text-lg px-6 py-3"
          onClick={() => trackHeroButtonClick("Ask About a Book")}
          >
          <a href="#book">Ask About a Book</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
