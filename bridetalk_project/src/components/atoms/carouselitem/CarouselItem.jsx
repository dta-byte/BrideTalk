import "./carouselitem.css";
/**Returns image to carousel */
export const CarouselItem = (props) => {
  const { width, image } = props;

  return (
    <img
      src={image}
      alt="Alt"
      className="carousel-item"
      style={{ width: width }}
    />
  );
};
