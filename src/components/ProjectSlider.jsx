import ProjectCard from "./ProjectCard";
import AliceCarousel from "react-alice-carousel";

const ProjectSlider = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
  };

  const items = [
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
    <ProjectCard />,
  ];
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={3000}
      disableDotsControls={true}
      infinite
      renderPrevButton={() => (
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
      )}
      renderNextButton={() => (
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      )}
    />
  );
};
export default ProjectSlider;
