import Image from "next/image";
import styles from "./page.module.css";
import NewsUpdate from "@/components/NewsUpdate";

export default function Home() {
  return (
    <main className="container">
       
      <section className="mt-3">
        <NewsUpdate />
      </section>
    </main>
  );
}
