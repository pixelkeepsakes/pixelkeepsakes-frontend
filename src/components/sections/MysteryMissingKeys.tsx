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
      className="min-h-dvh flex flex-col justify-center"
    >
      <h2
        className="mx-auto font-normal leading-tight mb-9 text-3xl lg:text-4xl"
      >
        The Mystery of the Missing Keys
      </h2>
      <ImageCarousel
        slides={slides}
        aspectRatio="2/1"
        autoplayDuration={4000}
        showControls={true}
        showViewAll={true}
        viewAllHref="/portfolio"
      />
    </section>
  );
};

export default BigBraveSchoolDay;