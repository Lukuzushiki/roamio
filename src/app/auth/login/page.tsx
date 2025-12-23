"use client";
import { useEffect, useState } from "react";
import LoginForm from "./component/LoginForm/LoginForm";
import { useAuthUser } from "@/src/services/useAuthUser";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    mutateAuthUser,
    isIdleAuthUser,
    isSuccessAuthUser,
    isErrorAuthUser,
    errorAuthUser,
  } = useAuthUser({ email, password });

  const onSubmit = () => {
    mutateAuthUser();
  };

  useEffect(() => {
    if (isSuccessAuthUser) {
      router.push("/");
    }
  }, [isSuccessAuthUser]);

  return (
    <div className="flex justify-center items-center bg-[#F8F8F8]">
      <LoginForm
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onSubmit={onSubmit}
        isErrorAuthUser={isErrorAuthUser}
        isIdleAuthUser={isIdleAuthUser}
        errorMessage={
          errorAuthUser
            ? (errorAuthUser as Error).response.data.message
            : undefined
        }
      />
    </div>
  );
};

export default LoginPage;
