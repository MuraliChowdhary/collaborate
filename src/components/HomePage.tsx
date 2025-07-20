'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Users,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

// Mock Shadcn components for this self-contained example
const ShadcnInput = ({...props}) => <input className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...props} />;
const ShadcnTextarea = ({...props}) => <textarea className="flex min-h-[80px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" {...props} />;

const InnovateHubPlatform = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const navigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  }

  const Navbar = () => (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/80">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="mr-8">
          <button
            onClick={() => navigate('home')}
            className="flex items-center space-x-3 text-xl font-bold"
          >
            <FlaskConical className="h-8 w-8 text-blue-600" />
            <span className="text-gray-900 dark:text-white">InnovateHub</span>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button
            onClick={() => navigate('home')}
            className={`transition-colors hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
          >
            Home
          </button>
          <button
            onClick={() => navigate('about')}
            className={`transition-colors hover:text-blue-600 ${currentPage === 'about' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
          >
            About
          </button>
          <button
            onClick={() => navigate('contact')}
            className={`transition-colors hover:text-blue-600 ${currentPage === 'contact' ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
          >
            Contact
          </button>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hidden sm:inline-flex"
          >
            Log In
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:inline-flex"
          >
            Get Started Free
          </Button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-4 p-4">
                 <button onClick={() => navigate('home')} className="text-left">Home</button>
                 <button onClick={() => navigate('about')} className="text-left">About</button>
                 <button onClick={() => navigate('contact')} className="text-left">Contact</button>
                 <Button variant="ghost">Log In</Button>
                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started Free</Button>
            </nav>
        </div>
      )}
    </header>
  );

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 sm:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
              🚀 Research Collaboration Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Accelerate Research from{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Lab to Launch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect academic researchers, industry innovators, and funding partners to build breakthrough solutions that shape the future through strategic collaboration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
            >
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-lg rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Explore Success Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">850+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Industry Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">$2.8B</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Funding Secured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Four simple steps to transform your research into real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10" />,
                title: "Discover & Connect",
                description: "AI matches your project with ideal partners across academia, industry, and funding agencies.",
                color: "bg-blue-500"
              },
              {
                icon: <Handshake className="h-10 w-10" />,
                title: "Collaborate Seamlessly",
                description: "Integrated workspace for secure communication, file sharing, and project management.",
                color: "bg-green-500"
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: "Secure Funding",
                description: "Access funding opportunities with streamlined application tools and expert guidance.",
                color: "bg-purple-500"
              },
              {
                icon: <Rocket className="h-10 w-10" />,
                title: "Launch & Scale",
                description: "Transition to market or publication with IP support and commercialization resources.",
                color: "bg-orange-500"
              },
            ].map((step, index) => (
              <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                <CardHeader className="text-center pb-4">
                  <div className={`${step.color} p-4 rounded-2xl w-fit mx-auto mb-4 text-white`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -left-3 bg-black dark:bg-white text-white dark:text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Every Innovator</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Tailored solutions for every stakeholder in the research ecosystem</p>
          </div>

          <Tabs defaultValue="academics" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl">
              <TabsTrigger value="academics" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-sm">
                <FlaskConical className="h-5 w-5 mr-2" /> Academic Researchers
              </TabsTrigger>
              <TabsTrigger value="industry" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-sm">
                <Building className="h-5 w-5 mr-2" /> Industry Partners
              </TabsTrigger>
              <TabsTrigger value="funders" className="rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-sm">
                <DollarSign className="h-5 w-5 mr-2" /> Funding Agencies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="academics">
              <Card className="border-2 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Accelerate Your Research Impact</CardTitle>
                  <CardDescription className="text-lg">
                    Connect with industry leaders, access resources, and turn your research into real-world solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        "AI-powered partner matching",
                        "Access to proprietary datasets",
                        "Streamlined publication workflows",
                        "Grant application assistance"
                      ].map((point, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-inner">
                      <h4 className="font-bold mb-3">Success Story</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                        "Connected with MedTech partners in under a week. Our cancer detection research is now in clinical trials."
                      </p>
                      <p className="text-xs mt-2 text-blue-600">- Dr. Sarah Kim, MIT</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                    Start Collaborating <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="industry">
              <Card className="border-2 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Drive Innovation Forward</CardTitle>
                  <CardDescription className="text-lg">
                    Source cutting-edge research and collaborate with brilliant minds to solve your R&D challenges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        "Scout emerging technologies",
                        "Secure IP & licensing deals",
                        "Build custom R&D teams",
                        "Access university resources"
                      ].map((point, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-inner">
                      <h4 className="font-bold mb-3">Success Story</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                        "Discovered a game-changing AI algorithm that accelerated our product roadmap by 2 years."
                      </p>
                      <p className="text-xs mt-2 text-green-600">- James Chen, MedTech Corp</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                    Find Research Partners <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="funders">
              <Card className="border-2 shadow-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Invest in Breakthrough Research</CardTitle>
                  <CardDescription className="text-lg">
                    Discover high-potential projects and track impact through transparent monitoring tools
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        "Curated deal-flow of projects",
                        "Impact and progress monitoring",
                        "Simplified grant management",
                        "Portfolio analytics dashboard"
                      ].map((point, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-inner">
                      <h4 className="font-bold mb-3">Impact Metrics</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Projects Funded</span>
                          <span className="font-bold">1,247</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Success Rate</span>
                          <span className="font-bold text-green-600">87%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Avg. ROI</span>
                          <span className="font-bold text-purple-600">340%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                    Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black dark:bg-white text-white dark:text-black py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of researchers, innovators, and funders who are building the future through strategic collaboration
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 px-8 py-4 text-lg rounded-full"
            >
              Start Your Project Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white px-8 py-4 text-lg rounded-full"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/50 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
              🌟 About InnovateHub
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Empowering Research
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Collaboration Worldwide
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe in the power of authentic connections. Our mission is to help researchers, innovators, and funders grow their impact through strategic partnerships and meaningful cross-collaboration.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To accelerate scientific discovery and technological innovation by creating the world's most intelligent research collaboration platform.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We connect brilliant minds across academia, industry, and funding organizations to solve humanity's greatest challenges through collaborative research and strategic partnerships.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Building Bridges Between</h3>
                <div className="space-y-6">
                  {[
                    { icon: <FlaskConical className="h-8 w-8 text-blue-600" />, title: "Academic Excellence", desc: "Top-tier research institutions and brilliant researchers" },
                    { icon: <Building className="h-8 w-8 text-green-600" />, title: "Industry Innovation", desc: "Forward-thinking companies and R&D teams" },
                    { icon: <DollarSign className="h-8 w-8 text-purple-600" />, title: "Strategic Funding", desc: "Government agencies, foundations, and private investors" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Drives Us Forward */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Our core values shape every decision we make and every feature we build</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12 text-blue-600" />,
                title: "Creator First",
                description: "We put researchers and innovators at the center of everything, prioritizing user experience and success."
              },
              {
                icon: <Award className="h-12 w-12 text-green-600" />,
                title: "Quality Over Quantity",
                description: "We carefully vet all partners and projects to ensure high-quality, meaningful collaborations."
              },
              {
                icon: <Users className="h-12 w-12 text-purple-600" />,
                title: "Community Driven",
                description: "Our platform grows through the success of our community, fostering genuine relationships and collaboration."
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-orange-600" />,
                title: "Innovation",
                description: "We continuously improve our AI matching algorithms and collaboration tools to deliver exceptional results."
              }
            ].map((value, i) => (
              <Card key={i} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="mx-auto bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl w-fit mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Growth */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Milestones & Growth</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">From a simple idea to a thriving community of innovative researchers</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

              {[
                {
                  year: "2021",
                  title: "Foundation",
                  description: "InnovateHub was founded with the vision of connecting academic researchers worldwide.",
                  stats: "50+ early adopters"
                },
                {
                  year: "2022",
                  title: "First 100 Partners",
                  description: "Celebrated our milestone of 100 research partners across various disciplines.",
                  stats: "100+ research partners, $5M funding secured"
                },
                {
                  year: "2023",
                  title: "AI Integration",
                  description: "Launched our proprietary AI matching system, revolutionizing partner discovery.",
                  stats: "500+ active users, 95% match success rate"
                },
                {
                  year: "2024",
                  title: "Global Expansion",
                  description: "Expanded to serve researchers in 50+ countries with localized support.",
                  stats: "2,500+ researchers, $2.8B total funding"
                },
                {
                  year: "2025",
                  title: "Industry Leadership",
                  description: "Became the leading platform for research collaboration with enterprise partnerships.",
                  stats: "5,000+ users, 850+ industry partners"
                }
              ].map((milestone, i) => (
                <div key={i} className="relative flex items-center mb-12">
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="ml-16 w-full">
                    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-bold">
                            {milestone.year}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{milestone.stats}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-green-900/20 dark:via-teal-900/20 dark:to-cyan-900/20">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-6">
                    <span className="inline-flex items-center rounded-full border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/50 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300">
                        🤝 Get in Touch
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    Let's Build the Future
                    <br />
                    <span className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                        Together
                    </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Have a question, a partnership idea, or just want to say hello? We'd love to hear from you. Our team is ready to assist you on your collaborative journey.
                </p>
            </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <Card className="border-0 shadow-2xl bg-white dark:bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">Send Us a Message</CardTitle>
                            <CardDescription>We typically respond within 24 hours.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                        <ShadcnInput id="name" placeholder="Dr. Jane Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                        <ShadcnInput id="email" type="email" placeholder="jane.doe@university.edu" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <ShadcnInput id="subject" placeholder="Partnership Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <ShadcnTextarea id="message" placeholder="Tell us how we can help..." rows={5} />
                                </div>
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                                    Send Message <Send className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-12">
                        <h3 className="text-3xl font-bold">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-xl">
                                    <Mail className="h-8 w-8 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-300">General Inquiries: <a href="mailto:hello@innovatehub.com" className="text-blue-600 hover:underline">hello@innovatehub.com</a></p>
                                    <p className="text-gray-600 dark:text-gray-300">Support: <a href="mailto:support@innovatehub.com" className="text-blue-600 hover:underline">support@innovatehub.com</a></p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-xl">
                                    <Phone className="h-8 w-8 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-300">Main Office: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
                                    <p className="text-gray-600 dark:text-gray-300">Mon-Fri, 9am - 5pm EST</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-xl">
                                    <MapPin className="h-8 w-8 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold">Our Headquarters</h4>
                                    <p className="text-gray-600 dark:text-gray-300">123 Innovation Drive</p>
                                    <p className="text-gray-600 dark:text-gray-300">Cambridge, MA 02139, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
  
  const Footer = () => (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                        <FlaskConical className="h-8 w-8 text-blue-600" />
                        <span className="text-xl font-bold text-gray-900 dark:text-white">InnovateHub</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">The leading platform for research collaboration and innovation.</p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Platform</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Discover</a></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">For Academics</a></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">For Industry</a></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">For Funders</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li><button onClick={() => navigate('about')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">About Us</button></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Careers</a></li>
                        <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Press</a></li>
                        <li><button onClick={() => navigate('contact')} className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</button></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Stay Updated</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Join our newsletter for the latest in research innovation.</p>
                    <div className="flex">
                        <ShadcnInput type="email" placeholder="your@email.com" className="rounded-r-none"/>
                        <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} InnovateHub, Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        <Navbar />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default InnovateHubPlatform;
