import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/Lotties/load.json";

function LoadingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center bg-slate-50">
          <Lottie options={defaultOptions} height={150} width={150} />
          <h1 className=" text-orange-300 font-semibold font-serif">ChatApp</h1>
    </div>
  );
}

export default LoadingPage;
