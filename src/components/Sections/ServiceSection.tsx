import pet_sitting from "../../assets/svg/cat.svg";
import house_care from "../../assets/svg/home.svg";
import pad from "../../assets/svg/pad.svg";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export const ServiceSection = () => {
  return (
    <>
      <section className="service-section">
        <div className="grid grid-rows-1 gap-5">
          <div className="flex flex-col gap-8">
            <h3 className="text-coral_red text-48 font-extrabold font-comfortaa opacity-100">
              Our Services
            </h3>
            <p className="text-gray_neutral opacity-80 text-24 font-regular font-openSans w-[60%]">
              National Brand With a Local Feel. Experience the Fetch! Difference
            </p>
            <p className="text-24 text-coral_red font-comfortaa font-extrabold opacity-100">
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
            <button className="w-14 h-14 flex items-center justify-center opacity-100 ml-[-3.9rem] mt-[0.3rem] shadow-btn_zipcode bg-coral_red rounded-full">
              <ArrowRightIcon className={"h-10 w-10 text-white"} />
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-8 w-full justify-end">
          <div className="card-service">
            <p className="text-card-service">Dog Walking</p>
          </div>

          <div className="card-service">
            {" "}
            <img src={house_care} />
            <p className="text-card-service">Overnight Care</p>
          </div>
          <div className="card-service">
            <img src={pet_sitting} />
            <p className="text-card-service">Pet Sitting</p>
          </div>
          <div className="card-service">
            <img src={pad} />
            <p className="text-card-service">Other Services</p>
          </div>
        </div>
      </section>
    </>
  );
};
