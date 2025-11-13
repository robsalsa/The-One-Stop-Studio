import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Reservaciones Pronto | The One Stop Studio",
};

export default function ComingSoonEsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="mb-6 text-3xl font-semibold">¡Reservaciones muy pronto!</h1>
        <div className="mx-auto mb-6 w-full max-w-md overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
          <Image
            src="/Assets/comingsoonbear.gif"
            alt="Esperando..."
            width={800}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <p className="mb-2 text-zinc-700 dark:text-zinc-300">
          La función de reservaciones estará disponible pronto. Mientras tanto, contacta a Wendy para una cita.
        </p>
        <p className="mb-4">
          <a href="tel:+14247572546" className="font-semibold underline">(424) 757-2546</a>
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          ¿Problemas con el sitio? Escribe al desarrollador: {""}
          <a
            className="underline"
            href="mailto:roberts8443@gmail.com?subject=Problema%20con%20el%20sitio&body=Hola,%20tengo%20un%20problema%20con%20el%20sitio.%20Mi%20problema%20es%20<escriba%20su%20problema>"
          >
            roberts8443@gmail.com
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
