import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Booking Coming Soon | The One Stop Studio",
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="mb-6 text-3xl font-semibold">Booking coming soon!</h1>
        <div className="mx-auto mb-6 w-full max-w-md overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
          <Image
            src="/Assets/comingsoonbear.gif"
            alt="Waiting..."
            width={800}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <p className="mb-2 text-zinc-700 dark:text-zinc-300">
          Booking feature is coming soon. In the meantime, contact Wendy for an appointment.
        </p>
        <p className="mb-4">
          <a href="tel:+14247572546" className="font-semibold underline">(424) 757-2546</a>
        </p>
        <p className="text-zinc-700 dark:text-zinc-300">
          Site issues? Email the developer: {""}
          <a
            className="underline"
            href="mailto:roberts8443@gmail.com?subject=Site%20Issue&body=Hello,%20I%20am%20having%20an%20issue%20with%20the%20site.%20My%20issue%20is%20<write%20your%20issue>"
          >
            roberts8443@gmail.com
          </a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
