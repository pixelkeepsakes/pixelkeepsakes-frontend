const About = () => {
  return (
    <section
      id="about"
      className="min-h-dvh flex justify-center pt-[52px] sm:pt-[56px] px-3"
    >
      <div className="card card-light flex-1 flex flex-col justify-center p-6 sm:p-10">
        <h2
          className="font-semibold 
              text-4xl
              lg:text-6xl"
        >
          Who <span className="whitespace-nowrap">we are</span>
        </h2>
        <div className="flex items-center justify-center">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-12 leading-relaxed">
                NeuralForge Studios is an innovative AI technology company
                dedicated to developing scalable, high-performance solutions for
                the creative industries. Specializing in generative AI, we
                provide the tools necessary for personalized storytelling,
                custom illustrations, and interactive media, helping businesses
                and creators harness the power of AI to deliver exceptional
                content.
              </p>
              <h3 className="text-2xl mb-6">Our vision</h3>
              <p>
                To redefine creative expression by enabling businesses and
                individuals to craft unique, high-quality experiences
                effortlessly through the power of AI.
              </p>
              {/* <p className="mb-6 leading-relaxed">
                As the parent company of [Book Company Name], our groundbreaking
                technology is already shaping the future of AI-driven publishing
                and personalized content creation, offering a new way for
                creators to engage with their audiences.
              </p> */}
            </div>
            <div>
              <h3 className="text-2xl mb-7 mt-3 md:mt-12">Our approach</h3>
              <ul className="space-y-4">
                <li>
                  <b>AI-Powered Personalization</b> - Empowering users to
                  generate one-of-a-kind, tailored content at scale,
                  transforming the way stories are told and experiences are
                  created.
                </li>
                <li>
                  <b>Seamless Integration</b> - Offering intuitive tools and API
                  solutions that simplify the content creation process for
                  creators and businesses alike.
                </li>
                <li>
                  <b>Scalability & Innovation</b> - Continually pushing the
                  boundaries of AI in creative industries to foster growth and
                  drive the future of personalized content.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
