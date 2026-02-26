"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image_url: string;
  product_url: string;
  price: string;
  price_formatted: string;
  checkout_url: string;
  type: "simple" | "variable";
}

interface ProductFeed {
  ref: string;
  generated_at: string;
  currency: string;
  products: Product[];
}

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4 ml-1 inline"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

function formatPrice(price: string): string {
  const num = parseFloat(price);
  if (isNaN(num) || num <= 0) return "";
  return num.toFixed(2);
}

function ProductCard({ product }: { product: Product }) {
  const isVariable = product.type === "variable";
  const rawUrl = isVariable ? product.product_url : product.checkout_url;
  const linkUrl = isSafeUrl(rawUrl) ? rawUrl : null;
  const displayPrice = formatPrice(product.price);

  return (
    <div className="group bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm overflow-hidden transition-all duration-200">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-200">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
            </svg>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-3">
          {displayPrice ? (
            <span className="text-base font-semibold text-gray-900">
              CHF {displayPrice}
            </span>
          ) : (
            <span className="text-sm text-gray-500">
              Price on request
            </span>
          )}
        </div>

        {/* Buy Button */}
        {linkUrl ? (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-3 py-2.5 bg-[#2a9d8f] hover:bg-[#238578] text-white text-sm font-medium rounded-md transition-colors"
          >
            {isVariable ? "View Options" : "Buy Now"}
            <ExternalLinkIcon />
          </a>
        ) : (
          <span className="block w-full text-center px-3 py-2.5 bg-gray-50 text-gray-400 text-sm font-medium rounded-md cursor-not-allowed border border-gray-100">
            Unavailable
          </span>
        )}
      </div>
    </div>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden">
      <div className="aspect-square bg-gray-50 animate-pulse" />
      <div className="p-3 sm:p-4">
        <div className="h-4 bg-gray-100 rounded mb-1.5 w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-100 rounded mb-3 w-1/2 animate-pulse" />
        <div className="h-5 bg-gray-100 rounded mb-3 w-1/3 animate-pulse" />
        <div className="h-[38px] bg-gray-100 rounded-md animate-pulse" />
      </div>
    </div>
  );
}

export default function ShopProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://staging.dezentralshop.ch/embed/BAS.json/");
        if (!response.ok) {
          throw new Error(`Failed to load products (${response.status})`);
        }
        const data: ProductFeed = await response.json();
        if (!Array.isArray(data?.products)) {
          throw new Error("Unexpected response format");
        }
        setProducts(data.products);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <svg className="w-10 h-10 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <p className="text-gray-500 text-sm mb-4">Unable to load products at this time.</p>
        <a
          href="https://dezentralshop.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 bg-[#2a9d8f] hover:bg-[#238578] text-white text-sm font-medium rounded-md transition-colors"
        >
          Visit dezentralshop.ch
          <ExternalLinkIcon />
        </a>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <svg className="w-10 h-10 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <p className="text-gray-500 text-sm">No products available at the moment. Check back soon!</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Attribution */}
      <p className="text-center text-xs text-gray-400 mt-8">
        Products and fulfillment by{" "}
        <a
          href="https://dezentralshop.ch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#2a9d8f] transition-colors"
        >
          dezentralshop.ch
        </a>
      </p>
    </>
  );
}
