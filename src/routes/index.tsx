import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Calendar, HeartHandshake, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-illustration.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nest & Nurture Psychology | Child & Adolescent Clinical Psychology" },
      {
        name: "description",
        content:
          "Nest & Nurture Psychology provides compassionate neurodivergence assessments and interventions for children and adolescents in Melbourne and regional Victoria.",
      },
      {
        property: "og:title",
        content: "Nest & Nurture Psychology | Child & Adolescent Clinical Psychology",
      },
      {
        property: "og:description",
        content:
          "Compassionate neurodivergence assessments and interventions for children and adolescents in Melbourne and regional Victoria.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: Brain,
    title: "Neurodivergence assessments",
    description: "Autism, ADHD, dyslexia, dyscalculia and learning profiles for children and teens.",
  },
  {
    icon: HeartHandshake,
    title: "Evidence-based interventions",
    description: "Tailored therapy and support strategies grounded in current research and best practice.",
  },
  {
    icon: MapPin,
    title: "Clinic + mobile visits",
    description: "Appointments in Melbourne CBD or within a 100 km radius at your home, school or community.",
  },
  {
    icon: ShieldCheck,
    title: "Family-centred care",
    description: "We work collaboratively with parents, schools and allied health to support the whole child.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-mid-teal">
                <Sparkles className="h-4 w-4" />
                <span>Clinical psychology for children & adolescents</span>
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Understanding minds.
                <span className="text-primary"> Nurturing growth.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Nest & Nurture Psychology offers warm, thorough assessments and interventions for neurodivergent
                children and young people — in our Melbourne clinic or at your door.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/booking">Book an appointment</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border/60 bg-background hover:bg-secondary"
                >
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-primary" />
                  Melbourne CBD & mobile within 100 km
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/10 to-brick-orange/10 blur-2xl" />
              <img
                src={heroImage}
                alt="A warm, supportive therapy session for a young person"
                width={1344}
                height={896}
                className="relative rounded-2xl border border-border/40 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">How we can help</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Specialist support designed around the unique strengths and needs of each child and family.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="group border-border/40 bg-background transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-border/60 bg-background hover:bg-secondary">
              <Link to="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl bg-cream p-8 sm:p-10">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">A calm, clear path forward</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We know that seeking support for your child can feel overwhelming. Our approach is gentle, transparent
                  and paced to your family.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Detailed, written reports you can actually use",
                    "Clear explanations without jargon",
                    "Collaborative planning with schools and paediatricians",
                    "Flexible clinic and mobile appointment options",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-primary p-6 text-primary-foreground sm:mt-8">
                  <Calendar className="h-8 w-8" />
                  <p className="mt-4 text-3xl font-bold">100 km</p>
                  <p className="mt-1 text-sm opacity-90">Mobile service radius from Melbourne CBD</p>
                </div>
                <div className="rounded-2xl bg-brick-orange p-6 text-accent-foreground">
                  <HeartHandshake className="h-8 w-8" />
                  <p className="mt-4 text-3xl font-bold">Family first</p>
                  <p className="mt-1 text-sm opacity-90">Parents and carers are partners in every step</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-navy py-16 text-ivory sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to take the first step?</h2>
          <p className="mt-4 text-lg opacity-90">
            Book a free 15-minute phone consultation to discuss your child's needs and how we can help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/booking">Request an appointment</Link>
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
