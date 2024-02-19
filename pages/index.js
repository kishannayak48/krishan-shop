import { Inter } from "next/font/google";
import LendingPage from "@/components/lendingPage";
import LayoutPage from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <LendingPage />;
}
Home.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};
