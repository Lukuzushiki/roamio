"use client";
import { SuccessChecklist } from "@/src/assets";
import Lottie from "lottie-react";
import { useEffect } from "react";

const Success = () => {
  const sendEmail = async () => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = res.json();

      if (!res.ok) {
        console.error("Failed to send email:", json);
      } else {
        console.log("Email sent successfully:", json);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  useEffect(() => {
    sendEmail();
  }, []);
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div>
        <Lottie animationData={SuccessChecklist} height={400} width={400} />
        <h6 className="mt-[16px] text-center text-dark-text text-h6">
          Success checkout your E-Sim
        </h6>
      </div>
    </div>
  );
};

export default Success;
