import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./accessibility.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTracker from "@/components/ScrollTracker";
import LanguageRedirect from "@/components/LanguageRedirect";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import AnalyticsPageView from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theonestopstudio.com'), // Update with your actual domain
  title: {
    default: 'The One Stop Studio - Professional Barber & Beauty Services',
    template: '%s | The One Stop Studio'
  },
  description: 'The Cleanest Cuts Around. Professional barber and beauty services offering haircuts, styling, and grooming. Book your appointment today.',
  keywords: ['barber', 'beauty salon', 'haircut', 'styling', 'grooming', 'barber shop', 'hair salon', 'mens haircut', 'professional barber'],
  authors: [{ name: 'The One Stop Studio' }],
  creator: 'The One Stop Studio',
  publisher: 'The One Stop Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'The One Stop Studio - Professional Barber & Beauty Services',
    description: 'The Cleanest Cuts Around. Professional barber and beauty services.',
    url: 'https://theonestopstudio.com',
    siteName: 'The One Stop Studio',
    images: [
      {
        url: '/Assets/The One Stop Studio.jpg',
        width: 1200,
        height: 630,
        alt: 'The One Stop Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The One Stop Studio - Professional Barber & Beauty Services',
    description: 'The Cleanest Cuts Around. Professional barber and beauty services.',
    images: ['/Assets/The One Stop Studio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
   //google verification thingy idk how to get it lol
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://theonestopstudio.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E50914" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HairSalon',
              name: 'The One Stop Studio',
              description: 'Professional barber and beauty services',
              url: 'https://theonestopstudio.com',
              logo: 'https://theonestopstudio.com/Assets/The One Stop Studio.jpg',
              image: 'https://theonestopstudio.com/Assets/The One Stop Studio.jpg',
              priceRange: '$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '2922 S Western Ave',
                addressLocality: 'Los Angeles',
                addressRegion: 'CA',
                postalCode: '90018',
                addressCountry: 'US',
              },
              // telephone: '+1-XXX-XXX-XXXX',  //idk if I should add this tbh 
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                //social medias here: 
                'https://www.instagram.com/theonestopstudiollc/',
              ],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PX3980M4N7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PX3980M4N7');
          `}
        </Script>
        <AnalyticsPageView />
        <ScrollTracker />
        <LanguageRedirect />
        <Header />
        <a href="#main-content" className="skip-link" tabIndex={0}>
          Skip to main content
        </a>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
