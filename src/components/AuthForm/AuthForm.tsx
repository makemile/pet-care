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
    formState: { errors },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginForm) => {
    login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        autocomplete="on"
        type="text"
        placeholder="Inserte email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        autocomplete="on"
        type="password"
        placeholder="inserte su contraseña"
        {...register("password")}
        error={errors.password?.message}
      />
      <button type="submit">Login</button>
    </form>
  );
};
