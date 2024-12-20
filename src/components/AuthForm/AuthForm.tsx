import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginForm, loginSchema } from "../validateForm/LoginForm";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../Input";
import { NavLink, useNavigate } from "react-router-dom";
import { Loading } from "../Loading/loading";

export const AuthForm: React.FC = () => {
  const { login, isAuthenticated, loading, error } = useAuth();
  console.log(loading);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginForm) => {
    login(data.email, data.password);
    console.log("Estado de loading:", data.email, data.password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  console.log("Estado de loading:", loading);

  return (
    <>
      {error && (
        <p className="text-red-500 flex justify-center font-semibold font-openSans">
          {error}
        </p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-rows-3 gap-3.5"
      >
        <div>
          <Input
            autocomplete="on"
            type="text"
            placeholder="Inserte email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm p-2 font-semibold font-openSans">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <Input
            autocomplete="on"
            type="password"
            placeholder="inserte su contraseña"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-sm p-2 font-semibold font-openSans">
              {errors.password.message}
            </span>
          )}
        </div>

        <span className="text-forget-password flex justify-end items-center">
          ¿Olvidaste tú contraseña
        </span>

        <div className="flex justify-center">
          {loading ? (
            <button type="submit" className="btn text-btn-login flex justify-center items-center">
              <Loading />
              Processing...
            </button>
          ) : (
            <button
              type="submit"
              className={`btn text-btn-login ${
                !isDirty || !isValid ? "opacity-50" : ""
              } `}
              disabled={!isDirty || !isValid}
            >
              Iniciar sesión
            </button>
          )}
        </div>
        <p className="text-lightGray font-openSans font-regular text-14 flex justify-center mt-4 gap-1">
          AÚN NO TENGO CUENTA{" "}
          <NavLink
            to={"/"}
            className="text-navyBlue font-openSans font-regular text-14"
          >
            REGISTRARSE
          </NavLink>
        </p>
      </form>
    </>
  );
};
