import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Annual Conference",
  description:
    "The Talking to Titans annual conference — a national gathering for pastors and marketplace leaders. Coming soon.",
};

export default function ConferencePage() {
  return (
    <ComingSoon
      eyebrow="The Annual Conference"
      title="A national gathering of Kingdom builders."
      body="Three transformational days where pastors and marketplace leaders come together for teaching, worship, and brotherhood — a reset for the soul and a vision for the Kingdom."
      image={IMAGES.summit}
      highlights={["Teaching", "Worship", "Brotherhood", "Vision"]}
    />
  );
}
