const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center min-h-[calc(100dvh-64px)] px-3"
    >
      <div className="card card-light flex-1 flex flex-col justify-center p-6 sm:p-10 my-3">
        <h2
          className="font-semibold 
              text-4xl
              lg:text-6xl"
        >
          About
        </h2>
        <div className="flex items-center justify-center">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="mb-12 leading-relaxed">
                Pixel Keepsakes creates personalized storybooks that turn your favorite people into the characters of your story. We specialize in custom storytelling and illustrations, helping families and friends craft unique, memorable experiences that can be cherished for years.
              </p>
              <h3 className="text-2xl mb-6">Our vision</h3>
              <p>
                To make storytelling personal, magical, and accessible for everyone, giving you the tools to create meaningful, one-of-a-kind storybooks effortlessly.
              </p>
            </div>
            <div>
              <h3 className="text-2xl mb-7 mt-3 md:mt-12">Our approach</h3>
              <ul className="space-y-4">
                <li>
                  <b>Personalized Storytelling</b> - Every book is unique, tailored to your friends, family, or special moments, making each story unforgettable.
                </li>
                <li>
                  <b>Beautiful Illustrations</b> - Handcrafted, playful, and vibrant illustrations that bring characters and stories to life.
                </li>
                <li>
                  <b>Memorable Experiences</b> - We make the process simple, fun, and engaging, so anyone can create a story that lasts a lifetime.
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
