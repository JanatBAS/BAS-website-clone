import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("lisa-tscherry");

export const metadata: Metadata = candidateMetadata(profile);

export default function LisaTscherryPage() {
  return <CandidateProfilePage profile={profile} />;
}
