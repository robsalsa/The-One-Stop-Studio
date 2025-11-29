import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | The One Stop Studio",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <section className="grid items-start gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
            <Image
              src="/Assets/aboutpagestuff.jpeg"
              alt="About The One Stop Studio"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Meet Your Barber</h1>
            <p className="text-zinc-700 dark:text-zinc-300">
              About Wendy Alarcon – Owner of The One Stop Studio
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Wendy Alarcon is the founder and owner of The One Stop Studio, a beauty and grooming destination established in 2018. Originally launched as The One Stop Beauty and Barbershop, the business has since grown and evolved into The One Stop Studio, reflecting Wendy’s expansion into permanent makeup services alongside her barbering and cosmetology expertise.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              With over 10 years of experience, Wendy is a licensed barber, licensed cosmetologist, and certified permanent makeup artist. Her passion for helping clients look and feel their best is at the heart of everything she does. Known for her peaceful studio environment and warm hospitality, Wendy goes the extra mile to ensure every client feels comfortable and cared for, offering complimentary drinks, snacks, and personalized service.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              As an appointment-based studio, The One Stop Studio offers a wide range of services, including haircuts, eyebrow threading, mini facials, earlobe piercing, barbering, cosmetology, and permanent makeup. By working one-on-one with her clients, Wendy is able to provide a relaxing, customized experience where detail and quality always come first.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
