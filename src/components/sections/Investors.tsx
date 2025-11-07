const Investors = () => {
  return (
    <section
      id="investors"
      className="min-h-dvh flex flex-col justify-center pt-[52px] sm:pt-[56px] px-6"
    >
      <div>
        <div className="max-w-6xl mx-auto">
          <h2
            className="
                text-2xl mb-12
                lg:text-3xl lg:mb-15"
          >
            Why invest in{" "}
            <span className="text-gray-400">NeuralForge Studios?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
            <div className="mb-6 w-full md:max-w-[553px] ml-auto">
              <h3
                className="font-semibold max-w-xs mb-3
                  text-lg lg:text-xl"
              >
                Scalable AI solutions
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                Our technology is designed for businesses of all sizes, from
                startups to enterprises, offering flexible solutions that grow
                alongside evolving industry needs.
              </p>
            </div>

            <hr className="border-t border-[#383838] w-ful mt-9 mb-8" />

            <div className="mb-6 w-full md:max-w-[553px] ml-auto">
              <h3
                className="font-semibold max-w-xs mb-3
                  text-lg lg:text-xl"
              >
                Creative industry disruption
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                We empower businesses to create custom, AI-generated content
                efficiently, unlocking a new world of creative possibilities and
                market opportunities.
              </p>
            </div>

            <hr className="border-t border-[#383838] w-ful mt-9 mb-8" />

            <div className="mb-6 w-full md:max-w-[553px] ml-auto">
              <h3
                className="font-semibold max-w-xs mb-3
                  text-lg lg:text-xl"
              >
                Market potential
              </h3>
              <p className="text-sm font-semibold text-gray-400">
                The generative AI market is expanding rapidly, and NeuralForge
                Studios is strategically positioned to lead the charge at the
                intersection of technological innovation and commercial
                viability.
              </p>
            </div>
          </div>

          <div className="w-full md:max-w-[553px]">
            <div className="card card-dark">
              <h3
                className="
                  text-xl mb-6
                  lg:text-2xl lg:mb-9"
              >
                <span className="text-[#be9ed3]">Our business model</span>
              </h3>
              <h3 className="text-lg mb-2 font-semibold">
                AI-Powered tools & APIs
              </h3>
              <p className="text-sm font-semibold text-gray-400 mb-9">
                We develop advanced AI models and cloud-based APIs tailored to
                creative industries, enabling businesses to streamline their
                content creation processes.
              </p>
              <h3 className="text-lg mb-2 font-semibold">
                Licensing & partnerships
              </h3>
              <p className="text-sm font-semibold text-gray-400 mb-9">
                Our technology is licensed to creative businesses (such as our
                book company) to enable the next wave of personalized content
                creation.
              </p>
              <h3 className="text-lg mb-2 font-semibold">Revenue streams</h3>
              <p className="text-sm font-semibold text-gray-400 mb-3">
                Future monetization strategies include subscription models for
                API access, licensing agreements, and strategic partnerships.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="ml-auto text-right mt-6 max-w-md">
            <h2 className="font-normal text-lg">
              AI creativity{" "}
              <span className="text-gray-400">are you in?</span>
            </h2>
            <h2 className="font-normal text-left text-gray-400 text-lg">
              Let&rsquo;s talk and discover how we can collaborate to drive the
              next frontier of personalized content creation.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
