// Local types
type ImageWithContainerProps = {
  className?: string;
  src: string;
  alt: string;
};

const ImageWithContainer = ({
  className,
  src,
  alt,
}: ImageWithContainerProps) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="grid size-full place-items-center" />
    </div>
  );
};

export default ImageWithContainer;
