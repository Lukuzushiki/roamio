"use client";
import { useEffect, useState } from "react";
import RegisterForm from "./component/RegisterForm/RegisterForm";
import { useAuthRegisterUser } from "@/src/services/useRegisterUser";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    mutateAuthRegister,
    isSuccessAuthRegister,
    errorAuthRegister,
    isErrorAuthRegister,
  } = useAuthRegisterUser({ name, email, password });

  const onSubmit = () => {
    mutateAuthRegister();
  };

  useEffect(() => {
    if (isSuccessAuthRegister) {
      router.push("/auth/login");
    }
  }, [isSuccessAuthRegister]);
  return (
    <div className="flex justify-center items-center bg-[#F8F8F8]">
      <RegisterForm
        onChangeName={setName}
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default RegisterPage;
