import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CartButtonProps {
  title: string;
  icon: string | StaticImport;
}
const CartButton = ({ title, icon }: CartButtonProps) => {
  return (
    <button className="bg-Green-500 hover:bg-Green-700 active:bg-Green-700 rounded-lg py-3 font-bold text-white hover:cursor-pointer">
      <span className="flex justify-center gap-3">
        <Image src={icon} alt="" width={18} className="h-[1.125rem]" />
        {title}
      </span>
    </button>
  );
};

export default CartButton;
