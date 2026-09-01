import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarCheck, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Nest & Nurture Psychology" },
      {
        name: "description",
        content:
          "Request an appointment with Nest & Nurture Psychology. We offer neurodivergence assessments and interventions for children and adolescents in Melbourne and regional Victoria.",
      },
      { property: "og:title", content: "Book an Appointment | Nest & Nurture Psychology" },
      {
        property: "og:description",
        content:
          "Request an appointment for neurodivergence assessments and interventions for children and adolescents in Melbourne.",
      },
    ],
  }),
  component: BookingPage,
});

const bookingSchema = z.object({
  parentName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  childName: z.string().min(1, "Please enter your child's name"),
  childAge: z.string().min(1, "Please enter your child's age"),
  serviceType: z.string().min(1, "Please select a service"),
  appointmentType: z.string().min(1, "Please select an appointment type"),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (_data: BookingForm) => {
    // In a production app this would call a server function or email API.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-background pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-18">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">Book an appointment</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Request a free 15-minute phone consultation or an assessment appointment. We'll confirm your booking within
            1–2 business days.
          </p>
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border/40 bg-background">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-foreground">Request received</h2>
                  <p className="mt-3 text-muted-foreground">
                    Thank you. We've received your booking request and will contact you within 1–2 business days to
                    confirm the next steps.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    If your enquiry is urgent, please call us on{" "}
                    <a href="tel:0712341234" className="text-primary hover:underline">
                      0712341234
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Your full name</Label>
                      <Input
                        id="parentName"
                        placeholder="Jane Smith"
                        className="bg-background"
                        {...register("parentName")}
                      />
                      {errors.parentName && <p className="text-xs text-destructive">{errors.parentName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="0412 345 678"
                        className="bg-background"
                        {...register("phone")}
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      className="bg-background"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Child's first name</Label>
                      <Input
                        id="childName"
                        placeholder="Charlie"
                        className="bg-background"
                        {...register("childName")}
                      />
                      {errors.childName && <p className="text-xs text-destructive">{errors.childName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Child's age</Label>
                      <Input id="childAge" placeholder="8" className="bg-background" {...register("childAge")} />
                      {errors.childAge && <p className="text-xs text-destructive">{errors.childAge.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Service you're interested in</Label>
                      <Select onValueChange={(value) => setValue("serviceType", value)}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Free 15-min phone consultation</SelectItem>
                          <SelectItem value="autism">Autism assessment</SelectItem>
                          <SelectItem value="adhd">ADHD assessment</SelectItem>
                          <SelectItem value="learning">Learning / dyslexia assessment</SelectItem>
                          <SelectItem value="dyscalculia">Dyscalculia assessment</SelectItem>
                          <SelectItem value="combined">Combined autism + ADHD assessment</SelectItem>
                          <SelectItem value="therapy">Individual therapy</SelectItem>
                          <SelectItem value="parent">Parent support session</SelectItem>
                          <SelectItem value="other">Other / not sure</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.serviceType && <p className="text-xs text-destructive">{errors.serviceType.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred appointment type</Label>
                      <Select onValueChange={(value) => setValue("appointmentType", value)}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clinic">In-clinic (Melbourne CBD area)</SelectItem>
                          <SelectItem value="mobile">Mobile visit at my home/school</SelectItem>
                          <SelectItem value="video">Video appointment</SelectItem>
                          <SelectItem value="phone">Phone appointment</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.appointmentType && (
                        <p className="text-xs text-destructive">{errors.appointmentType.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred days / times</Label>
                    <Input
                      id="preferredTime"
                      placeholder="e.g. Tuesdays after 3pm, Saturday mornings"
                      className="bg-background"
                      {...register("preferredTime")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us a little about your enquiry</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="What brings you to seek support? Any specific questions?"
                      className="bg-background"
                      {...register("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                  >
                    {isSubmitting ? "Sending request..." : "Request appointment"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Quick info */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-background p-4 text-sm text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span>0712341234</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-background p-4 text-sm text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Melbourne CBD + 100 km</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-background p-4 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span>Reply within 1–2 days</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
