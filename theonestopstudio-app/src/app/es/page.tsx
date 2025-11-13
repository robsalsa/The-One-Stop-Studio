import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slideshow from "@/components/Slideshow";

export const metadata = {
  title: "Inicio | The One Stop Studio",
};

export default function HomeEs() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-10">
        <Slideshow />
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/es/services"
            className="rounded-full bg-black px-6 py-3 text-white shadow hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            ¡Revisa Nuestros Servicios!
          </Link>
          <Link
            href="/"
            className="rounded-full border px-6 py-3 hover:bg-black/5 dark:hover:bg-white/10"
          >
            En Inglés
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
