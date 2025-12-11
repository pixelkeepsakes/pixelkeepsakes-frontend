import ImageCarousel from '../ImageCarousel';

const title = "Logan's Toy Hunt at Grandma's House";

const slides = [
  { image: '/LoganToyHunt/LTHGHPhotoCover.png', label: 'Front Cover', alt: 'Front Cover' },
  { image: '/LoganToyHunt/LTHGHSlide1.png', label: 'Pages 6-7: Kitchen Helper', alt: 'Pages 6-7: Kitchen Helper' },
  { image: '/LoganToyHunt/LTHGHSlide2.png', label: 'Pages 12-13: Reading and a Truck', alt: 'Pages 12-13: Reading and a Dump Truck' },
  { image: '/LoganToyHunt/LTHGHSlide3.png', label: 'Pages 14-15: Bathtub Excavator', alt: 'Pages 14-15: Bathtub Excavator' },
  { image: '/LoganToyHunt/LTHGHSlide4.png', label: 'Pages 18-19: Tools and a Purple Loader', alt: 'Pages 18-19: Tools and a Purple Loader' },
  { image: '/LoganToyHunt/LTHGHSlide5.png', label: 'Pages 22-23: Hiding From Baxter', alt: 'Pages 22-23: Hiding From Baxter' },
  { image: '/LoganToyHunt/LTHGHSlide6.png', label: 'Pages 24-25: Sandbox Group Fun', alt: 'Pages 24-25: Sandbox Group Fun' },
];


const LoganToyHunt = () => {
  return (
    <section
      id="toyhunt"
      className="flex flex-col justify-center min-h-[calc(100dvh-64px)] py-[32px]"
    >
      <ImageCarousel
        slides={slides}
        aspectRatio="2/1"
        autoplayDuration={4000}
        showControls={true}
        showViewAll={false}
        viewAllHref="/portfolio"
        bookTitle={title}
      />

    </section>
  );
};

export default LoganToyHunt;