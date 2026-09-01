import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Brain,
  Calculator,
  Calendar,
  Car,
  ClipboardList,
  FileText,
  Lightbulb,
  MessageCircleHeart,
  Puzzle,
  School,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import servicesImage from "@/assets/services-illustration.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Nest & Nurture Psychology" },
      {
        name: "description",
        content:
          "Explore neurodivergence assessments, therapy interventions and mobile psychology services for children and adolescents at Nest & Nurture Psychology.",
      },
      { property: "og:title", content: "Services | Nest & Nurture Psychology" },
      {
        property: "og:description",
        content:
          "Neurodivergence assessments, therapy interventions and mobile psychology services for children and adolescents in Melbourne.",
      },
    ],
  }),
  component: ServicesPage,
});

const assessments = [
  {
    icon: Brain,
    title: "Autism assessment",
    description:
      "Comprehensive diagnostic assessment for autism spectrum conditions, including clinical interview, standardised tools, observation and a detailed report with recommendations.",
  },
  {
    icon: Zap,
    title: "ADHD assessment",
    description:
      "Thorough assessment of attention, hyperactivity and executive functioning, with clear guidance on supports at home, school and in the community.",
  },
  {
    icon: BookOpen,
    title: "Dyslexia & learning assessment",
    description:
      "Cognitive and academic testing to understand reading, writing, spelling and learning strengths and challenges.",
  },
  {
    icon: Calculator,
    title: "Dyscalculia & numeracy assessment",
    description:
      "Targeted evaluation of mathematical thinking, number sense and working memory to inform practical learning strategies.",
  },
  {
    icon: ClipboardList,
    title: "Cognitive / IQ testing",
    description:
      "Intellectual ability assessment to inform school planning, giftedness identification, or clarification of learning needs.",
  },
  {
    icon: Puzzle,
    title: "Complex differential diagnosis",
    description:
      "When presentations overlap, we carefully explore autism, ADHD, anxiety, learning differences and more to provide clarity.",
  },
];

const interventions = [
  {
    icon: MessageCircleHeart,
    title: "Individual therapy",
    description: "One-on-one sessions for anxiety, mood, behaviour, emotional regulation, social skills and self-esteem.",
  },
  {
    icon: Users,
    title: "Parent support sessions",
    description: "Coaching and strategies to help parents and carers respond confidently to their child's unique needs.",
  },
  {
    icon: School,
    title: "School liaison",
    description: "Collaboration with teachers and learning support staff to put recommendations into action.",
  },
  {
    icon: Lightbulb,
    title: "Strengths-based planning",
    description: "We build on what your child does well while supporting the areas that feel hardest right now.",
  },
];

const mobileInfo = [
  {
    icon: Car,
    title: "Mobile psychology visits",
    description:
      "We travel to homes, schools and community settings within approximately 100 km of Melbourne CBD, making access easier for busy families.",
  },
  {
    icon: Calendar,
    title: "Flexible scheduling",
    description: "Appointments available during school hours, after school and on select Saturdays.",
  },
  {
    icon: FileText,
    title: "Clear reports & plans",
    description: "Every assessment includes a written report with practical, individualised recommendations.",
  },
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">Our services</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Specialist assessments and interventions for neurodivergent children and adolescents, delivered with
              warmth, clarity and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Assessments */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Assessments</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We offer a range of diagnostic and psychoeducational assessments to help you understand your child's
                mind and needs.
              </p>
            </div>
            <Button asChild className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/pricing">See assessment pricing</Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {assessments.map((item) => (
              <Card key={item.title} className="border-border/40 bg-background transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interventions */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Interventions & support</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Beyond assessment, we provide ongoing therapeutic support that is practical, collaborative and centred on
              your child's strengths.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {interventions.map((item) => (
              <Card key={item.title} className="border-border/40 bg-cream transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile / how it works */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={servicesImage}
                alt="Illustration representing neurodivergent assessments and support"
                width={1024}
                height={1024}
                loading="lazy"
                className="rounded-2xl border border-border/40 shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Clinic and mobile care</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We understand that travelling into the CBD isn't always practical. That's why we bring our services to
                you when needed.
              </p>
              <div className="mt-8 space-y-6">
                {mobileInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-navy py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Not sure where to start?</h2>
          <p className="mt-4 text-lg opacity-90">
            Get in touch for a free 15-minute phone consultation. We'll help you choose the right pathway.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/booking">Book a consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ivory/30 bg-transparent text-ivory hover:bg-ivory/10"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CalculatorIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}
