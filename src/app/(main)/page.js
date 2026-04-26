import Center from "@/components/Hompage_parts/Center";
import Leftside from "@/components/Hompage_parts/Leftside";
import Rightside from "@/components/Hompage_parts/Rightside";
import Image from "next/image";
import { getCetagoryData } from "../lib/data";

export default async function Home() {
  const categories = await getCetagoryData();
  const Categories = categories.data.news_category;
  return (
    <div>
      <div className="max-w-[85%] mt-5 mx-auto grid grid-cols-12 gap-6">
        <Leftside Categories={Categories} />
        <Center />
        <Rightside />
      </div>
    </div>
  );
}
