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
              User Verification: Members can check their status and ensure they're not associated with known leaking
              communities.
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

