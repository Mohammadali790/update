export interface Product {
  _id: string; // Unique ID for the product
  _type: "product"; // Type of the document
  name: string; // Product name
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  }; // Optional image field
  price: number; // Price of the product
  description?: string; // Optional description
  discountPercentage?: number; // Optional discount percentage
  isFeaturedProduct?: boolean; // Whether the product is featured
  stockLevel?: number; // Stock availability
  category?: string; // Category of the product
}
