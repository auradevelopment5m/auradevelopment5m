import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function RulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Community Guidelines & Support Rules</h1>

      {/* Support Entitlement Notice */}
      <Alert className="mb-8 border-yellow-600 bg-yellow-600/10">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          Support entitlement varies based on resource type. Paid resources include priority support, while free
          resources have limited community support. All sales are final.
        </AlertDescription>
      </Alert>

      {/* Support Tiers */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              Free Resources
            </CardTitle>
            <CardDescription>Community support only</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Basic community assistance when available</li>
              <li>No guaranteed response time</li>
              <li>Access to public documentation</li>
              <li>No direct developer support</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Paid Resources
            </CardTitle>
            <CardDescription>Full support included</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Priority support channel access</li>
              <li>24-48 hour response time</li>
              <li>Direct developer assistance</li>
              <li>Access to private documentation</li>
              <li>Bug fixes and updates</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-500" />
              Premium Support
            </CardTitle>
            <CardDescription>Available for purchase</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Priority ticket handling</li>
              <li>4-hour response time during business hours</li>
              <li>Direct developer contact</li>
              <li>Custom modifications available</li>
              <li>Installation assistance</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Discord Rules */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Discord Rules</h2>
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="respect">
                <AccordionTrigger>1. Respect & Professionalism</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Treat all members with respect</li>
                    <li>No harassment, discrimination, or hate speech</li>
                    <li>Maintain professional communication</li>
                    <li>No excessive swearing or inappropriate language</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support">
                <AccordionTrigger>2. Support Guidelines</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Use appropriate support channels</li>
                    <li>Provide detailed information about your issue</li>
                    <li>No support for leaked/stolen resources</li>
                    <li>Follow the support ticket format</li>
                    <li>Be patient while waiting for responses</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="content">
                <AccordionTrigger>3. Content & Discussion</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>No advertising without permission</li>
                    <li>Keep discussions in appropriate channels</li>
                    <li>No NSFW or inappropriate content</li>
                    <li>No spamming or excessive messaging</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="resources">
                <AccordionTrigger>4. Resource Usage</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>No sharing of paid resources</li>
                    <li>No requesting cracked/leaked content</li>
                    <li>Report bugs through proper channels</li>
                    <li>Follow license terms for all resources</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Support Policies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Support Policies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>What We Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Official resource functionality</li>
                <li>Installation issues</li>
                <li>Configuration assistance</li>
                <li>Bug reports and fixes</li>
                <li>Feature requests for paid resources</li>
                <li>Documentation clarification</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What We Don't Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Modified resource issues</li>
                <li>Server configuration unrelated to our resources</li>
                <li>Third-party resource conflicts</li>
                <li>Leaked or stolen resources</li>
                <li>Generic FiveM server issues</li>
                <li>Custom development without agreement</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Additional Information</h2>
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sales-final">
                <AccordionTrigger>Sales Policy</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    All sales are final. We do not offer refunds for any purchases. Please ensure you read all product
                    descriptions and requirements before making a purchase.
                  </p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Carefully review product details before purchasing</li>
                    <li>Test free versions (if available) before buying premium resources</li>
                    <li>Reach out to our support team with any pre-purchase questions</li>
                    <li>Once purchased, we offer support to ensure the resource works as advertised</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="response-times">
                <AccordionTrigger>Response Times</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Premium Support: 4 hours (business hours)</li>
                    <li>Paid Resources: 24-48 hours</li>
                    <li>Free Resources: Best effort basis</li>
                    <li>Business Hours: Monday-Friday, 9 AM - 9 PM GMT +3:00</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact">
                <AccordionTrigger>Contact Information</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Discord: Join our server for the fastest support</li>
                    <li>Email: info@auracity.store</li>
                    <li>Tebex: Through our store's support system</li>
                    <li>GitHub: For bug reports and feature requests</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
