import Image from "next/image";
import { BtnLink } from "@/components/Buttons";

export function PortfolioItem() {
  return (
    <div className="grid place-items-start gap-y-1 rounded-md bg-neutral-900 px-5 py-4">
      <div></div>
      <h2>Title</h2>
      <p>description</p>
      <BtnLink link="#" name="View source" />
    </div>
  );
}
