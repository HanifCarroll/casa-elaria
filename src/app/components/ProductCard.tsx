"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";

export interface ProductCardProps {
  slug: string;
  name: string;
  image: string;
  imagePosition?: string;
  price?: string;
  description?: string;
  benefits?: string[];
}

export default function ProductCard({
  slug,
  name,
  image,
  imagePosition = "center center",
  price,
  description,
  benefits,
}: ProductCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/productos/${slug}`);
  };

  const handleViewMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    router.push(`/productos/${slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-lg overflow-hidden border border-olive-primary/10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-full flex flex-col"
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
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="after:content-[''] after:block after:w-12 after:h-[1px] after:bg-gold after:mt-4 after:mb-4">
          <h3 className="font-serif text-2xl font-light text-olive-dark mb-2 tracking-wide">{name}</h3>
          {price ? (
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-light text-olive-dark tracking-wide">{price}</span>
            </div>
          ) : null}
        </div>

        {description ? (
          <p className="text-olive-primary/70 text-sm mb-6 leading-relaxed tracking-wide font-light">{description}</p>
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
          onClick={handleViewMore}
          className="w-full bg-olive-dark text-white py-4 px-6 rounded-md hover:bg-olive-primary transition-all duration-300 font-light text-sm uppercase tracking-[0.2em] cursor-pointer mt-auto group-hover:shadow-lg"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}
