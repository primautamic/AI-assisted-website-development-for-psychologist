import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Nest & Nurture Psychology" },
      {
        name: "description",
        content:
          "Contact Nest & Nurture Psychology by phone, email or form. We serve children and adolescents in Melbourne CBD and regional Victoria.",
      },
      { property: "og:title", content: "Contact | Nest & Nurture Psychology" },
      {
        property: "og:description",
        content:
          "Contact Nest & Nurture Psychology by phone, email or form for neurodivergence assessments and interventions in Melbourne.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-18">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">Contact us</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Have a question or ready to book? We'd love to hear from you. Reach out by phone, email or the form below.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact details */}
            <div className="space-y-6 lg:col-span-1">
              <Card className="border-border/40 bg-background">
                <CardContent className="p-6">
                  <Phone className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Phone</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Mon–Fri, 9am–5pm AEST</p>
                  <a
                    href="tel:0712341234"
                    className="mt-3 inline-block text-lg font-medium text-foreground hover:text-primary hover:underline"
                  >
                    0712341234
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border/40 bg-background">
                <CardContent className="p-6">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted-foreground">We aim to reply within 1–2 business days</p>
                  <a
                    href="mailto:admin@nnpsychology.com.au"
                    className="mt-3 inline-block text-lg font-medium text-foreground hover:text-primary hover:underline"
                  >
                    admin@nnpsychology.com.au
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border/40 bg-background">
                <CardContent className="p-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Location</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Melbourne CBD area, Victoria
                    <br />
                    Mobile visits within 100 km
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <Card className="border-border/40 bg-background lg:col-span-2">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-foreground">Send us a message</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
                <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your name</Label>
                      <Input id="name" placeholder="Jane Smith" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" placeholder="0412 345 678" className="bg-background" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" placeholder="jane@example.com" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Booking enquiry / Assessment question / General" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us a little about how we can help..."
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Send message
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    This form sends a request to our admin team. For urgent matters, please call us directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
