import productsData from '../data/products.json';

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
  gallery: string[];
  description: string;
  shortDescription: string;
  benefits: string[];
  shortBenefits: string[];
  ingredients: string;
  howToUse: string;
  size: string;
}

export const products: Product[] = productsData.products;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}

export default products;