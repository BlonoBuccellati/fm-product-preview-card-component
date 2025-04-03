import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-Cream h-screen px-5 py-10 text-sm">
      <main className="bg-White grid grid-cols-1 md:grid-cols-2">
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
              className="mx-auto"
            ></Image>
          </picture>
        </div>
        {/* コンテンツ */}
        <div>
          <div>PERFUME</div>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator form the House of CHANEL
          </p>
          <div>
            <span>$149.99</span>
            <del>%169.99</del>
          </div>
          <button>Add to Cart</button>
        </div>
      </main>
    </div>
  );
}
