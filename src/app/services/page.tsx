import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Bot, Code, Coffee } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Aura Development Services</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Custom Discord Bots
            </CardTitle>
            <CardDescription>Tailored bots for your Discord server</CardDescription>
          </CardHeader>
          <CardContent>
            <p>We offer custom Discord bots with a wide range of functionalities:</p>
            <ul className="list-disc pl-4 mt-2">
              <li>Moderation tools</li>
              <li>Custom commands</li>
              <li>Server management features</li>
              <li>And more!</li>
            </ul>
            <p className="mt-4">Prices range from $10 to $150, depending on the size and complexity of the bot.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Custom Script Commissions
            </CardTitle>
            <CardDescription>Bespoke scripts for your FiveM server</CardDescription>
          </CardHeader>
          <CardContent>
            <p>We develop custom scripts tailored to your specific needs:</p>
            <ul className="list-disc pl-4 mt-2">
              <li>Unique gameplay features</li>
              <li>Server management tools</li>
              <li>Integration with other resources</li>
              <li>Performance optimization</li>
            </ul>
            <p className="mt-4">Prices range from $45 to $150, based on the script's size and functionality.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Premium Support Subscription
          </CardTitle>
          <CardDescription>Get priority support for all your FiveM resources</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Our Premium Support package includes:</p>
          <ul className="list-disc pl-4 mt-2">
            <li>Priority assistance for any FiveM resource</li>
            <li>Extended support hours</li>
            <li>Direct access to our expert team</li>
            <li>Regular check-ins and proactive issue resolution</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> Support may be limited for escrowed resources or those we're not licensed to access.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="https://auradevelopment.tebex.io/package/6671071" target="_blank" rel="noopener noreferrer">
              Subscribe to Premium Support
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coffee className="h-5 w-5" />
            Donations
          </CardTitle>
          <CardDescription>Support our work and help us grow</CardDescription>
        </CardHeader>
        <CardContent>
          <p>If you appreciate our work and want to support us, you can make a donation:</p>
          <ul className="list-disc pl-4 mt-2">
            <li>
              PayPal:{" "}
              <a href="mailto:Davidsleiman@aol.com" className="text-blue-500 hover:underline">
                Davidsleiman@aol.com
              </a>
            </li>
            <li>
              Ko-fi:{" "}
              <a
                href="https://ko-fi.com/auradevelopment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                https://ko-fi.com/auradevelopment
              </a>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="https://ko-fi.com/auradevelopment" target="_blank" rel="noopener noreferrer">
              Donate on Ko-fi
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

