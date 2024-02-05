import {
  Banner,
  BrandGrid,
  Category,
  UniverseGrid,
  WeekSales,
} from "@/components";
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
    <div className="flex flex-col items-center w-full gap-10 ">
      {!isMobile && <Banner />}
      <WeekSales />
      <UniverseGrid />
      <BrandGrid />
      <Category />
    </div>
  );
};
