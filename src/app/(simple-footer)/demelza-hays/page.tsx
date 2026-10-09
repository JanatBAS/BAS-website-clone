import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("demelza-hays");

export const metadata: Metadata = candidateMetadata(profile);

export default function DemelzaHaysPage() {
  return <CandidateProfilePage profile={profile} />;
}
