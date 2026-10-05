import { Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";
import Shelf from "@/components/Shelf";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shelf — Samarth S Rao",
  description: "Books I'm reading, and ones I've finished.",
};

export default function ShelfPage() {
  return <Shelf serifClass={serif.className} />;
}
