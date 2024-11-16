import { MainLayoutHero } from "../../components/Layout/Main/MainLayoutHero";
import dog_golden from "../../assets/images/pet_golden.png";

export const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="grid grid-rows-1 gap-5 bg-coral_red p-2">
          <MainLayoutHero />
          <div className="flex items-center justify-start gap-5">
            <button className="btn">Schedule Service</button>
            <span className="text-smokeWhite font-openSans font-regular text-20">
              Or Call 866.338.2463
            </span>
          </div>
        </div>

        <div className="relative grid grid-rows-1 items-end">
          <div className="relative flex justify-end items-center">
            <div className="bg-yellow_vivid rounded-full w-[545px] h-[545px]  overflow-hidden flex justify-center items-center">
              <img
                src={dog_golden}
                alt="dog_golden"
                className=" h-[110%] object-cover transform translate-y-9"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
