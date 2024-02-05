import { BusinessCardGenerator } from "./components/BusinessCardGenerator";
import { TextComponent } from "./components/TextComponent";

export default function Home() {
  return (
    <section className=" mx-10 md:mx-24 lg:mx-24 xl:mx-0">
      <BusinessCardGenerator />
    </section>
  );
}
