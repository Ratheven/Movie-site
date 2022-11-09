import {
  MoonIcon,
  FireIcon,
  HomeIcon,
  SparklesIcon,
  GiftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl h-auto">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={SparklesIcon} />
        <HeaderItem title="VERIFIED" Icon={MoonIcon} />
        <HeaderItem title="COLLECTIONS" Icon={FireIcon} />
        <HeaderItem title="SEARCH" Icon={GiftIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
