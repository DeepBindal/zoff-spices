import Categories from "@/components/Categories";
import FeaturedIn from "@/components/FeaturedIn";
import ReelsCarousel from "@/components/ReelsCarousel";
import USPSection from "@/components/USPSection";
import VideoThumbnail from "@/components/VideoThumbnail";
import { seedProducts } from "@/lib/actions/product.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  return (
    <div className="min-h-screen">
      {/* Desktop Hero Image */}
      <div className="hidden sm:block">
        <Image
          src="https://zofffoods.com/cdn/shop/files/Layer_1_11.jpg?v=1736013736&width=1500"
          alt="hero-desktop"
          width={1500}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="block sm:hidden">
        <Image
          src="https://zofffoods.com/cdn/shop/files/iPhone_13_14_-_3_2.jpg?v=1736701699&width=3840"
          alt="hero-mobile"
          width={600}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <div className="overflow-hidden bg-[#e24504] py-4">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-white text-3xl sm:text-4xl font-bold">
          {Array(6)
            .fill("Zone of Fresh Food")
            .map((text, idx) => (
              <div key={idx} className="flex items-center gap-6">
                {text}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 60 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.8549 14.278C59.0558 6.43106 52.4169 0.308594 44.3447 0.308594C37.8748 0.308594 32.3277 4.24167 29.9676 9.84191C27.6074 4.24167 22.0604 0.308594 15.591 0.308594C7.51825 0.308594 0.878655 6.43106 0.0803072 14.278C0.026971 14.8008 0 15.332 0 15.8693C0 34.7755 23.2476 43.6989 29.9676 56.3086C36.6876 43.6995 59.9351 34.7761 59.9351 15.8693C59.9351 15.332 59.9082 14.8008 59.8549 14.278Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            ))}
        </div>
      </div>
      <USPSection />
      <Categories />
      <VideoThumbnail
        imageLink="https://zofffoods.com/cdn/shop/files/Frame_1171276546.jpg?v=1736010463&width=1500"
        videoLink="https://www.youtube.com/embed/74j8GoLa5Bo?autoplay=1&enablejsapi=1"
      />
      <ReelsCarousel />
      <div className="hidden my-8 sm:block">
        <Image
          src="https://zofffoods.com/cdn/shop/files/Frame_1171276545.jpg?v=1735988622"
          alt="hero-desktop"
          width={1500}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="block my-8 sm:hidden">
        <Image
          src="https://zofffoods.com/cdn/shop/files/Frame_1171276616_2.jpg?v=1736703584"
          alt="hero-mobile"
          width={600}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <VideoThumbnail
        imageLink="https://zofffoods.com/cdn/shop/files/Frame_113.jpg?v=1736675108&width=3840"
        videoLink="https://www.youtube.com/embed/NseeSNbZPY0?enablejsapi=1&autoplay=1"
      />
      <FeaturedIn />
      <div className="hidden sm:flex sm:items-center sm:justify-center">
        <Image
          src="https://zofffoods.com/cdn/shop/files/Frame_1171276552.jpg?v=1735988643"
          alt="hero-desktop"
          width={800}
          height={800}
          className=" object-cover"
          priority
        />
      </div>

      {/* Mobile Hero Image */}
      <div className="block sm:hidden my-8 mx-4">
        <Image
          src="https://zofffoods.com/cdn/shop/files/Frame_1171276617.jpg?v=1736961166"
          alt="hero-mobile"
          width={600}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
