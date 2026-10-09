import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("niklas-nikolajsen");

export const metadata: Metadata = candidateMetadata(profile);

export default function NiklasNikolajsenPage() {
  return <CandidateProfilePage profile={profile} />;
}
