import ImageCarousel from '../ImageCarousel';

const slides = [
  { image: '/MysteryOfMissingKey/MMKPhotoCover.png', label: 'Front Cover', alt: 'Front Cover' },
  { image: '/MysteryOfMissingKey/MMKSlide1.png', label: 'Pages 2-3: Great Minds Dress Alike', alt: 'Pages 2-3: Great Minds Dress Alike' },
  { image: '/MysteryOfMissingKey/MMKSlide2.png', label: 'Pages 4-5: Missing Keys Mystery', alt: 'Pages 4-5: Missing Keys Mystery' },
  { image: '/MysteryOfMissingKey/MMKSlide3.png', label: 'Pages 14-15: Basement Discovery', alt: 'Pages 14-15: Basement Discovery' },
  { image: '/MysteryOfMissingKey/MMKSlide4.png', label: 'Pages 18-19: Mystery Solved', alt: 'Pages 18-19: Mystery Solved' },
  { image: '/MysteryOfMissingKey/MMKSlide5.png', label: 'Pages 24-25: Closet Dreams', alt: 'Pages 24-25: Closet Dreams' },
];


const BigBraveSchoolDay = () => {
  return (
    <section
      id="mystery"
      className="flex flex-col justify-center min-h-[calc(100dvh-64px)] py-[32px]"
    >
      <h2
        className="text-center font-normal leading-tight text-3xl lg:text-4xl"
      >
        The Mystery of the Missing Keys
      </h2>
      <ImageCarousel
        slides={slides}
        aspectRatio="2/1"
        autoplayDuration={4000}
        showControls={true}
        showViewAll={false}
        viewAllHref="/portfolio"
      />

    </section>
  );
};

export default BigBraveSchoolDay;