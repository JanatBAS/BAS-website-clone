import type { Metadata } from "next";
import CandidateProfilePage, {
  candidateMetadata,
} from "@/components/candidates/CandidateProfilePage";
import { getCandidateProfile } from "@/data/candidates";

const profile = getCandidateProfile("phil-lojacono");

export const metadata: Metadata = candidateMetadata(profile);

export default function PhilLojaconoPage() {
  return <CandidateProfilePage profile={profile} />;
}
