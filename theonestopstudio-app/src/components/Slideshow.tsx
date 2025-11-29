// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const slides = [
//   { src: "/Assets/starterimage.jpg", alt: "Studio starter" },
//   { src: "/Assets/unnamed.jpg", alt: "Studio photo 1" },
//   { src: "/Assets/unnamed (1).jpg", alt: "Studio photo 2" },
// ];

// export default function Slideshow() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((i) => (i + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div className="mx-auto w-full max-w-4xl">
//       <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
//         {slides.map((s, i) => (
//           <div
//             key={s.src}
//             className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
//           >
//             <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === index} />
//           </div>
//         ))}
//       </div>
//       <div className="mt-3 flex justify-center gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             aria-label={`Go to slide ${i + 1}`}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 rounded-full ${i === index ? "bg-black dark:bg-white" : "bg-black/30 dark:bg-white/30"}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
