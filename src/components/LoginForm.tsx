"use client";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputComponent from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { Spinner } from "./Spinner";

const schema = yup
  .object({
    email: yup
      .string()
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[a-z]{2,4}$/,
        "Некорректный адрес электронной почты"
      )
      .required(),
    password: yup
      .string()
      .transform((value, originalValue) => {
        value = originalValue
          .split("")
          .filter((x: string) => x !== " ")
          .join("");
        return value;
      })
      .min(8, "Пароль должен содержать минимум 8 символов")
      .matches(/[A-Z, А-Я]/, "Пароль должен содержать 1 заглавную букву")
      .required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: "onChange" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/");
    }, 2000);
  };

  const isButtonDisabled = () => {
    return !isValid || loading;
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6 max-w-md m-auto relative"
      >
        {loading && <Spinner />}
        <div className="-space-y-px">
          <InputComponent
            type="email"
            name={"email"}
            placeholder={"wqewqe@aaewe"}
            error={errors.email?.message}
            label={"Электронная почта"}
            customClass={""}
            register={register}
            disabled={loading}
          />
          <InputComponent
            type="password"
            name={"password"}
            placeholder={"wqeEawesq"}
            error={errors.password?.message}
            label={"Пароль"}
            customClass={""}
            register={register}
            disabled={loading}
          />
        </div>
        <button
          disabled={isButtonDisabled()}
          type="submit"
          className={`${
            isButtonDisabled() ? "opacity-50 cursor-not-allowed" : ""
          }
        group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
        `}
        >
          Авторизация
        </button>
      </form>
    </>
  );
};

export default LoginForm;
