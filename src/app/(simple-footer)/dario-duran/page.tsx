import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("dario-duran");

export const metadata: Metadata = candidateMetadata(profile);

export default function DarioDuranPage() {
  return <CandidateProfilePage profile={profile} />;
}
