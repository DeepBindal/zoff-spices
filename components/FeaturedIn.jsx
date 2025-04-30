export default function FeaturedIn() {
    const images = [
      "//zofffoods.com/cdn/shop/files/image_19_x400.jpg?v=1736010610",
      "//zofffoods.com/cdn/shop/files/image_20_x400.jpg?v=1736010626",
      "//zofffoods.com/cdn/shop/files/image_21_x400.jpg?v=1736010643",
      "//zofffoods.com/cdn/shop/files/image_23_x400.jpg?v=1736010660",
      "//zofffoods.com/cdn/shop/files/image_24_x400.jpg?v=1736010678",
      "//zofffoods.com/cdn/shop/files/image_22_x400.jpg?v=1736010695",
    ];
  
    return (
      <section className="py-12 bg-white text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#e24504] tracking-wide">FEATURED IN</h2>
        </div>
  
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-4">
          {images.map((src, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <a href="/collections/">
                <img
                  src={src}
                  alt={`category-${idx + 1}`}
                  className="w-full max-w-[120px] h-auto object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  