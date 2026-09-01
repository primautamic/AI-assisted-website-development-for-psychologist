import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, Heart, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clinicImage from "@/assets/clinic-room.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Nest & Nurture Psychology" },
      {
        name: "description",
        content:
          "Meet Primrose Everdeen, clinical psychologist at Nest & Nurture Psychology. Learn about our values, approach and Melbourne clinic.",
      },
      { property: "og:title", content: "About | Nest & Nurture Psychology" },
      {
        property: "og:description",
        content:
          "Meet Primrose Everdeen and learn about the values and approach behind Nest & Nurture Psychology in Melbourne.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Compassion first",
    description: "We meet every child and family with warmth, patience and genuine curiosity.",
  },
  {
    icon: Sparkles,
    title: "Strengths-based",
    description: "We see neurodivergence as a difference, not a deficit. Our work builds on natural strengths.",
  },
  {
    icon: GraduationCap,
    title: "Evidence-informed",
    description: "Our assessments and interventions are grounded in current research and clinical best practice.",
  },
  {
    icon: Award,
    title: "Clear & useful",
    description: "Families leave with practical recommendations they can use at home, school and in the community.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-18">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">About us</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Nest & Nurture Psychology was created to give families a calm, supportive place to understand and celebrate
            their child's unique mind.
          </p>
        </div>
      </section>

      {/* Psychologist intro */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={clinicImage}
                alt="The welcoming Nest & Nurture Psychology consultation room in Melbourne"
                width={1344}
                height={896}
                loading="lazy"
                className="rounded-2xl border border-border/40 shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Primrose Everdeen</h2>
              <p className="mt-2 text-lg font-medium text-primary">Clinical Psychologist & Founder</p>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Primrose has dedicated her career to supporting children, adolescents and families navigating
                  neurodivergence. She understands that every young person's brain works differently — and that the
                  right support can help them flourish.
                </p>
                <p>
                  With specialist training in autism, ADHD, learning differences and developmental psychology, Primrose
                  combines thorough assessment with practical, family-centred intervention. She is known for her calm
                  manner, clear communication and ability to make families feel at ease from the very first contact.
                </p>
                <p>
                  Primrose is registered with the Psychology Board of Australia and is a member of the Australian
                  Psychological Society. She holds endorsements in clinical psychology and has completed advanced
                  training in several gold-standard assessment tools.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/booking">Book an appointment</Link>
                </Button>
                <Button asChild variant="outline" className="border-border/60 bg-background hover:bg-secondary">
                  <Link to="/contact">Contact Primrose</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These principles guide every assessment, conversation and recommendation we make.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
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

      {/* Location */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-background p-8 text-center sm:p-12">
            <MapPin className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Where to find us</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our clinic is based in the Melbourne CBD area, with appointments available in-person or as mobile visits
              within 100 km of the city.
            </p>
            <p className="mt-6 text-foreground">
              <strong>Clinic location:</strong>
              <br />
              Melbourne CBD area, Victoria
              <br />
              Exact address provided upon booking.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Mobile visits are available across metropolitan Melbourne and into regional Victoria, including Geelong,
              Ballarat, Bendigo and the Macedon Ranges.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
