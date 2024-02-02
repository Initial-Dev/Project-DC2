import { Banner } from "@/components/Banner";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i,
      ),
    );
    setIsMobile(mobile);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {!isMobile && <Banner />}
    </div>
  );
};
