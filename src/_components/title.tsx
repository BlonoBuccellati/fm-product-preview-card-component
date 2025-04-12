const Title = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* ジャンル */}
      <div className="text-Gray tracking-[.3rem] uppercase">perfume</div>
      {/* 商品名 */}
      <h1 className="text-preset-1 font-fraunces text-black">
        Gabrielle Essence Eau De Parfum
      </h1>
      {/* 商品説明 */}
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL
      </p>
    </div>
  );
};

export default Title;
