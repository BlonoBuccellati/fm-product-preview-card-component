import CartIcon from "@/assets/icon-cart.svg";
import CartButton from "@/_components/button/cart-button";
import HeroImage from "@/_components/hero-image";

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
          <div className="flex flex-col gap-6">
            {/* ジャンル */}
            <div className="text-Gray tracking-[.3rem] uppercase">perfume</div>
            {/* 商品名 */}
            <h1 className="text-preset-1 font-fraunces text-black">
              Gabrielle Essence Eau De Parfum
            </h1>
            {/* 商品説明 */}
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-Green-500 font-fraunces text-preset-1">
              $149.99
            </span>
            <del>$169.99</del>
          </div>
          <CartButton title="Add to Cart" icon={CartIcon} />
        </div>
      </main>
    </div>
  );
}
