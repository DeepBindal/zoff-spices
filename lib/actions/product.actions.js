import { connectToDatabase } from "../db";
import Product from "../db/models/product.model";
import { handleError } from "../utils";

export const dryFruits = [
  {
    title: "Premium Almonds",
    description:
      "High-quality California almonds, perfect for snacking and cooking.",
    variants: [
      { weight: 250, price: 600 },
      { weight: 500, price: 1200 },
      { weight: 1000, price: 2300 },
    ],
    origin: "USA",
    spiceLevel: "Mild",
    ingredients: ["Almonds"],
    category: "Dry Fruits",
    images: [
      "https://zofffoods.com/cdn/shop/files/Almonds_0c309fe2-a304-4866-b5f9-d8e5ea610df8.jpg?v=1736595955&width=324",
    ],
    inStock: true,
  },
  {
    title: "Cashew Nuts",
    description:
      "Whole cashew nuts, rich and buttery in flavor, ideal for cooking and snacks.",
    variants: [
      { weight: 250, price: 800 },
      { weight: 500, price: 1500 },
      { weight: 1000, price: 2800 },
    ],
    origin: "Vietnam",
    spiceLevel: "Mild",
    ingredients: ["Cashew Nuts"],
    category: "Dry Fruits",
    images: [
      "https://zofffoods.com/cdn/shop/files/Cashews.jpg?v=1736595966&width=324",
    ],
    inStock: true,
  },
  {
    title: "Afghan Raisins",
    description:
      "Naturally sun-dried Afghan raisins, sweet and packed with nutrients.",
    variants: [
      { weight: 250, price: 450 },
      { weight: 500, price: 850 },
      { weight: 1000, price: 1500 },
    ],
    origin: "Afghanistan",
    spiceLevel: "Mild",
    ingredients: ["Raisins"],
    category: "Dry Fruits",
    images: [
      "https://zofffoods.com/cdn/shop/files/Raisinis.jpg?v=1736595984&width=324",
    ],
    inStock: true,
  },
];

export const spices = [
  {
    title: "Turmeric Powder",
    description:
      "Premium organic turmeric powder, rich in curcumin for health benefits.",
    variants: [
      { weight: 100, price: 25 },
      { weight: 250, price: 55 },
      { weight: 500, price: 95 },
    ],
    origin: "India",
    spiceLevel: "Mild",
    ingredients: ["Turmeric"],
    category: "Powdered Spices",
    images: [
      'https://zofffoods.com/cdn/shop/files/Turmeric_63ec7553-f72f-4210-b5a3-bcebb71d9dab.jpg?v=1736593546&width=324'
    ],
    inStock: true,
  },
  {
    title: "Red Chilli Powder",
    description:
      "Fiery red chilli powder made from handpicked chillies, perfect for heat lovers.",
    variants: [
      { weight: 100, price: 30 },
      { weight: 250, price: 65 },
      { weight: 500, price: 110 },
    ],
    origin: "India",
    spiceLevel: "Hot",
    ingredients: ["Dried Red Chillies"],
    category: "Powdered Spices",
    images: [
      'https://zofffoods.com/cdn/shop/files/Red_Chilly_Powder.jpg?v=1736709317&width=324'
    ],
    inStock: true,
  },
  {
    title: "Corainder Powder",
    description:
      "Coriander powder with a strong aromatic flavor, perfect for Indian cuisine.",
    variants: [
      { weight: 100, price: 20 },
      { weight: 250, price: 40 },
      { weight: 500, price: 75 },
    ],
    origin: "Iran",
    spiceLevel: "Mild",
    ingredients: ["Cumin Seeds"],
    category: "Powdered Spices",
    images: [
      'https://zofffoods.com/cdn/shop/files/Coriander_Powder.jpg?v=1736709271&width=324'
    ],
    inStock: true,
  },
  {
    title: "Pizza Chili Flakes",
    description:
      "Chili flakes with a strong aromatic flavor, perfect for Any cuisine.",
    variants: [
      { weight: 150, price: 90 },
    ],
    origin: "Indian",
    spiceLevel: "Mild",
    ingredients: ["Chili"],
    category: "Seasonings",
    images: [
      'https://zofffoods.com/cdn/shop/files/7_385e7c95-cd9c-48c5-a68a-3bdbeaf616c1.png?v=1738692407&width=324'
    ],
    inStock: true,
  },
];

const products = [...spices, ...dryFruits];

export const seedProducts = async () => {
  try {
    await connectToDatabase();
    await Promise.all(
      products.map(async (product) => {
        await Product.create(product);
      })
    );

    console.log("✅ Products seeded successfully.");
    return "Seeded Database";
  } catch (error) {
    handleError(error);
  }
};

export const getAllProducts = async () => {
    try {
        await connectToDatabase();
        const products = await Product.find({});

        return {data: JSON.parse(JSON.stringify(products))};
    } catch (error) {
        handleError(error);
    }
}

export const getProductById = async (id) => {   
    try {
        await connectToDatabase();
        const product = await Product.findById(id);

        return JSON.parse(JSON.stringify(product));
    } catch (error) {
        handleError(error);
    }
}

export const getProductByCategroy = async (category) => {   
  try {
      await connectToDatabase();
      const products = await Product.find({ category }).limit(4);

      return { data: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
      handleError(error);
  }
};
