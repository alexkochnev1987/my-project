import Heading from "@/components/Heading";
import LoginForm from "@/components/LoginForm";
import { FC } from "react";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <div className="w-full">
      <Heading heading="Авторизация" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
