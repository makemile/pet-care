import { AuthForm } from "../../components/AuthForm/AuthForm";
import logo_pet from "../../assets/images/logo_pet.svg";
export const Login = () => {
  return (
    <div className="grid grid-cols-2 bg-white justify-items-center items-center w-full h-full">
      <section className="bg-coral_red w-full h-full flex justify-center items-center">
        {/* <div className="wave"></div> */}

        <div className="bg-white w-80 h-80 rounded-full flex justify-center items-center">
          <img src={logo_pet} className="w-52 h-60" />
        </div>
      </section>
      <section className="grid grid-rows-1 h-auto gap-8">
        <h3 className="flex items-center gap-4 text-welcomeLogin">
          <div className="border-left items-center" />
          Bienvenido
        </h3>
        <AuthForm />
      </section>
    </div>
  );
};
