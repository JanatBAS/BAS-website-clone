import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("bastian-feder");

export const metadata: Metadata = candidateMetadata(profile);

export default function BastianFederPage() {
  return <CandidateProfilePage profile={profile} />;
}
