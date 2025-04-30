export default function USPSection() {
    const uspItems = [
      {
        img: "//zofffoods.com/cdn/shop/files/Frame_22_5554f962-42ac-41e0-89b9-2a0241ba9c18_x162.jpg?v=1735988603",
        title: "100% Satisfaction",
        subtitle: "Try it to love it!",
      },
      {
        img: "//zofffoods.com/cdn/shop/files/Frame_23_x162.jpg?v=1735988564",
        title: "100% Genuine Products",
        subtitle: "Guaranteed quality",
      },
      {
        img: "//zofffoods.com/cdn/shop/files/Frame_22_1_x162.jpg?v=1735988564",
        title: "Membership Discounts",
        subtitle: 'Join “ZING” and get 40% off',
      },
      {
        img: "//zofffoods.com/cdn/shop/files/Frame_23_1_x162.jpg?v=1735988564",
        title: "Free Shipping",
        subtitle: "On orders above Rs 249/-",
      },
    ];
  
    return (
      <section className="mt-8 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {uspItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={item.title}
                width={162}
                height={153}
                loading="lazy"
                className="mb-4"
              />
              <div className="usp_text">
                <h4 className="text-lg font-semibold text-[#e24504]">
                  {item.title}
                </h4>
                <h6 className="text-sm text-gray-700">{item.subtitle}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  