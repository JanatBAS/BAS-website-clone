"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface BitcoinData {
  price: number;
  change24h: number;
  marketCap: number;
  volume: number;
  sparkline: number[];
}

// Format large numbers (e.g., 1800000000000 -> "1.80 T")
function formatLargeNumber(num: number): string {
  if (num >= 1e12) {
    return `$${(num / 1e12).toFixed(2)} T`;
  } else if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(2)} B`;
  } else if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(2)} M`;
  }
  return `$${num.toLocaleString()}`;
}

// Format price with commas
function formatPrice(price: number): string {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Simple SVG sparkline component
function Sparkline({ data, color = "#f7931a" }: { data: number[]; color?: string }) {
  if (!data || data.length === 0) return null;

  const width = 280;
  const height = 60;
  const padding = 2;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
      const y = height - padding - ((value - min) / range) * (height - 2 * padding);
      return `${x},${y}`;
    })
    .join(" ");

  // Create area path for gradient fill
  const firstX = padding;
  const lastX = padding + ((data.length - 1) / (data.length - 1)) * (width - 2 * padding);
  const areaPath = `M ${firstX},${height} L ${points.split(" ").map((p) => p).join(" L ")} L ${lastX},${height} Z`;

  return (
    <svg width={width} height={height} className="w-full h-auto">
      <defs>
        <linearGradient id="sparklineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#sparklineGradient)" />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// CoinGecko-style Widget
function CoinGeckoWidget({ data }: { data: BitcoinData }) {
  const isPositive = data.change24h >= 0;

  return (
    <Card className="border-2 border-gray-200 rounded-xl shadow-sm max-w-sm mx-auto bg-white">
      <CardContent className="p-4">
        {/* Header with coin info */}
        <div className="flex items-center gap-3 mb-3">
          <Image
            src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
            alt="Bitcoin"
            width={30}
            height={30}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold text-gray-900">Bitcoin</div>
            <div className="text-xs text-gray-500">BTC/USD</div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">
            ${formatPrice(data.price)}
          </span>
          <span
            className={`ml-2 text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-500"
            }`}
          >
            {isPositive ? "" : ""}{Math.abs(data.change24h).toFixed(1)}%
          </span>
        </div>

        {/* Sparkline Chart */}
        <div className="mb-3">
          <Sparkline data={data.sparkline} color="#f7931a" />
        </div>

        {/* Powered by CoinGecko */}
        <div className="flex items-center justify-end gap-1 text-xs text-gray-500">
          <span>Powered by</span>
          <Link
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
              alt="CoinGecko"
              width={80}
              height={20}
              className="h-4 w-auto"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// CoinMarketCap-style Widget
function CoinMarketCapWidget({ data }: { data: BitcoinData }) {
  const isPositive = data.change24h >= 0;

  return (
    <Card className="border-2 border-gray-200 rounded-xl shadow-sm max-w-sm mx-auto bg-white overflow-hidden">
      <CardContent className="p-0">
        {/* Header with coin info and price */}
        <div className="flex p-3">
          <div className="w-1/3 flex justify-center items-center">
            <Image
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
              alt="Bitcoin"
              width={46}
              height={46}
            />
          </div>
          <div className="w-2/3 text-left leading-snug">
            <Link
              href="https://coinmarketcap.com/currencies/bitcoin/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=www.bitcoinassociation.ch&utm_content=bitcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 hover:underline"
            >
              Bitcoin (BTC)
            </Link>
            <div className="text-base">
              <span className="text-xl font-medium">{formatPrice(data.price)}</span>
              <span className="text-sm font-medium ml-1">USD</span>
              <span
                className={`ml-2 font-medium ${
                  isPositive ? "text-green-600" : "text-red-500"
                }`}
              >
                ({isPositive ? "+" : ""}{data.change24h.toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="border-t border-gray-200 flex">
          <div className="w-1/3 text-center py-3 border-r border-gray-200">
            <div className="text-xs text-gray-600 mb-2">RANK</div>
            <div className="text-lg font-medium">1</div>
          </div>
          <div className="w-1/3 text-center py-3 border-r border-gray-200">
            <div className="text-xs text-gray-600 mb-2">MARKET CAP</div>
            <div className="text-base font-medium">
              {formatLargeNumber(data.marketCap)} <span className="text-xs">USD</span>
            </div>
          </div>
          <div className="w-1/3 text-center py-3">
            <div className="text-xs text-gray-600 mb-2">VOLUME</div>
            <div className="text-base font-medium">
              {formatLargeNumber(data.volume)} <span className="text-xs">USD</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 text-center py-2 text-xs italic text-gray-500">
          <Link
            href="https://coinmarketcap.com/?utm_medium=widget&utm_campaign=cmcwidget&utm_source=www.bitcoinassociation.ch&utm_content=bitcoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Powered by CoinMarketCap
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// Default fallback data matching the screenshot
const DEFAULT_SPARKLINE = [
  88000, 88500, 89000, 88800, 89200, 89500, 89300, 89800, 90000, 89700,
  89900, 90100, 90300, 90000, 89800, 90100, 90400, 90200, 90185,
];

const DEFAULT_BITCOIN_DATA: BitcoinData = {
  price: 90185.0,
  change24h: 0.7,
  marketCap: 1.8e12,
  volume: 39.69e9,
  sparkline: DEFAULT_SPARKLINE,
};

export default function BitcoinWidgets() {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData>(DEFAULT_BITCOIN_DATA);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch live Bitcoin data from CoinGecko API
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true"
        );
        if (response.ok) {
          const data = await response.json();
          setBitcoinData({
            price: data.market_data.current_price.usd,
            change24h: data.market_data.price_change_percentage_24h,
            marketCap: data.market_data.market_cap.usd,
            volume: data.market_data.total_volume.usd,
            sparkline: data.market_data.sparkline_7d?.price?.slice(-20) || DEFAULT_SPARKLINE,
          });
        }
      } catch {
        // Use fallback static data on error
        console.log("Using fallback Bitcoin data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBitcoinData();
    // Refresh every 60 seconds
    const interval = setInterval(fetchBitcoinData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col gap-8 ${isLoading ? "opacity-70" : ""}`}>
          <CoinGeckoWidget data={bitcoinData} />
          <CoinMarketCapWidget data={bitcoinData} />
        </div>
      </div>
    </section>
  );
}
