import Link from "next/link";
import { client } from "@/lib/sanity";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


async function getSamplePages(language: string = 'en') {
  try {
    // Fetch sample pages for the specified language
    const samplePages = await client.fetch(`*[_type == "samplePage" && language == $language]{
      _id,
      title,
      description,
      testNumber,
      testBoolean,
      language,
      // Get translations metadata and all language versions
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        _id,
        title,
        language
      }
    }`, { language });
    return samplePages;
  } catch (error) {
    console.error('Error fetching sample pages:', error);
    return [];
  }
}

export default async function TestSanityPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang || 'en';
  const samplePages = await getSamplePages(currentLang);

  const languageName = currentLang === 'en' ? 'English' : 'Spanish';

  return (
    // <Header />
    <div className="min-h-screen bg-white p-8 dark:bg-black">
      <Header />
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          {/* <h1 className="text-3xl font-bold dark:text-white">
            Sanity Localization Test
          </h1> */}
          
          {/* Language Switcher
          <div className="flex gap-2">
            <Link
              href="/en/test-sanity"
              className={`rounded-lg px-4 py-2 ${
                currentLang === 'en'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900'
              }`}
            >
              🇺🇸 English
            </Link>
            <Link
              href="/es/test-sanity"
              className={`rounded-lg px-4 py-2 ${
                currentLang === 'es'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900'
              }`}
            >
              🇪🇸 Español
            </Link>
          </div> */}
        </div>

        <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Current Language:</strong>  ({currentLang})
          </p>
          {/* <p className="mt-2 text-xs text-blue-600 dark:text-blue-300">
            💡 Lol hi daniel
          </p> */}
        </div>

        {/* <h2 className="mb-4 text-2xl font-semibold dark:text-white">
          Sample Pages ({languageName})
        </h2> */}

        {samplePages.length === 0 ? (
          <div className="rounded-lg border border-yellow-300 bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-yellow-800 dark:text-yellow-200">
              No {languageName} sample pages found. Create one in Sanity Studio!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {samplePages.map((page: any) => (
              <div
                key={page._id}
                className="rounded-lg border border-gray-200 p-6 dark:border-gray-700"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {page.title || "Untitled"}
                  </h3>
                  {/* <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-gray-800">
                    {page.language === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}
                  </span> */}
                </div>
                
                {page.description && (
                  <p className="mb-2 text-gray-700 dark:text-gray-300">
                    {page.description}
                  </p>
                )}
                
                {page.testNumber && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test Number: {page.testNumber}
                  </p>
                )}
                
                {page.testBoolean !== undefined && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test Boolean: {page.testBoolean ? "Yes" : "No"}
                  </p>
                )}

                {/* Show available translations */}
                {page._translations && page._translations.length > 0 && (
                  <div className="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">
                    <p className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                      Available Translations:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {page._translations.map((translation: any) => (
                        <Link
                          key={translation._id}
                          href={`/${translation.language}/test-sanity`}
                          className="rounded-md bg-gray-100 px-3 py-1 text-xs hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          {translation.language === 'en' ? '🇺🇸' : '🇪🇸'} {translation.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* <div className="mt-8">
          <Link
            href="/"
            className="inline-block rounded-full bg-black px-6 py-3 text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            ← Back to Home
          </Link>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
