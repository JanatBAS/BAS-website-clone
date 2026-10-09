import Image from "next/image";
import type { ShopProduct } from "@/lib/shop";
import { safeHttpUrl } from "@/lib/safe-url";
import { ExternalLinkIcon } from "@/components/icons";

function formatPrice(price: string): string {
  const num = parseFloat(price);
  if (isNaN(num) || num <= 0) return "";
  return num.toFixed(2);
}

function ProductCard({ product }: { product: ShopProduct }) {
  const isVariable = product.type === "variable";
  const rawUrl = isVariable ? product.product_url : product.checkout_url;
  const linkUrl = safeHttpUrl(rawUrl);
  const displayPrice = formatPrice(product.price);

  return (
    <div className="group flex flex-col bg-white rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm overflow-hidden transition-all duration-200">
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
      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1 min-h-[2.5rem]">
          {product.name}
        </h3>
        {product.short_description && (
          <p className="text-xs text-gray-500 mb-2 flex-1">
            {product.short_description}
          </p>
        )}

        {/* Price */}
        <div className="mb-3 mt-auto">
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
            className="block w-full text-center px-3 py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white text-sm font-medium rounded-md transition-colors"
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

/** Product grid, or a link to the shop when the product feed could not be loaded (`null`). */
export default function ShopProducts({ products }: { products: ShopProduct[] | null }) {
  if (!products) {
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
          className="inline-flex items-center px-5 py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white text-sm font-medium rounded-md transition-colors"
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
          className="text-gray-500 hover:text-brand-teal transition-colors"
        >
          dezentralshop.ch
        </a>
      </p>
    </>
  );
}
