import { Users, Cloud, Menu } from "lucide-react"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center ml-4">
        {/* Logo and Brand */}
        <div className="mr-4 flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <Cloud className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CloudUsers
            </span>
            <span className="text-xs text-muted-foreground">Management System</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="#"
              className="flex items-center space-x-2 text-foreground/60 transition-colors hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              <span>Users</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
