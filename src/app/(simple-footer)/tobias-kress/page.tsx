import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("tobias-kress");

export const metadata: Metadata = candidateMetadata(profile);

export default function TobiasKressPage() {
  return <CandidateProfilePage profile={profile} />;
}
