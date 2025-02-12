import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Aura Network News</h1>
        <Button variant="outline" asChild>
          <Link href="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* QB-CityHall UI Overhaul Announcement */}
      <Card className="bg-zinc-900 text-white mb-8">
        <CardHeader>
          <CardTitle>QB-CityHall UI Overhaul Released</CardTitle>
          <p className="text-sm text-gray-400">Posted on {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">🏙️ QB-CityHall UI Overhaul</h2>
          <p className="mb-4">We&apos;re excited to announce a fresh update to the QB-CityHall interface!</p>
          <h3 className="text-xl font-semibold mb-2">What&apos;s New:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Sleek, modern design that&apos;s easy on the eyes</li>
            <li>Smoother transitions between pages</li>
            <li>Responsive layout that works on various screen sizes</li>
            <li>New color scheme with gradients for that extra pop</li>
            <li>Intuitive navigation for Identity and Job sections</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Key Improvements:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Compact design that doesn&apos;t hog your screen</li>
            <li>Cleaner code structure for easier customization</li>
            <li>Improved performance with optimized CSS and JS</li>
          </ul>
          <p className="mb-4">
            This update is perfect for server owners looking to give their players a better City Hall experience.
            Whether you&apos;re dishing out IDs or helping citizens find jobs, this UI&apos;s got you covered.
          </p>
          <p className="mb-4">
            We encourage you to try it out and let us know what you think! Pull requests and issues are welcome on our
            GitHub repository.
          </p>
          <div className="flex space-x-4 mb-4">
            <Button asChild variant="outline">
              <Link
                href="https://github.com/auradevelopment5m/qb-cityhall-redesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://streamable.com/7289db" target="_blank" rel="noopener noreferrer">
                Watch Preview
              </Link>
            </Button>
          </div>
          <p className="text-sm text-gray-400">
            Your support means a lot to us. Consider starring the repository if you find it useful!
          </p>
        </CardContent>
      </Card>

      {/* New Services Page Announcement */}
      <Card className="bg-zinc-900 text-white mb-8">
        <CardHeader>
          <CardTitle>Aura Development Launches New Services Page</CardTitle>
          <p className="text-sm text-gray-400">Posted on {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Aura Development is excited to announce the launch of our comprehensive services page, offering a range of
            professional development and support options for the FiveM community.
          </p>
          <h2 className="text-xl font-semibold mb-2">Available Services</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              <span className="font-semibold">Custom Discord Bots:</span> Tailored bot solutions ranging from $10 to
              $150, featuring moderation tools, custom commands, and server management capabilities.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Custom Script Commissions:</span> Bespoke FiveM scripts priced between $45
              and $150, including unique gameplay features and performance optimization.
            </li>
            <li className="mb-2">
              <span className="font-semibold">Premium Support Subscription:</span> Enhanced support package with
              priority assistance, extended hours, and direct access to our development team.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">Supporting Our Development</h2>
          <p className="mb-4">
            We&apos;ve also introduced multiple ways for our community to support our ongoing development efforts:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Direct PayPal donations</li>
            <li>Ko-fi support platform</li>
          </ul>
          <div className="mt-4">
            <Button asChild>
              <Link href="/services">View Services Page</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Previous VWarden Announcement */}
      <Card className="bg-zinc-900 text-white mb-8">
        <CardHeader>
          <CardTitle>Aura Development Introduces VWarden to Combat Leaking</CardTitle>
          <p className="text-sm text-gray-400">Posted on {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Aura Development has taken a significant step in protecting the FiveM development community by introducing
            VWarden, an advanced anti-leaking tool, to its Discord server.
          </p>
          <h2 className="text-xl font-semibold mb-2">Why VWarden?</h2>
          <p className="mb-4">
            The decision to implement VWarden stems from a commitment to support and protect developers in the FiveM
            community. Leaking has become a prevalent issue, demotivating developers and impacting their livelihoods.
            VWarden aims to create a safer environment for creators and maintain the integrity of the development
            community.
          </p>
          <h2 className="text-xl font-semibold mb-2">What is VWarden?</h2>
          <p className="mb-4">
            VWarden is a sophisticated tool developed by a group of developers dedicated to combating leaking, cheating,
            and other forms of ToS violations. It actively monitors and prevents unauthorized distribution of
            proprietary code and resources.
          </p>
          <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              User Verification: Members can check their status and ensure they&apos;re not associated with known
              leaking communities.
            </li>
            <li>Server Checking: Ability to verify the legitimacy of FiveM-related Discord servers.</li>
            <li>Comprehensive Database: Maintains a list of servers involved in reselling or leaking activities.</li>
          </ul>
          <p className="mb-4">Users can interact with VWarden using the following commands:</p>
          <pre className="bg-zinc-800 p-4 rounded-md overflow-x-auto">
            <code>
              {`/checkself -- View your own status
/checkuser -- Check the status of any Aura Development guild member
/checkserver (guild id) -- Verify the status of specific servers
/badservers -- Display a list of all known problematic servers`}
            </code>
          </pre>
          <p className="mt-4">
            Aura Development remains committed to fostering a fair and motivating environment for FiveM developers. The
            introduction of VWarden is a testament to this commitment, ensuring that hard work is protected and the
            community can thrive.
          </p>
          <p className="mt-4">Stay tuned for more updates and new releases coming soon from Aura Development!</p>
          <p className="mt-4">
            For more details, please refer to the original announcement in our Discord server:
            <a
              href="https://discord.com/channels/1157574156930527342/1157574156930527345/1335599673766969356"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 ml-1"
            >
              View Discord Announcement
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

