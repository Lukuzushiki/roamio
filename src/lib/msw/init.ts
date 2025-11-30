import { worker } from "./browser";

export async function initMsw() {
  if (typeof window !== "undefined") {
    await worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}
