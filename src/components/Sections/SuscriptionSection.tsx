import dog_footer from "../../assets/images/dog.png";

export const SuscriptionSection = () => {
  return (
    <>
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
          <button className="rounded-btnradius w-[150px] h-[60px] bg-smokeWhite text-Coral_flame text-20 font-openSans font-bold shadow-card_service">
            Join Now
          </button>
        </div>
      </section>
    </>
  );
};
