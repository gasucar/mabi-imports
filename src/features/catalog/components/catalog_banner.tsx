import { useTranslation } from "react-i18next";

const CatalogBanner = () => {
  const { t } = useTranslation()
  return (
    <section className="bg-gray-50 py-14 text-center">
      <h1 className="text-5xl md:text-6xl font-serif mb-4">
        {t("catalog.title")}
      </h1>

      <p className="text-gray-600 text-lg">
        {t("catalog.subtitle")}
      </p>
    </section>
  );
};

export default CatalogBanner;