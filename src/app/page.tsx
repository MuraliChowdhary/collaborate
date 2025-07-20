import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Search,
  FlaskConical,
  Building,
  DollarSign,
  ArrowRight,
  Rocket,
  Handshake,
  FileText,
  Target,
} from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

const Navbar = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <FlaskConical className="h-6 w-6" />
                    <span className="hidden font-bold sm:inline-block">
                        InnovateHub
                    </span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Discover</Link>
                    <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Solutions</Link>
                    <Link href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
                </nav>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-2">
                 <Button variant="ghost">Log In</Button>
                 <Button>Sign Up Free</Button>
                 <ThemeToggle />
            </div>
        </div>
    </header>
);

const HeroSection = () => (
  <section className="container text-center py-24 sm:py-32">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
          Accelerate Research from Lab to Launch
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          The ultimate platform connecting academic researchers, industry innovators, and funding partners to build the future, together.
      </p>
      <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
              <Link href="#">Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button size="lg" variant="outline">
              Explore Collaborations
          </Button>
      </div>
  </section>
);


const HowItWorksSection = () => {
    const steps = [
        { icon: <Search className="h-8 w-8 text-primary" />, title: "Discover & Connect", description: "Our AI matches your project with ideal academic, industry, and funding partners." },
        { icon: <Handshake className="h-8 w-8 text-primary" />, title: "Collaborate Seamlessly", description: "Use our integrated workspace for secure communication, file sharing, and project management." },
        { icon: <FileText className="h-8 w-8 text-primary" />, title: "Secure Funding", description: "Find and apply for grants with tools that streamline the application process." },
        { icon: <Rocket className="h-8 w-8 text-primary" />, title: "Commercialize & Publish", description: "Transition your research to market or publication with dedicated IP and legal support." },
    ];

    return (
        <section className="bg-muted/40 py-20 sm:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Your Four Steps to Impact</h2>
                    <p className="text-muted-foreground mt-2 max-w-xl mx-auto">A streamlined workflow designed for high-impact research collaboration.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow bg-background">
                            <CardHeader>
                                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                    {step.icon}
                                </div>
                                <CardTitle>{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const StakeholderSection = () => (
    <section className="container py-20 sm:py-28">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">A Platform for Every Innovator</h2>
            <p className="text-muted-foreground mt-2">Tailored solutions for every stakeholder in the research ecosystem.</p>
        </div>
        <Tabs defaultValue="academics" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="academics"><FlaskConical className="h-4 w-4 mr-2" /> Academic Researchers</TabsTrigger>
                <TabsTrigger value="industry"><Building className="h-4 w-4 mr-2" /> Industry Partners</TabsTrigger>
                <TabsTrigger value="funders"><DollarSign className="h-4 w-4 mr-2" /> Funding Agencies</TabsTrigger>
            </TabsList>
            <TabsContent value="academics">
                <FeatureCard
                    title="Find Your Perfect Match"
                    description="Connect with industry leaders for clinical validation, access specialized equipment, and find co-authors to elevate your research papers."
                    points={["AI-powered partner matching", "Access to proprietary datasets", "Streamlined publication workflows"]}
                />
            </TabsContent>
            <TabsContent value="industry">
                <FeatureCard
                    title="Drive Innovation Forward"
                    description="Source cutting-edge research directly from top universities. Collaborate with brilliant minds to solve your toughest R&D challenges and accelerate your product pipeline."
                    points={["Scout emerging technologies", "Secure IP & licensing deals", "Build custom R&D teams"]}
                />
            </TabsContent>
            <TabsContent value="funders">
                <FeatureCard
                    title="Invest in Vetted Opportunities"
                    description="Discover high-potential research projects aligned with your mission. Track project milestones and impact metrics through a transparent dashboard."
                    points={["Curated deal-flow of projects", "Impact and progress monitoring", "Simplified grant management"]}
                />
            </TabsContent>
        </Tabs>
    </section>
);

interface FeatureCardProps extends ComponentProps<typeof Card> {
    title: string;
    description: string;
    points: string[];
}
const FeatureCard = ({ title, description, points, ...props }: FeatureCardProps) => (
    <Card className="mt-6 border-2" {...props}>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            {points.map((point, index) => (
                <div key={index} className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                </div>
            ))}
            <Button variant="link" className="px-0 pt-4">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </CardContent>
    </Card>
);

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Dr. Sarah Kim",
            role: "AI Researcher, MIT",
            quote: "This platform connected us with the perfect MedTech partner in under a week. The collaboration tools made the clinical validation process incredibly efficient.",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "James Chen",
            role: "R&D Director, MedTech Corp",
            quote: "We discovered a game-changing AI algorithm for cancer detection here. It has accelerated our product roadmap by at least two years.",
             avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ];

    return (
        <section className="bg-muted/40 py-20 sm:py-28">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Trusted by Leaders in Research & Industry</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <Card key={i} className="bg-background">
                            <CardContent className="pt-6">
                                <p className="mb-4">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};


const CTASection = () => (
    <section className="container py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Research?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join the waitlist to get early access to the platform that's redefining scientific and technological collaboration.
        </p>
        <Button size="lg" asChild>
            <Link href="#">Join the Waitlist Today <Rocket className="ml-2 h-5 w-5" /></Link>
        </Button>
    </section>
);

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <StakeholderSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

const Footer = () => (
    <footer className="border-t">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} InnovateHub, Inc. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            </div>
        </div>
    </footer>
)
