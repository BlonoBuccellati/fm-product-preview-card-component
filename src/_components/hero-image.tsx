import Image from "next/image";

interface HeroImageProps {
  className?: string;
}
const HeroImage = ({ className }: HeroImageProps) => {
  return (
    <picture>
      <source
        srcSet="/images/image-product-desktop.jpg"
        media="(min-width:768px)"
      />
      <Image
        src="/images/image-product-mobile.jpg"
        alt="chanel perfume"
        fill
        className={className}
      ></Image>
    </picture>
  );
};

export default HeroImage;
