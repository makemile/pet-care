import { ArrowRightIcon } from "@heroicons/react/16/solid";
import reserve from "../../assets/svg/reserve.svg";
import relax from "../../assets/svg/relax.svg";
import match from "../../assets/svg/match.svg";

export const ReserveSection = () => {
  return (
    <>
      <section className="reserve-section">
        <div className="border-r-8 border-dashed border-transparent border-r-coral_red rounded-r-full absolute w-[470px] h-[568px] left-[2rem] top-[3rem]"></div>
        <div className="grid grid-cols-2 grid-rows-1 items-center w-full justify-items-start z-10">
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
              <button className="w-14 h-14 opacity-100 ml-[-3.9rem] mt-[0.3rem] shadow-btn_zipcode bg-coral_red rounded-full flex items-center justify-center">
                <ArrowRightIcon className={"h-10 w-10 text-white"} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
