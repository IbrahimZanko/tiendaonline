import BannerDiscount from "@/components/ui/banner-discount";
import BannerProduct from "@/components/ui/banner-product";
import { Button } from "@/components/ui/button";
import CarouselTextBanner from "@/components/ui/carousel-text-banner";
import ChooseCategory from "@/components/ui/choose-category";
// import FeaturedProducts from "@/components/ui/featured-products";
import FeaturedProducts from "@/components/ui/featured-products";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />  
      
    </main>
  );
}