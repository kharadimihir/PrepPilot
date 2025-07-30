import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="grid-background">
        <HeroSection />

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Powerful Features for Your Career Growth
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the tools that will accelerate your professional
                journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Trusted by Professionals Worldwide
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  50+
                </h3>
                <p className="text-muted-foreground font-medium">
                  Industries Covered
                </p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  1000+
                </h3>
                <p className="text-muted-foreground font-medium">
                  Interview Questions
                </p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  95%
                </h3>
                <p className="text-muted-foreground font-medium">
                  Success Rate
                </p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-primary">
                  24/7
                </h3>
                <p className="text-muted-foreground font-medium">AI Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Four simple steps to accelerate your career growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-6 group"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What our user's say section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl text-center font-bold tracking-tight mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonial.map((testimonial, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 flex shrink-0">
                          <Image
                            width={40}
                            height={40}
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="rounded-full object-cover border-2 border-primary/20"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-muted-foreground italic relative">
                          <span className="text-3xl text-primary absolute -top-4 -left-2">
                            &quot;
                          </span>
                          {testimonial.quote}
                          <span className="text-3xl text-primary absolute -bottom-4">
                            &quot;
                          </span>
                        </p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our platform
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="cursor-pointer">{faq.question}</AccordionTrigger>
                  <AccordionContent className="cursor-pointer">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
                )
              })}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Ready to Accelerate Your Carrer Section */}

        <section className="w-full">
          <div className="mx-auto py-24 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Carrer?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Join thousands of proffessionals who are advancing their careers with AI-powered guidance.
              </p>
              <Link href="/dashboard" passHref>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-11 mt-5 animate-bounce cursor-pointer"
                >
                  Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
