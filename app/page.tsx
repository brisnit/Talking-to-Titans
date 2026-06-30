import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Problem } from "@/components/sections/Problem";
import { AndrewStory } from "@/components/sections/AndrewStory";
import { WhatIsKLC } from "@/components/sections/WhatIsKLC";
import { FormationCards } from "@/components/sections/FormationCards";
import { DesignedForPastors } from "@/components/sections/DesignedForPastors";
import { FourPromises } from "@/components/sections/FourPromises";
import { MembersReceive } from "@/components/sections/MembersReceive";
import { CoreBeliefs } from "@/components/sections/CoreBeliefs";
import { AboutAndrew } from "@/components/sections/AboutAndrew";
import { MobileAppPreview } from "@/components/sections/MobileAppPreview";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { Closing } from "@/components/sections/Closing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Problem />
      <AndrewStory />
      <WhatIsKLC />
      <FormationCards />
      <DesignedForPastors />
      <FourPromises />
      <MembersReceive />
      <CoreBeliefs />
      <MobileAppPreview />
      <AboutAndrew />
      <ResourcesPreview />
      <Closing />
    </>
  );
}
