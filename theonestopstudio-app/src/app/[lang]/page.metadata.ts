import { Metadata } from 'next';

export function generateHomeMetadata(lang: string): Metadata {
  const titles = {
    en: 'Home - The One Stop Studio',
    es: 'Inicio - The One Stop Studio',
    ko: '홈 - The One Stop Studio',
  };

  const descriptions = {
    en: 'Welcome to The One Stop Studio - Professional barber and beauty services with the cleanest cuts around. Book your appointment today.',
    es: 'Bienvenido a The One Stop Studio - Servicios profesionales de barbería y belleza. Reserve su cita hoy.',
    ko: 'The One Stop Studio에 오신 것을 환영합니다 - 전문 이발 및 미용 서비스. 오늘 예약하세요.',
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://theonestopstudio.com/${lang}`,
      languages: {
        'en': 'https://theonestopstudio.com/en',
        'es': 'https://theonestopstudio.com/es',
        'ko': 'https://theonestopstudio.com/ko',
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      url: `https://theonestopstudio.com/${lang}`,
      locale: lang === 'es' ? 'es_ES' : lang === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}

export function generateAboutMetadata(lang: string): Metadata {
  const titles = {
    en: 'About Us - The One Stop Studio',
    es: 'Sobre Nosotros - The One Stop Studio',
    ko: '회사 소개 - The One Stop Studio',
  };

  const descriptions = {
    en: 'Learn about The One Stop Studio - Our story, our passion for barbering, and our commitment to providing the best service.',
    es: 'Conozca The One Stop Studio - Nuestra historia, nuestra pasión por la barbería y nuestro compromiso de brindar el mejor servicio.',
    ko: 'The One Stop Studio에 대해 알아보세요 - 우리의 이야기, 이발에 대한 열정, 최고의 서비스 제공에 대한 헌신.',
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://theonestopstudio.com/${lang}/about`,
      languages: {
        'en': 'https://theonestopstudio.com/en/about',
        'es': 'https://theonestopstudio.com/es/about',
        'ko': 'https://theonestopstudio.com/ko/about',
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      url: `https://theonestopstudio.com/${lang}/about`,
      locale: lang === 'es' ? 'es_ES' : lang === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}

export function generateServiceMetadata(lang: string): Metadata {
  const titles = {
    en: 'Services - The One Stop Studio',
    es: 'Servicios - The One Stop Studio',
    ko: '서비스 - The One Stop Studio',
  };

  const descriptions = {
    en: 'Explore our comprehensive range of barber and beauty services - haircuts, styling, grooming, and more. Professional service at competitive prices.',
    es: 'Explore nuestra amplia gama de servicios de barbería y belleza: cortes de pelo, peinados, cuidado personal y más. Servicio profesional a precios competitivos.',
    ko: '다양한 이발 및 미용 서비스를 살펴보세요 - 헤어컷, 스타일링, 그루밍 등. 경쟁력 있는 가격의 전문 서비스.',
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://theonestopstudio.com/${lang}/service`,
      languages: {
        'en': 'https://theonestopstudio.com/en/service',
        'es': 'https://theonestopstudio.com/es/service',
        'ko': 'https://theonestopstudio.com/ko/service',
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      url: `https://theonestopstudio.com/${lang}/service`,
      locale: lang === 'es' ? 'es_ES' : lang === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}

export function generateBookingMetadata(lang: string): Metadata {
  const titles = {
    en: 'Book Appointment - The One Stop Studio',
    es: 'Reservar Cita - The One Stop Studio',
    ko: '예약하기 - The One Stop Studio',
  };

  const descriptions = {
    en: 'Book your appointment at The One Stop Studio. Easy online booking for all barber and beauty services.',
    es: 'Reserve su cita en The One Stop Studio. Reserva online fácil para todos los servicios de barbería y belleza.',
    ko: 'The One Stop Studio에서 예약하세요. 모든 이발 및 미용 서비스를 위한 간편한 온라인 예약.',
  };

  return {
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    alternates: {
      canonical: `https://theonestopstudio.com/${lang}/booking_CAL`,
      languages: {
        'en': 'https://theonestopstudio.com/en/booking_CAL',
        'es': 'https://theonestopstudio.com/es/booking_CAL',
        'ko': 'https://theonestopstudio.com/ko/booking_CAL',
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.en,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
      url: `https://theonestopstudio.com/${lang}/booking_CAL`,
      locale: lang === 'es' ? 'es_ES' : lang === 'ko' ? 'ko_KR' : 'en_US',
    },
  };
}
