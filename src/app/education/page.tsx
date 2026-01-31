import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const featuredVideos = [
  {
    id: "1WBrdLQhUrg",
    title: "What would a Bitcoin standard look like?",
    speaker: "Saifedean Ammous",
    description: "Economics perspective",
  },
  {
    id: "PgMrR_ZxMyw",
    title: "Bitcoin blockchain technology evolution",
    speaker: "Adam Back",
    description: "Technical perspective",
  },
];

function PlayIcon() {
  return (
    <svg
      className="w-8 h-8 text-white/80"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="14 18 36 28"
      className="w-5 h-5"
    >
      <path
        fill="currentColor"
        d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"
      />
    </svg>
  );
}

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#1a1a1a] pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <PlayIcon />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
              Bitcoin Education
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Talks from a decade of Swiss Bitcoin meetups and conferences
            </p>
          </div>
        </section>

        {/* Featured Videos Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#8b7355] text-lg font-light mb-8 font-serif italic">
              Featured Lectures
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredVideos.map((video) => (
                <div key={video.id}>
                  <div className="relative w-full aspect-video bg-gray-100 rounded overflow-hidden mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <h3 className="text-gray-900 font-medium text-sm mb-1">
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    {video.speaker} · {video.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Videos Playlist Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[#8b7355] text-lg font-light mb-8 font-serif italic">
              All Lectures
            </h2>
            <div className="relative w-full bg-gray-100 rounded overflow-hidden" style={{ height: "480px" }}>
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=UU5nVX9C2vM1dFg0BvatKEOg"
                title="Bitcoin Lectures - All Videos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">
              Browse all lectures from the Bitcoin Lectures YouTube channel
            </p>
          </div>
        </section>

        {/* Channel CTA Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button
              asChild
              className="bg-[#c75b4a] hover:bg-[#b54a3a] text-white px-6 py-2 rounded-md inline-flex items-center gap-2"
            >
              <a
                href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
                Subscribe on YouTube
              </a>
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Made possible through the support of the Bitcoin Association Switzerland
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
