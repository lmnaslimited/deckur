import Link from "next/link"
import { ArrowRight, FileText, Zap, Shield } from "lucide-react"
import { Button } from "@repo/ui/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <FileText className="h-6 w-6" />
            <span className="text-xl">LMNAs Cloud Solutions</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/deck" className="text-sm font-medium hover:underline underline-offset-4">
              PDF Preview
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/deck">View Demo</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Professional PDF Generation for Your Business
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Transform your data into beautifully designed, professional PDFs with our cloud-based generator.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                    <Link href="/deck">
                      Try PDF Preview <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[300px] rounded-lg bg-white p-6 shadow-xl md:h-[450px] md:w-[400px]">
                  <div className="flex h-full flex-col">
                    <div className="mb-4 h-6 w-24 rounded bg-gray-200" />
                    <div className="mb-6 h-8 w-full rounded bg-gray-200" />
                    <div className="space-y-3">
                      <div className="h-4 w-full rounded bg-gray-200" />
                      <div className="h-4 w-full rounded bg-gray-200" />
                      <div className="h-4 w-3/4 rounded bg-gray-200" />
                    </div>
                    <div className="mt-6 space-y-3">
                      <div className="h-4 w-full rounded bg-gray-200" />
                      <div className="h-4 w-full rounded bg-gray-200" />
                      <div className="h-4 w-2/3 rounded bg-gray-200" />
                    </div>
                    <div className="mt-auto flex justify-end">
                      <div className="h-10 w-24 rounded bg-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful PDF Generation</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our cloud-based solution offers everything you need to create professional PDFs for your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Lightning Fast</h3>
                  <p className="text-gray-500">
                    Generate complex PDFs in seconds with our optimized cloud infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Secure & Reliable</h3>
                  <p className="text-gray-500">Your data is encrypted and protected with enterprise-grade security.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Customizable</h3>
                  <p className="text-gray-500">
                    Fully customize your PDFs with templates, branding, and dynamic content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to transform your document workflow?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Try our PDF generator today and see how it can streamline your business processes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
                <Link href="/deck">
                  View PDF Preview <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about our PDF generator? Our team is here to help.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button asChild className="w-full bg-black text-white hover:bg-gray-800">
                  <Link href="mailto:contact@lmnas.com">Email Us</Link>
                </Button>
                <p className="text-xs text-gray-500">We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200 bg-white">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1 text-lg font-semibold">
              <FileText className="h-5 w-5" />
              <span>LMNAs Cloud Solutions</span>
            </div>
            <p className="text-sm text-gray-500">Professional PDF generation for your business</p>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} LMNAs Cloud Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
