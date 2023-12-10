import { memo } from "react";
import FooterSection from "./footerSecontions/footerSection";
import {
  SOCCIAL_SECTION,
  CATEGORIES_SECTION,
  NAVIGATION_SECTION,
} from "./footerData";

const Footer = memo(() => {
  return (
    <footer>
      <FooterSection data={NAVIGATION_SECTION} />
      <FooterSection data={CATEGORIES_SECTION} showGrid />
      <FooterSection data={SOCCIAL_SECTION} />
    </footer>
  );
});

export default Footer;
