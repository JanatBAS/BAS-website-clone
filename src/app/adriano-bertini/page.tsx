import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("adriano-bertini");

export const metadata: Metadata = candidateMetadata(profile);

export default function AdrianoBertiniPage() {
  return <CandidateProfilePage profile={profile} />;
}
