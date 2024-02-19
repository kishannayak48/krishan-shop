import React from "react";
import HeroAds from "./heroAds";
import HEAD_TITLES from "@/utils/constants/titleConstants";
import TrendingProduct from "./trendingProduct";
import CallAction from "./callAction";
import BannerArea from "./bannerArea";
import HeadPage from "../layout/HeadPage";
import ShoppingInfo from "./shoppingInfo";
import DemoWork from "../demoWork";

function LendingPage() {
  return (
    <>
      <HeadPage title={HEAD_TITLES.home}>
        <main>
          <HeroAds />
          <TrendingProduct />

          <CallAction />
          <BannerArea />
          <ShoppingInfo />
        </main>
      </HeadPage>
    </>
  );
}

export default LendingPage;
