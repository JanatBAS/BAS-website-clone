import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("ralph-hofacker");

export const metadata: Metadata = candidateMetadata(profile);

export default function RalphHofackerPage() {
  return <CandidateProfilePage profile={profile} />;
}
