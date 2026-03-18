import { redirect } from "next/navigation";

export default function JoinRedirect() {
  redirect("/membership/private-individuals");
}
