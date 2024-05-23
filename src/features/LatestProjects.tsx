import { ProjectsAPI } from "@/api/projects";
import { Badge } from "@/components/Badge";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { Box, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Image = {
  type: string;
  lastModifiedTS: number;
  name: string;
  downloadURL: string;
  ref: string;
};

type RenderProjectProps = {
  id: string;
  images: Image[];
  title: string;
  description: string;
  technologies: string[];
};

export function LatestProjects() {
  const [projects, setProjects] = useState<RenderProjectProps[]>(
    [] as RenderProjectProps[]
  );

  const { t } = useTranslation("home");

  useEffect(() => {
    (async () => {
      const projectsResponse = await ProjectsAPI.fetchAll();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setProjects(projectsResponse as any);
    })();
  }, []);

  const renderProject = ({
    id,
    images,
    title,
    description,
    technologies,
  }: RenderProjectProps) => {
    return (
      <WrapItem key={id} flexDir={"column"}>
        <ImageSlider images={images} />
        <Heading size="md" color="secondary" mt={3}>
          <Box
            display={"inline-block"}
            bg="primary.dark"
            w={25}
            h={1}
            mr={3}
            verticalAlign="middle"
          />
          {title}
        </Heading>
        <Text>{description}</Text>
        <Wrap mt={2} maxW={350}>
          {technologies.map((tech) => (
            <WrapItem key={tech}>
              <Badge bg={tech}>{tech}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </WrapItem>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading>{t("latestProjects")}</Heading>
      <Wrap mt={10} spacing={16}>
        {projects?.map(renderProject)}
      </Wrap>
    </Flex>
  );
}
