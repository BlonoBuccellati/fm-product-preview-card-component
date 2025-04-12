import Image from "next/image";
import CartIcon from "@/assets/icon-cart.svg";

export default function Home() {
  return (
    <div className="bg-Cream min-h-screen px-3 py-20">
      {/* カード */}
      <main className="text-Gray text-sm">
        <div className="bg-White grid grid-cols-1 rounded-md md:grid-cols-2">
          {/* 画像 */}
          <div className="relative aspect-[4/3] w-full md:aspect-[3/4]">
            <picture>
              <source
                srcSet="/images/image-product-desktop.jpg"
                media="(min-width:768px)"
              />
              <Image
                src="/images/image-product-mobile.jpg"
                alt="chanel perfume"
                fill
                className="mx-auto rounded-t-md"
              ></Image>
            </picture>
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
            <button className="bg-Green-500 hover:bg-Green-700 active:bg-Green-700 rounded-lg py-3 font-bold text-white hover:cursor-pointer">
              <div className="flex justify-center gap-3">
                <Image
                  src={CartIcon}
                  alt=""
                  width={18}
                  className="h-[1.125rem]"
                />
                Add to Cart
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
