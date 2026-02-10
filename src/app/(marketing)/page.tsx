
import { HeroSection } from "@/components/marketing/HeroSection";
import { TrustBar } from "@/components/marketing/TrustBar";
import { ServiceGrid } from "@/components/marketing/ServiceGrid";
import { IndustriesSection } from "@/components/marketing/IndustriesSection";
import { NetworkMap } from "@/components/marketing/NetworkMap";
import { StatsTicker } from "@/components/marketing/StatsTicker";
import { BlogSection } from "@/components/marketing/BlogSection";
import { CtaSection } from "@/components/marketing/CtaSection";

export default function MarketingPage() {
    return (
        <>
            <HeroSection />
            <TrustBar />
            <ServiceGrid />
            <IndustriesSection />
            <NetworkMap />
            <StatsTicker />
            <BlogSection />
            <CtaSection />
        </>
    );
}
