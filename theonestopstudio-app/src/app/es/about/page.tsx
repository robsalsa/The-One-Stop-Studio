import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sobre Nosotros | The One Stop Studio",
};

export default function AboutEsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <section className="grid items-start gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
            <Image
              src="/Assets/aboutpagestuff.jpeg"
              alt="Sobre The One Stop Studio"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Conoce a tu Barbero</h1>
            <p className="text-zinc-700 dark:text-zinc-300">
              Sobre Wendy Alarcón – Propietaria de The One Stop Studio
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Wendy Alarcón es la fundadora y propietaria de The One Stop Studio, un destino de belleza y cuidado personal establecido en 2018. Originalmente lanzado como The One Stop Beauty and Barbershop, el negocio ha crecido y evolucionado hasta convertirse en The One Stop Studio, reflejando la expansión de Wendy hacia los servicios de maquillaje permanente junto con su experiencia en barbería y cosmetología.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Con más de 10 años de experiencia, Wendy es barbera licenciada, cosmetóloga licenciada y artista certificada en maquillaje permanente. Su pasión por ayudar a los clientes a verse y sentirse lo mejor posible está en el corazón de todo lo que hace.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Como estudio con cita previa, ofrecemos cortes de cabello, depilación de cejas con hilo, mini faciales, perforación de lóbulos de oreja, barbería, cosmetología y maquillaje permanente. La experiencia es personalizada, relajada y con atención al detalle.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
