import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | The One Stop Studio",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="mb-6 text-3xl font-semibold">Our Services</h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          We&apos;re bringing our full services list online soon. In the meantime, please call us at <a href="tel:+14247572546" className="underline">(424) 757-2546</a> for details and bookings.
        </p>
      </main>
      
      <Footer />
    </div>
  );
}
