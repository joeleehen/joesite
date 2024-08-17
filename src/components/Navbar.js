import { EnvelopeIcon } from "@heroicons/react/24/solid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Rightnav from "./Rightnav";

export default function Navbar() {
    return (
    <header className="bg-gray-800 sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap sm:pt-0 p-3 flex-col md:flex-row">
            <Rightnav />
            <nav className="ml-auto">
                    <a href="mailto:joeylhendrix@gmail.com">
                        <EnvelopeIcon className="size-4 inline-block text-gray-400 hover:text-purple-300" />
                    </a>
                    <a href="https://github.com/joeleehen" target="_blank" className="text-gray-400 text-2xl">
                        <GitHubIcon className="hover:text-purple-300" style={{ fontSize: "1.25rem", marginTop: "3px", marginRight: "0.50rem", marginLeft: "0.60rem" }}/>
                    </a>
                    <a href="https://linkedin.com/in/joeleehen" target="_blank" className="text-gray-400 text-2xl">
                        <LinkedInIcon className="hover:text-purple-300 size-4" style={{ fontSize: "1.25rem", marginTop: "3px" }} />
                    </a>
            </nav>
        </div>
    </header>
    )
}
