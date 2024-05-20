import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logoImg from "@/assets/images/logo.png";
import bubbleImg from "@/assets/images/bubble.png";
import flagEnImg from "@/assets/images/flag-en.png";
import flagSlImg from "@/assets/images/sl.png";

import { useTranslation } from "react-i18next";
export function Header() {
  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "lk" : "en");
  };
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        <Image src={bubbleImg} h={10} />
        <Link
          href={
            "mailto:isuru.bandara0306@gmail.com?subject=Contacting you from your portfolio"
          }
          fontWeight={"bold"}
          fontSize={"lg"}
        >
          {t("hireMe")}
        </Link>
        <Image
          pl={20}
          h={8}
          cursor="pointer"
          onClick={switchLanguage}
          src={i18n.language === "en" ? flagEnImg : flagSlImg}
        />
      </HStack>
    </Flex>
  );
}
