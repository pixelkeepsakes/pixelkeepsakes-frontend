import ImageCarousel from '../ImageCarousel';

const title = "Adrianna's Big, Brave School Day";

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
      className="flex flex-col justify-center min-h-[calc(100dvh-64px)] py-[32px]"
    >
      <ImageCarousel
        slides={slides}
        aspectRatio="16/10"
        autoplayDuration={4000}
        showControls={true}
        showViewAll={false}
        viewAllHref="/portfolio"
        bookTitle={title}
      />
    </section>
  );
};

export default BigBraveSchoolDay;