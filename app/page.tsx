import Image from 'next/image';
import Link from 'next/link';
import { ComparisonTable } from '@/components/ComparisonTable';
import { HeroSection } from '@/components/HeroSection';
import { ReasonsSection } from '@/components/ReasonsSection';
import { CriteriaSection } from '@/components/CriteriaSection';
import { FlowSection } from '@/components/FlowSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ReasonsSection />
      <CriteriaSection />
      <FlowSection />
      <ComparisonTable />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}
