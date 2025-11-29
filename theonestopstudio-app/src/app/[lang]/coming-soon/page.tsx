import { client } from '@/lib/sanity';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Coming Soon - The One Stop Studio",
  description: "Announcements and upcoming features at The One Stop Studio",
};

interface ComingSoonData {
  description: string;
}

async function getComingSoonData(lang: string): Promise<ComingSoonData | null> {
  try {
    const query = `*[_type == "comingSoonPage" && language == $lang][0]{
      description
    }`;
    
    const data = await client.fetch(query, { lang });
    console.log('Sanity data for coming soon page:', data, 'language:', lang);
    return data;
  } catch (error) {
    console.error('Error fetching coming soon data:', error);
    return null;
  }
}

export default async function ComingSoonPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const data = await getComingSoonData(lang);

  // Fallback text if Sanity data is not available
  const fallbackText = lang === "es"
    ? "La función de reserva llegará pronto, pero mientras tanto, no dude en contactar a Wendy para una cita.\nContáctenos para una cita: (424) 757-2546"
    : lang === "ko"
    ? "예약 기능이 곧 제공되지만 그동안 웬디에게 연락하여 예약하세요.\n예약 문의: (424) 757-2546"
    : "Booking feature coming soon but for the time being please do not hesitate to contact Wendy for an appointment.\nContact us for an Appointment: (424) 757-2546";

  const description = data?.description || fallbackText;

  return (
    <div className="error-container">
      <h1 style={{ textAlign: 'center', marginTop: '200px' }}>
        {lang === "es" 
          ? "¡Anuncios!" 
          : lang === "ko"
          ? "공지사항!"
          : "Announcements!"}
      </h1>
      <Image 
        src="/Assets/comingsoonbear.gif" 
        alt="Waiting..." 
        width={400}
        height={300}
        style={{ display: 'block', margin: '20px auto' }}
      />
      <h3 style={{ whiteSpace: 'pre-line' }}>
        {description}
      </h3>
      <p>
        {lang === "es"
          ? "¿Algún problema con el sitio? "
          : lang === "ko"
          ? "사이트에 문제가 있나요? "
          : "Any issues with the site? "}
        <a
          href="mailto:roberts8443@gmail.com?subject=Site%20Issue&body=Hello,%20I%20am%20having%20an%20issue%20with%20the%20site.%20My%20issue%20is%20<write%20your%20issue>"
        >
          {lang === "es"
            ? "Envíe un correo electrónico al desarrollador"
            : lang === "ko"
            ? "개발자에게 이메일 보내기"
            : "Email the Developer"}
        </a>
      </p>
    </div>
  );
}
