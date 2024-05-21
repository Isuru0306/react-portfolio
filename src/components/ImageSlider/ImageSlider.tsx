import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

type SlideImageProps = {
  images: string[];
};
export default function ImageSlider({ images }: Readonly<SlideImageProps>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalSlider = (imgIndex: number) => {
    setCurrentImageIndex(imgIndex);
    setIsModalOpen(true);
  };
  const renderImages = () => {
    return images.map((imageLink, i) => {
      return (
        <Image
          onClick={() => openModalSlider(i)}
          src={imageLink}
          boxShadow="xl"
          borderRadius="xl"
          key={imageLink}
        />
      );
    });
  };
  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      infinite={false}
      arrows={images.length > 1}
      autoplay={false}
    >
      {renderImages()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      size="6xl"
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow={"none"}>
        <ModalCloseButton zIndex={1} bg="white" />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );
  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
}
