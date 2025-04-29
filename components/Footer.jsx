import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#9B2D0E] text-white pt-10 relative">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo & Subscription */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ZOFF</h2>
          <p className="mb-4">We deliver spices at their best form in flavour and nutrients!</p>
          <form className="flex rounded-full overflow-hidden border-2 border-white bg-white">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-3 py-2 text-black outline-none"
            />
            <button className="bg-red-600 px-4 text-white font-semibold">
              Subscribe
            </button>
          </form>
          <address className="mt-4 not-italic leading-relaxed text-gray-100">
            Asquare Food & Beverages Pvt Ltd<br />
            Urla Industrial Area, Ring Rd Number 2,<br />
            Gondwara, Raipur, Chhattisgarh 493221.
          </address>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Shop Now</h3>
          <ul className="space-y-1 text-gray-200">
            <li>Veg Spices</li>
            <li>Non-Veg Spices</li>
            <li>Pure Spices</li>
            <li>Whole Spices</li>
            <li>Dry Fruits</li>
            <li>Seasonings</li>
            <li>Immunity Booster</li>
            <li>Combo Packs</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Other</h3>
          <ul className="space-y-1 text-gray-200">
            <li>Quality Assurance</li>
            <li>Search</li>
            <li>News</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us On</h3>
          <div className="flex gap-4 mt-2 text-xl">
            <Facebook />
            <Instagram />
            <Youtube />
            <Twitter />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 py-4 text-sm px-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2">
        <p>© 2025, Zoff Foods Pvt. Ltd.</p>
        <div className="flex gap-4 text-gray-300 flex-wrap">
          <a href="#">Refund policy</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Contact information</a>
        </div>
      </div>

      {/* Marketplace Logos */}
      <div className="bg-[#8C2408] py-4 px-4 text-center text-white text-sm">
        <p className="mb-2">Also available on:</p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {/* Replace with actual brand icons or logos */}
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/flipkart.png?v=7983053720999907091745858915" alt="Flipkart" width={60} height={20} />
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/flipkart.png?v=7983053720999907091745858915" alt="Amazon" width={60} height={20} />
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/bigbasket.png?v=15864558822295353171745858892" alt="Bigbasket" width={60} height={20} />
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/cred.png?v=63221540353615228361745858912" alt="CRED" width={60} height={20} />
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/zepto.png?v=122578672725399468341745858974" alt="Zepto" width={60} height={20} />
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/blinkit.png?v=69149072494461108771745858893" alt="Blinkit" width={60} height={20} />
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/dmart.png?v=69149072494461108771745858893" alt="Dmart" width={60} height={20} />
          <Image src="https://zofffoods.com/cdn/shop/t/41/assets/reliancefresh.png?v=69149072494461108771745858893" alt="Reliance" width={60} height={20} />
          <span>& More</span>
        </div>
      </div>

      {/* Sticky Shipping Bar */}
      <div className="sticky bottom-0 w-full bg-gray-800 text-white text-center py-2 text-sm">
        Only <span className="text-yellow-400 font-semibold">₹99</span> away from free shipping
      </div>
    </footer>
  );
};

export default Footer;
