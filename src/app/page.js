"use client";

import {
  Features,
  GetApp,
  Hero,
  Members,
  PerfectPlant,
  Testimonial,
} from "@/components";
import ScrollUp from "@/components/ScrollUp";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <PerfectPlant />
      <Members />

      <Testimonial />
      <GetApp />
      <ScrollUp />
    </div>
  );
}
