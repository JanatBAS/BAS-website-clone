import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("marcel-rapold");

export const metadata: Metadata = candidateMetadata(profile);

export default function MarcelRapoldPage() {
  return <CandidateProfilePage profile={profile} />;
}
