// Browser-side share helpers shared by ShareButton and ShareMenu.

export type ShareNetwork = "x" | "linkedin" | "facebook";

function currentUrl(): string {
  return typeof window !== "undefined" ? window.location.href : "";
}

function shareUrl(network: ShareNetwork, title: string): string {
  const url = encodeURIComponent(currentUrl());
  switch (network) {
    case "x":
      return `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(title)}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  }
}

/** Opens the network's share dialog for the current page in a new window. */
export function openShareWindow(
  network: ShareNetwork,
  title: string,
  features = "noopener,noreferrer"
) {
  window.open(shareUrl(network, title), "_blank", features);
}

/** Copies the current page URL, falling back to execCommand where the Clipboard API is unavailable. */
export async function copyCurrentUrl() {
  try {
    await navigator.clipboard.writeText(currentUrl());
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = currentUrl();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
}
