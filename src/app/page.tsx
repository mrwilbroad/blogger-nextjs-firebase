import Image from "next/image";
import styles from "./page.module.css";
import NewsUpdate from "@/components/NewsUpdate";

export default function Home() {
  return (
    <main className="container">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vitae, possimus quis amet et fugit officiis omnis enim molestias laudantium corrupti reiciendis fugiat laborum dolorem nostrum optio assumenda tenetur voluptatum.


      <section className="mt-3">
        <NewsUpdate/>
      </section>
    </main>
  );
}
