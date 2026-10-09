import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("eric-wasescha");

export const metadata: Metadata = candidateMetadata(profile);

export default function EricWaseschaPage() {
  return <CandidateProfilePage profile={profile} />;
}
