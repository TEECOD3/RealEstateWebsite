import Image from "next/image";
import heroimage from "../public/images/pexels-expect-best-323780 2.png";
import Hersection from "@/components/Hersection";
import TopDeals from "@/components/TopDeals";

export default function Home() {
  return (
    <main>
      <section>
        <Hersection />
      </section>
      <section>
        <TopDeals />
      </section>
    </main>
  );
}
