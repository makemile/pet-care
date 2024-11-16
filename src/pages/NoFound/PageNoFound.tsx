import logo_pet from "../../assets/images/logo_pet.svg";

export const NoFoundPage = () => {
  return (
    <>
      <div className="bg-coral_red w-[38%] h-[59%] custom-border-radius">
        <header className="flex p-10">
          <div className="bg-white w-20 h-20 rounded-full flex p-2">
            <img src={logo_pet} />
          </div>
        </header>
        <div className="flex items-start p-11 flex-col gap-2">
          <h5 className="text-white text-18 font-openSans">¿Lost your way?</h5>
          <p className="text-white text-18 font-openSans">
            Sorry we can’t find that page. You'll find plenty to explore on the
            home page!!!
          </p>
        </div>
        <div className="flex justify-center">
          <button className="w-60 h-14 bg-brightBlue font-semibold text-white flex justify-center text-18 items-center rounded-full">
            Next to Home
          </button>
        </div>
      </div>
    </>
  );
};
