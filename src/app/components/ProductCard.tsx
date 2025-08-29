"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";

export interface ProductCardProps {
  slug: string;
  name: string;
  image: string;
  price?: string;
  description?: string;
  benefits?: string[];
  onAddToCart: (productName: string) => void;
}

export default function ProductCard({
  slug,
  name,
  image,
  price,
  description,
  benefits,
  onAddToCart,
}: ProductCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/productos/${slug}`);
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onAddToCart(name);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-xl overflow-hidden border border-olive-primary/10 shadow-sm hover:shadow-md transition-shadow duration-500 cursor-pointer h-full flex flex-col"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-xl font-bold text-olive-dark">{name}</h3>
          {price ? (
            <span className="text-lg font-medium text-olive-primary">{price}</span>
          ) : null}
        </div>

        {description ? (
          <p className="text-olive-primary/80 text-sm mb-4 leading-relaxed">{description}</p>
        ) : null}

        {benefits && benefits.length > 0 ? (
          <ul className="text-xs text-olive-primary/70 mb-6 space-y-1 flex-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 text-olive-light mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        ) : <div className="flex-1" />}

        <button
          onClick={handleAddToCart}
          className="w-full bg-olive-primary text-white py-3 px-4 rounded-md hover:bg-olive-dark transition-colors font-medium text-sm uppercase tracking-wider cursor-pointer mt-auto"
        >
          Agregar Al Carrito
        </button>
      </div>
    </div>
  );
}
