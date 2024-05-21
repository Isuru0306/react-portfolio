import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Box, Image } from "@chakra-ui/react";

type SlideImageProps = {
  imageList: {
    url: string;
    caption: string;
  }[];
};

export default function ImageSlider({ imageList }: Readonly<SlideImageProps>) {
  const renderImages = () => {
    return imageList.map((imageLink) => {
      return (
        <Image
          src={imageLink.url}
          boxShadow="xl"
          borderRadius="xl"
          key={imageLink.caption}
        />
      );
    });
  };
  const slider = (
    <Slide infinite={false} arrows={imageList.length > 1} autoplay={false}>
      {renderImages()}
    </Slide>
  );
  return (
    <>
      <Box w={350}>{slider}</Box>
    </>
  );
}
