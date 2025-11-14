import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Servicios | The One Stop Studio",
};

export default function ServicesEsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="mb-6 text-3xl font-semibold">Nuestros Servicios</h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          Próximamente publicaremos la lista completa de servicios. Mientras tanto, llámanos al {""}
          <a href="tel:+14247572546" className="underline">(424) 757-2546</a> {""}
          para detalles y reservaciones.
        </p>
      </main>
      <Footer />
    </div>
  );
}
