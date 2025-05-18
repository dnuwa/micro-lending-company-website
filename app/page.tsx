import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Wallet,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MobileNav } from "@/components/mobile-nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Wallet className="h-6 w-6 text-emerald-600" /> */}
            <Image
              src="/firm-mini-logo.png?height=50&width=50"
              alt="Small business owner"
              width={50}
              height={50}
              className="rounded-lg object-cover"
              priority
            />

            <span className="text-xl font-bold">(FIRFT) LTD</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#home"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#team"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Our Team
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-emerald-600 transition-colors"
            >
              Contact Us
            </a>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button variant="outline" className="hidden md:flex">
              Log In
            </Button> */}
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Apply Now
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:pt-5 bg-gradient-to-b from-white to-emerald-50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Image
                  src="/firm-Logo.png?height=550&width=550"
                  alt="Small business owner"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  FIRM FOUNDATION FOR TOMORROW (FIRFT) LTD
                </h1>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                  Fast and Reliable Financial Services in Uganda
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are a Registered and Licensed Financial Institution
                  regulated by Uganda Microfinance Regulatory Authority (UMRA)
                  with an experience of over 8 years in providing Fast and
                  Reliable financial services.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/5ed8dcaaea17c.jpg?height=550&width=550"
                  alt="Small business owner"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                  priority
                />
                {/* <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Small business owner"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Vision & Mission
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to position the business among the leading
                  brands in the Micro lending industry in the whole of Uganda
                  within the next 5 years of operations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/mission_statement_363905479.jpg?height=400&width=400"
                alt="Our mission"
                width={400}
                height={400}
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Vision</h3>
                      <p className="text-muted-foreground">
                        Provide accessible and affordable financial services in
                        Uganda.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Mission</h3>
                      <p className="text-muted-foreground">
                        To design and deliver high quality Micro Credit services
                        to individuals, SME's and corporate clients at an
                        affordable rate.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div>
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Motto</h3>
                      <p className="text-muted-foreground">
                        "We listen and act"
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-12 bg-emerald-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Financial Solutions Tailored For You
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of micro-lending products designed to meet
                  your specific needs and help you achieve your goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <DollarSign className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Quick Emergency Loans</CardTitle>
                  <CardDescription>
                    Fast access to funds for urgent needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Loans ranging from UGX 100,000 to 10,000,000 with 10%
                    interest rate and monthly repayment terms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Globe className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Salary Loans</CardTitle>
                  <CardDescription>
                    Convenient loans for employed individuals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Loans ranging from UGX 100,000 to 15,000,000 with 2.0%
                    interest rate and monthly repayment terms.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Group Loans</CardTitle>
                  <CardDescription>
                    Community-based lending for collective projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Loans ranging from UGX 200,000 to 800,000 with 25% interest
                    rate and 6 months repayment period.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Heart className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Business Loans</CardTitle>
                  <CardDescription>
                    Support for entrepreneurs and small businesses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Loans ranging from UGX 200,000 to 800,000 with 25% interest
                    rate and 6 months repayment period.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <MessageCircle className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Agricultural Loans</CardTitle>
                  <CardDescription>
                    Financial support for farming activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Loans ranging from UGX 500,000 to 8,000,000 with 25%
                    interest rate and 6 months repayment period.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Clock className="h-10 w-10 text-emerald-600 mb-2" />
                  <CardTitle>Other Services</CardTitle>
                  <CardDescription>
                    Additional financial solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Agency Banking and Mobile Money services through
                    partnerships with Stanbic Bank, Centenary Bank, Airtel
                    Money, and MTN.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our simple and transparent process makes it easy to get the
                  funding you need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Prepare Documents</h3>
                <p className="text-muted-foreground">
                  Gather required documents:
                </p>
                <ul className="list-disc text-start">
                  <li>Copy of National Identity card/ Employer Passport</li>
                  <li>Active Bank Account</li>
                  <li>LC1 letter</li>
                  <li>Security</li>
                  <li>2 Guarantors</li>
                  <li>Most recent Passport Photo</li>
                  <li>Bank Statement with most recent Salary deposit</li>
                  <li>Letter of undertaking from the employer</li>
                  <li>A copy of an appointment Letter</li>
                  <li>Pay slip for the last 3 months</li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Apply for Loan</h3>
                <p className="text-muted-foreground">
                  Submit your application with all required documents and wait
                  for our quick review process.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Receive Funds</h3>
                <p className="text-muted-foreground">
                  Once approved, funds are disbursed directly to your account
                  with clear repayment terms.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Start Your Application
              </Button>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-12 bg-emerald-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Success Stories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our clients about how FIRFT has helped them achieve
                  their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="/placeholder.svg?height=64&width=64"
                        alt="SSemakula Hakeem"
                      />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">SSemakula Hakeem</h3>
                      <p className="text-sm text-muted-foreground">
                        Small Bakery Owner
                      </p>
                      <p className="text-muted-foreground">
                        "FIRFT helped me expand my bakery when traditional banks
                        wouldn't give me a chance. Now I have three employees
                        and my business is thriving!"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="/placeholder.svg?height=64&width=64"
                        alt="Nakilyowa Hadija"
                      />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Nakilyowa Hadija</h3>
                      <p className="text-sm text-muted-foreground">
                        Organic Farmer
                      </p>
                      <p className="text-muted-foreground">
                        "The agricultural loan from FIRFT allowed me to invest
                        in better equipment and expand my farm. My crop yield
                        has increased by 40%!"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src="/placeholder.svg?height=64&width=64"
                        alt="Natukunda Sharoon"
                      />
                      <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Natukunda Sharoon</h3>
                      <p className="text-sm text-muted-foreground">
                        Handmade Jewelry Business
                      </p>
                      <p className="text-muted-foreground">
                        "Not only did FIRFT provide the capital I needed, but
                        their financial education program helped me manage my
                        business finances more effectively."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="w-full py-12 md:py-24 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet The People Behind FIRFT
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our dedicated team of professionals is committed to helping
                  you achieve financial success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Pichan John Martin"
                  />
                  <AvatarFallback>PJM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Pichan John Martin</h3>
                  <p className="text-sm text-muted-foreground">
                    Executive Director
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Wembabazi Pamela"
                  />
                  <AvatarFallback>WP</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Wembabazi Pamela</h3>
                  <p className="text-sm text-muted-foreground">
                    General Manager
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Ssenabulya Roggers"
                  />
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Ssenabulya Roggers</h3>
                  <p className="text-sm text-muted-foreground">
                    Finance Officer
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Katusabe Judith"
                  />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Katusabe Judith</h3>
                  <p className="text-sm text-muted-foreground">
                    Company Secretary
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Katusabe Judith"
                  />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">
                    Vanessa Marriet Ayiorwoth
                  </h3>
                  <p className="text-sm text-muted-foreground">-</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Katusabe Judith"
                  />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">
                    Valerie Santi Afoyorwoth
                  </h3>
                  <p className="text-sm text-muted-foreground">-</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Katusabe Judith"
                  />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Wembabazi Pamela</h3>
                  <p className="text-sm text-muted-foreground">
                    General manager
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Katusabe Judith"
                  />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Mbabazi rehema</h3>
                  <p className="text-sm text-muted-foreground">
                    Recovery Officer
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Katusabe Judith"
                  />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Tusiime Amos</h3>
                  <p className="text-sm text-muted-foreground">
                    Recovery Officer
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Katusabe Judith"
                  />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Ssenabulya Roggers</h3>
                  <p className="text-sm text-muted-foreground">
                    Finance Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-12 bg-emerald-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get In Touch
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to start your application? Reach out
                  to our team today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Call Us</h3>
                    <p className="text-muted-foreground">
                      +256 779 015 366 / +256 701 733 943 / +256 777 538 070
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Port Lodge Building, Plot 63, Masindi Port Road - Masindi
                      Municipality, P.O.Box 295, Masindi - Uganda
                    </p>
                  </div>
                </div>
                {/* <div className="pt-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Office location"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div> */}
              </div>
              {/* <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First Name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your financial needs..."
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                </Button>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/firm-mini-logo.png?height=50&width=50"
              alt="Small business owner"
              width={50}
              height={50}
              className="rounded-lg object-cover"
              priority
            />
            <span className="text-lg font-bold">
              FIRM FOUNDATION FOR TOMORROW (FIRFT) LTD
            </span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 FIRM FOUNDATION FOR TOMORROW (FIRFT) LTD. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
