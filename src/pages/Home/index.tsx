import { MainLayoutHero } from "../../components/Layout/Main/MainLayoutHero";
import dog_golden from "../../assets/images/pet_golden.png";
import dog_walk from "../../assets/images/dog.svg";
import pet_sitting from "../../assets/images/cat.svg";
import house_care from "../../assets/images/home.svg";
import pad from "../../assets/images/pad.svg";
import { Carousel } from "../../components/Carousel/Carrousel";

export const Home = () => {
  return (
    <>
      <main className="main">
        <section className="hero-section">
          <div className="grid grid-rows-1 gap-5 bg-coral_red">
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
        <section className="service-section">
          <div className="grid grid-rows-1 gap-5">
            <div>
              <h3 className="text-coral_red text-48 font-bold font-comfortaa opacity-100">
                Our Services
              </h3>
              <p className="text-gray_neutral opacity-80 text-24 font-regular font-openSans">
                National Brand With a Local Feel. Experience the Fetch!
                Difference
              </p>
              <p className="text-24 text-coral_red font-comfortaa font-bold opacity-100">
                Enter Your Location and Fetch Our Services
              </p>
            </div>
            <div className="flex">
              <div>
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  autoComplete="on"
                  className="rounded-full w-52 h-16 outline-none pl-7 shadow-md"
                />
              </div>
              <button className="w-14 h-14 opacity-100 ml-[-3.9rem] mt-[0.3rem] shadow-btn_zipcode bg-coral_red rounded-full">
                {"-->"}
              </button>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-4 w-full justify-end">
            <div className="card-service">
              <img src={dog_walk} />
              <p className="text-card-service">Dog Walking</p>
            </div>

            <div className="card-service">
              <img src={pet_sitting} />
              <p className="text-card-service">Pet Sitting</p>
            </div>
            <div className="card-service">
              {" "}
              <img src={house_care} />
              <p className="text-card-service">Overnight Care</p>
            </div>
            <div className="card-service">
              <img src={pad} />
              <p className="text-card-service">Other Services</p>
            </div>
          </div>
        </section>
        <section className="reviewservice-section z-index">
          <h1 className="font-comfortaa text-48 font-bold text-coral_red flex max-w-4xl text-center">
            Here's what pet owners have to say about Fetch! Pet Care...
          </h1>
          <Carousel />
        </section>
      </main>
    </>
  );
};
