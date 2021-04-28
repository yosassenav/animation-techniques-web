import Image from "next/image";

/* Dynamic image component */
const Img = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

export { Image };
