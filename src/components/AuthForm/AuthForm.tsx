import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginForm, loginSchema } from "../validateForm/LoginForm";
import { useAuth } from "../../hooks/useAuth";
import { Input } from "../Input";

export const AuthForm: React.FC = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginForm) => {
    login(data.email, data.password);
  };

  return (
   
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-rows-3 gap-3.5"
    >
      <div>
      <Input
        // label="email"
        autocomplete="on"
        type="text"
        placeholder="Inserte email"
        {...register("email")}
      />
       {errors.email && (
        <span className="text-red-500 text-sm p-1">{errors.email.message}</span>
      )}
      </div>
     <div>
     <Input
        // label="password"
        autocomplete="on"
        type="password"
        placeholder="inserte su contraseña"
        {...register("password")}
      />
      {errors.password && (
        <span className="text-red-500 text-sm p-1">{errors.password.message}</span>
      )}
     </div>

      <span className="text-forget-password flex justify-end items-center">
        ¿Olvidaste tú contraseña
      </span>

      <div className="flex justify-center">
        <button type="submit" className={`btn text-btn-login ${!isDirty || !isValid ? 'opacity-50' : ''} `} disabled={!isDirty || !isValid}>
        INICIAR SESIÓN
        </button>
      </div>
    </form>
   
  );
};
