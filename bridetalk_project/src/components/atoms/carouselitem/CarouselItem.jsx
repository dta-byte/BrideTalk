import "./carouselitem.css";

export const CarouselItem = (props) => {
  const { children, width, backgroundImage } = props;
  return (
    <div
      className="carousel-item"
      style={{ width: width, backgroundImage: backgroundImage }}
    >
      {children}
    </div>
  );
};
