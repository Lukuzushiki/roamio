import { useMutation } from "@tanstack/react-query";
import { request } from "./request";

interface AuthRegisterPayload {
  name: string;
  email: string;
  password: string;
}

export function useAuthRegisterUser({
  name,
  email,
  password,
}: AuthRegisterPayload) {
  const {
    mutate: mutateAuthRegister,
    isSuccess: isSuccessAuthRegister,
    isError: isErrorAuthRegister,
    isIdle: isIdleAuthRegister,
    error: errorAuthRegister,
  } = useMutation({
    mutationKey: ["AuthRegister"],
    mutationFn: async () => {
      const response = await request.post("/auth/register", {
        name,
        email,
        password,
      });

      return response;
    },
  });

  return {
    mutateAuthRegister,
    isSuccessAuthRegister,
    isErrorAuthRegister,
    isIdleAuthRegister,
    errorAuthRegister,
  };
}
