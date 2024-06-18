import React from "react";
import HeroSectionImage from "../../img/22.png";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800" id="Home">
      <div className=" flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div
          dir={i18n.language == "ar" ? "rtl" : "ltr"}
          className=" px-10 flex flex-col w-full justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left relative"
        >
          <h1 className="text-6xl font-bold   leading-relaxed">
            <span className="dark:text-blue-500"> {t("Si Robotics")} </span>
            {t(" pioneering company")}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            {t(
              "dedicated to revolutionizing the consumer services industry through innovative robotic automation integration solutions."
            )}
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 ">
            <button className=" button2 ">
              <p>{t("Read More")}</p>
            </button>
          </div>
        </div>
        <div className="flex overflow-hidden items-center w-full justify-end p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={HeroSectionImage}
            alt="hero section image"
            className="object-contain rotate-12  sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
