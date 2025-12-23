import { useMutation } from "@tanstack/react-query";
import { request } from "./request";

interface AuthUserPayload {
  email: string;
  password: string;
}

export function useAuthUser({ email, password }: AuthUserPayload) {
  const {
    mutate: mutateAuthUser,
    isSuccess: isSuccessAuthUser,
    isError: isErrorAuthUser,
    isIdle: isIdleAuthUser,
    error: errorAuthUser,
  } = useMutation({
    mutationKey: ["authUser"],
    mutationFn: async () => {
      const response = await request.post("/auth/login", { email, password });

      return response;
    },
  });

  return {
    mutateAuthUser,
    isSuccessAuthUser,
    isErrorAuthUser,
    isIdleAuthUser,
    errorAuthUser,
  };
}
