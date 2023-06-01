import { useTranslation } from "react-i18next";
import { Layout } from "../../../components/Layout";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return <Layout>{t("Про нас")}</Layout>;
};

export default AboutPage;
