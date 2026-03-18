import { redirect } from "next/navigation";

export default function PrivateRedirect() {
  redirect("/membership/private-individuals");
}
