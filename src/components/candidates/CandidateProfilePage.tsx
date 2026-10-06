import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import FooterSimple from "@/components/FooterSimple";
import BoardElectionNav from "@/components/candidates/BoardElectionNav";
import type { CandidateProfile } from "@/data/candidates";

const linkClassName = "text-[#c75b4a] hover:underline";

export function candidateMetadata(profile: CandidateProfile): Metadata {
  return {
    title: profile.name,
    description: `Board Election 2024 candidate profile of ${profile.name}, ${profile.role}.`,
  };
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
      {children}
    </a>
  );
}

export default function CandidateProfilePage({ profile }: { profile: CandidateProfile }) {
  return (
    <>
      <Header />

      {profile.showBanner && (
        <div className="relative w-full h-[200px] md:h-[300px] mt-20">
          <Image
            src="/images/candidates/candidates-banner.png"
            alt="Candidates"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <main className={`py-12 bg-white min-h-screen${profile.showBanner ? "" : " mt-20"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <BoardElectionNav activeHref={`/${profile.slug}`} uppercase={profile.uppercaseNav} />

            <div className="flex-1 max-w-3xl">
              {/* Profile Photo */}
              <div className="mb-8">
                <Image
                  src={profile.photo.src}
                  alt={profile.name}
                  width={profile.photo.width}
                  height={profile.photo.height}
                  sizes="280px"
                  className="w-[280px] h-auto"
                  priority={!profile.showBanner}
                />
              </div>

              {/* Name, Location and Position */}
              <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-2">
                {profile.name}
              </h1>
              <p className="text-gray-500 text-sm mb-8">{profile.location}</p>
              <h2 className="text-sm uppercase tracking-wider text-gray-700 font-semibold mb-6">
                {profile.role}
              </h2>

              {/* Biography and Motivation */}
              <div className="space-y-6 text-sm text-gray-700 leading-relaxed mb-8">
                {profile.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Contact Details and Documents */}
              <div className="mb-8 space-y-2 text-sm text-gray-700">
                {profile.linkedin && (
                  <p>
                    <ExternalLink href={profile.linkedin}>Linkedin</ExternalLink>
                  </p>
                )}
                <p>
                  Telegram:{" "}
                  {profile.telegram.href ? (
                    <ExternalLink href={profile.telegram.href}>{profile.telegram.handle}</ExternalLink>
                  ) : (
                    profile.telegram.handle
                  )}
                </p>
                {profile.nostr && (
                  <p>
                    Nostr:{" "}
                    <ExternalLink href={profile.nostr.href}>
                      <span className="break-all">{profile.nostr.npub}</span>
                    </ExternalLink>
                  </p>
                )}
                {profile.documents.map((document) => (
                  <p key={document.href}>
                    <ExternalLink href={document.href}>{document.label}</ExternalLink>
                    {document.suffix && <span>{document.suffix}</span>}
                  </p>
                ))}
              </div>

              {/* Introduction Video */}
              {profile.video && (
                <div className="aspect-video w-full max-w-xl bg-black mb-8">
                  <iframe
                    src={profile.video.src}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={profile.video.title}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <FooterSimple />
    </>
  );
}
