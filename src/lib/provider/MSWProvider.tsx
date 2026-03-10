"use client";

import { useEffect, useState } from "react";

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [isMockingEnabled, setIsMockingEnabled] = useState(false);

  useEffect(() => {
    async function enableMocks() {
      // if (process.env.NODE_ENV === "development") {
      const { initMsw } = await import("@/src/lib/msw/init");
      await initMsw();
      // }
      setIsMockingEnabled(true);
    }

    enableMocks();
  }, []);

  if (!isMockingEnabled) {
    return null;
  }

  return <>{children}</>;
}
