import CartIcon from "@/assets/icon-cart.svg";
import CartButton from "@/_components/button/cart-button";
import HeroImage from "@/_components/hero-image";

export default function Home() {
  return (
    <div className="bg-Cream py-20text-Gray min-h-screen px-3 text-sm">
      {/* カード */}
      <main className="bg-White grid grid-cols-1 rounded-md md:grid-cols-2">
        {/* 画像 */}
        <div className="relative aspect-[4/3] w-full md:aspect-[3/4]">
          <HeroImage className="mx-auto rounded-t-md" />
        </div>
        {/* コンテンツ */}
        <div className="flex flex-col gap-6 p-8">
          <div className="text-Gray tracking-[.3rem] uppercase">perfume</div>
          <h1 className="text-preset-1 font-fraunces text-black">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
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
