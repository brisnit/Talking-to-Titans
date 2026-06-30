import type { Metadata } from "next";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The Talking to Titans podcast — conversations with pastors and titans of the marketplace. Coming soon.",
};

export default function PodcastPage() {
  return (
    <ComingSoon
      eyebrow="The Podcast"
      title="Conversations with pastors and titans."
      body="Candid, pastoral, and strategic conversations about faith, leadership, generosity, and the weight of influence — with the leaders shaping tomorrow and the pastors who shepherd them."
      image={IMAGES.conversation}
      highlights={["Faith & the marketplace", "Leadership", "Generosity", "Brotherhood"]}
    />
  );
}
