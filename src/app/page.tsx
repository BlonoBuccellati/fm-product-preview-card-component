import CartIcon from "@/assets/icon-cart.svg";

import CartButton from "@/_components/button/cart-button";
import HeroImage from "@/_components/hero-image";
import Price from "@/_components/price";
import Title from "@/_components/title";

export default function Home() {
  return (
    <div className="bg-Cream text-Gray min-h-screen px-3 py-20 text-sm md:flex">
      {/* カード */}
      <main className="bg-White m-auto grid max-w-[600px] grid-cols-1 rounded-md md:grid-cols-2">
        {/* 画像 */}
        <div className="relative aspect-[4/3] w-full md:aspect-[3/4.5]">
          <HeroImage className="rounded-t-md md:rounded-t-none md:rounded-l-md" />
        </div>
        {/* コンテンツ */}
        <div className="flex flex-col gap-6 p-8 md:gap-8">
          <Title />
          <Price />
          <CartButton title="Add to Cart" icon={CartIcon} />
        </div>
      </main>
    </div>
  );
}
