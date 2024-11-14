import { Navbar } from "../Navbar";
import logo_pet from "../../assets/images/logo_pet.svg";

export const Header = () => {
  return (
    <section className="section_header">
      <header className="header p-3">
        <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center">
          <img src={logo_pet} className="w-9 h-9" alt="logo_pet" />
        </div>
        <Navbar />
      </header>
    </section>
  );
};
