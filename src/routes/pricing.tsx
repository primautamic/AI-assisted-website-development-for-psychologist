import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Nest & Nurture Psychology" },
      {
        name: "description",
        content:
          "Transparent, detailed pricing for neurodivergence assessments, therapy sessions and mobile psychology visits at Nest & Nurture Psychology.",
      },
      { property: "og:title", content: "Pricing | Nest & Nurture Psychology" },
      {
        property: "og:description",
        content:
          "Transparent pricing for autism, ADHD, dyslexia, dyscalculia assessments and therapy for children and adolescents in Melbourne.",
      },
    ],
  }),
  component: PricingPage,
});

const assessmentPackages = [
  {
    name: "Autism assessment",
    price: "$2,400",
    sessions: "3 sessions",
    includes: [
      "Initial parent interview (60 min)",
      "Child/adolescent clinical observation and interview",
      "Standardised autism-specific tools",
      "Cognitive screening where appropriate",
      "Comprehensive written report",
      "Feedback session (45 min)",
    ],
  },
  {
    name: "ADHD assessment",
    price: "$1,950",
    sessions: "2–3 sessions",
    includes: [
      "Initial parent interview (60 min)",
      "Child/adolescent assessment session(s)",
      "Standardised attention and executive function measures",
      "Teacher / school questionnaire",
      "Detailed written report",
      "Feedback session (45 min)",
    ],
  },
  {
    name: "Learning / dyslexia assessment",
    price: "$1,650",
    sessions: "2 sessions",
    includes: [
      "Cognitive assessment (WISC or equivalent)",
      "Academic achievement testing",
      "Detailed learning profile",
      "Written report with school recommendations",
      "Feedback session (45 min)",
    ],
  },
  {
    name: "Dyscalculia / numeracy assessment",
    price: "$1,550",
    sessions: "2 sessions",
    includes: [
      "Cognitive assessment",
      "Mathematical reasoning and number sense testing",
      "Working memory and processing screen",
      "Written report with targeted strategies",
      "Feedback session (45 min)",
    ],
  },
  {
    name: "Combined autism + ADHD assessment",
    price: "$3,200",
    sessions: "4 sessions",
    includes: [
      "All components of autism and ADHD assessments",
      "Integrated differential formulation",
      "One comprehensive report covering both profiles",
      "Extended feedback session (60 min)",
    ],
  },
];

const sessionFees = [
  { service, fee, duration, note },
];

const travelFees = [
  { distance, fee },
];

const additionalItems = [
  { item, price },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-18">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">Transparent pricing</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We believe families deserve clear information upfront. Below are our standard fees for assessments,
            interventions and mobile visits.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-50 px-4 py-2 text-sm text-mid-teal">
            <Info className="h-4 w-4" />
            <span>All prices are in AUD and include GST.</span>
          </div>
        </div>
      </section>

      {/* Assessment packages */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Assessment packages</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Each assessment is tailored to your child. The fees below cover the full assessment pathway from first
            interview through to feedback.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assessmentPackages.map((pkg) => (
              <Card
                key={pkg.name}
                className="flex flex-col border-border/40 bg-background transition-shadow hover:shadow-md"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground">{pkg.name}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{pkg.sessions}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-3xl font-bold text-foreground">{pkg.price}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link to="/booking">Enquire now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Session fees table */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Therapy & consultation fees</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Individual therapy, parent support and review sessions are billed by the hour.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/40 bg-cream">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-foreground">Service</TableHead>
                  <TableHead className="text-foreground">Duration</TableHead>
                  <TableHead className="text-right text-foreground">Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sessionFees.map((row) => (
                  <TableRow key={row.service} className="border-border/30 hover:bg-background/50">
                    <TableCell className="font-medium text-foreground">
                      {row.service}
                      {row.note && <span className="block text-xs font-normal text-muted-foreground">{row.note}</span>}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{row.duration}</TableCell>
                    <TableCell className="text-right font-semibold text-foreground">{row.fee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Travel fees */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Mobile visit travel fees</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mobile appointments are available within approximately 100 km of Melbourne CBD. Travel is charged as a flat
            rate based on distance from the clinic.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {travelFees.map((row) => (
              <Card key={row.distance} className="border-border/40 bg-background text-center">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">{row.distance}</p>
                  <p className="mt-2 text-2xl font-bold text-foreground">{row.fee}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Travel fees cover the psychologist's return travel time. For locations beyond 100 km, please contact us to
            discuss options.
          </p>
        </div>
      </section>

      {/* Additional items */}
      <section className="bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Additional items</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border/40 bg-cream">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-foreground">Item</TableHead>
                  <TableHead className="text-right text-foreground">Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {additionalItems.map((row) => (
                  <TableRow key={row.item} className="border-border/30 hover:bg-background/50">
                    <TableCell className="font-medium text-foreground">{row.item}</TableCell>
                    <TableCell className="text-right font-semibold text-foreground">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Funding & payment notes */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Funding & payment</h2>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>
              <strong className="text-foreground">NDIS:</strong> We welcome self-managed and plan-managed NDIS
              participants. Please provide your plan details when booking so we can invoice correctly.
            </p>
            <p>
              <strong className="text-foreground">Medicare:</strong> We do not currently offer bulk-billed or Medicare
              rebateable sessions. Private health insurance rebates may apply depending on your cover — please check
              with your insurer.
            </p>
            <p>
              <strong className="text-foreground">Payment:</strong> Assessment packages require a 50% deposit at the
              time of booking, with the balance due prior to the feedback session. Therapy sessions are payable on the
              day.
            </p>
            <p>
              <strong className="text-foreground">Cancellation:</strong> Cancellations with less than 24 hours' notice
              may incur a 50% fee. We understand emergencies happen and will always try to reschedule where possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-navy py-16 text-ivory sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Questions about fees?</h2>
          <p className="mt-4 text-lg opacity-90">
            Every family's situation is different. Contact us for a personalised quote or to discuss funding options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ivory/30 bg-transparent text-ivory hover:bg-ivory/10"
            >
              <Link to="/booking">Request an appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const sessionFees = [
  { service: "Initial consultation / parent interview", fee: "$280", duration: "60 min", note: "" },
  { service: "Individual therapy session", fee: "$240", duration: "50 min", note: "" },
  { service: "Extended therapy session", fee: "$320", duration: "80 min", note: "" },
  { service: "Parent support / review session", fee: "$220", duration: "50 min", note: "" },
  { service: "School / teacher consultation", fee: "$260", duration: "50 min", note: "Phone or video" },
  { service: "Report writing (per hour)", fee: "$260", duration: "—", note: "Charged pro-rata" },
];

const travelFees = [
  { distance: "Within 10 km", fee: "$0" },
  { distance: "10–25 km", fee: "$45" },
  { distance: "25–50 km", fee: "$85" },
  { distance: "50–100 km", fee: "$140" },
];

const additionalItems = [
  { item: "Additional written report copy", price: "$120" },
  { item: "School meeting attendance", price: "$260 / hr" },
  { item: "Phone / email liaison (per 15 min)", price: "$35" },
  { item: "After-hours surcharge (before 8am / after 6pm)", price: "$45" },
];
