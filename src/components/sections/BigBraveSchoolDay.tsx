import ImageCarousel from '../ImageCarousel';

const slides = [
  { image: '/BigBraveSchoolDay/BBSDPhotoCover.png', label: 'Front Cover', alt: 'Front Cover' },
  { image: '/BigBraveSchoolDay/BBSDSlide1.png', label: 'Pages 2-3: The Night Before', alt: 'Pages 2-3: The Night Before' },
  { image: '/BigBraveSchoolDay/BBSDSlide2.png', label: 'Pages 8-9: First Day Jitters', alt: 'Pages 8-9: First Day Jitters' },
  { image: '/BigBraveSchoolDay/BBSDSlide3.png', label: 'Pages 14-15: Laughter in the Air', alt: 'Pages 14-15: Laughter in the Air' },
  { image: '/BigBraveSchoolDay/BBSDSlide4.png', label: 'Pages 18-19: Proud and Happy', alt: 'Pages 18-19: Proud and Happy' },
];


const BigBraveSchoolDay = () => {
  return (
    <section
      id="school"
      className="min-h-dvh flex flex-col justify-center"
    >
      <h2
        className="mx-auto font-normal leading-tight mb-9 text-3xl lg:text-4xl"
      >
        Adrianna&apos;s Big, Brave School Day 
      </h2>
      <ImageCarousel
        slides={slides}
        aspectRatio="16/10"
        autoplayDuration={4000}
        showControls={true}
        showViewAll={true}
        viewAllHref="/portfolio"
      />
    </section>
  );
};

export default BigBraveSchoolDay;