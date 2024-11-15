import { MainLayoutHero } from "../../components/Layout/Main/MainLayoutHero";
import dog_golden from "../../assets/images/pet_golden.png";
import dog_walk from "../../assets/images/dog.svg";
import pet_sitting from "../../assets/images/cat.svg";
import house_care from "../../assets/images/home.svg";
import pad from "../../assets/images/pad.svg";
import { Carousel } from "../../components/Carousel/Carrousel";
import reserve from "../../assets/images/reserve.svg";
import relax from "../../assets/images/relax.svg";
import match from "../../assets/images/match.svg";
import dog_footer from "../../assets/images/dog.png";

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
        <section className="reviewservice-section">
          <h1 className="font-comfortaa text-48 font-bold text-coral_red flex max-w-4xl text-center">
            Here's what pet owners have to say about Fetch! Pet Care...
          </h1>
          <Carousel />
        </section>

        <section className="reserve-section">
          <div className="border-r-8 border-dashed border-transparent border-r-coral_red rounded-r-full absolute w-[400px] h-[450px] left-[15rem] top-[3rem]"></div>
          <div className="grid grid-cols-2 grid-rows-1 items-center w-full justify-items-end z-10">
            <div className="grid grid-rows-1 gap-40">
              <div className="card-service">
                <img src={reserve} alt="reserve_calendar" />
                <p className="text-card-service">Reserve</p>
              </div>
              <div className="card-service">
                <img src={relax} alt="dog_relax" />
                <p className="text-card-service">Relax</p>
              </div>
            </div>
            <div className="card-service">
              <img src={match} alt="match" />
              <p className="text-card-service">Match</p>
            </div>
          </div>
          <div className="flex">
            <div className="grid grid-rows-3 items-center">
              <h3 className="text-coral_red text-32 font-bold  opacity-100">
                How it Works
              </h3>
              <p className="text-gray_neutral opacity-80 text-18 font-light w-input_width">
                Because finding a good pet sitter shouldn’t be a hassle. With
                Fetch! It’s as easy as…
              </p>
              <span className="text-18 text-coral_red  font-semibold opacity-100">
                Enter Your Location and Fetch Our Services
              </span>
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
          </div>
        </section>
        {/* <div
          className="absolute bg-gradient-to-r from-[#FFE530] to-[#FFCC55] 
                w-[840px] h-[1310px] right-0 -bottom-96 
                rounded-l-full 
                md:w-[450px] md:h-[880px] 
                lg:w-[500px] lg:h-[1000px] 
                xl:w-[580px] xl:h-[1100px]  2xl:w-[800px] 2xl:h-[1200px] 2xl:-bottom-[500px]"
        ></div> */}
        <section className="suscription-section">
          <div className="flex justify-center overflow-hidden items-center py-2">
            <img
              src={dog_footer}
              alt="dog"
              className="object-cover z-10 h-[90%]"
            />
            <div className="bg-yellow_vivid w-[400px] h-[400px] rounded-full overflow-hidden absolute"></div>
          </div>

          <div className="flex flex-col justify-start items-start py-8 gap-8">
            <h3 className="text-yellow_vivid font-comfortaa font-extrabold text-48 p-2">
              Make Fetch! Happen
            </h3>
            <p className="text-smokeWhite opacity-80 text-2xl font-light p-2">
              If you love pets and want exciting work, apply to be a Fetch! Pet
              Care Provider! We train every team member and provide ongoing
              support to help you get the most from your experience.
            </p>
            <button className="rounded-btnradius w-[150px] h-[60px] bg-smokeWhite text-Coral_flame text-20 font-openSans font-bold">
              Join Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
