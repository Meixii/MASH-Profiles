import { ArrowRightIcon } from "@radix-ui/react-icons"
import { ArrowDown2, Mouse } from "iconsax-react"
import type { CMSProfileCard } from "@/lib/cmsProfiles"
import Link from "next/link"

interface SocialLinksProps {
  profile?: CMSProfileCard | null
}

export default function SocialLinks({ profile }: SocialLinksProps) {
  const contactEmailLink =
    profile?.content?.contact?.links?.find((link) => link.label.toLowerCase() === "email")?.href ||
    "#contact"
  const isMailLink = contactEmailLink.startsWith("mailto:")

  const socialContactLinks = profile?.content?.contact?.links?.filter(
    (link) => link.label.toLowerCase() !== "email"
  ) || []

  const getSocialIcon = (label: string, href: string) => {
    const lowerLabel = label.toLowerCase()
    const lowerHref = href.toLowerCase()

    if (lowerLabel.includes("github") || lowerHref.includes("github")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="fill-pageTextMuted hover:fill-accentColor"
        >
          <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
        </svg>
      )
    }

    if (lowerLabel.includes("linkedin") || lowerHref.includes("linkedin")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-pageTextMuted hover:fill-accentColor"
        >
          <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
        </svg>
      )
    }

    if (lowerLabel.includes("twitter") || lowerLabel.includes("x") || lowerHref.includes("twitter") || lowerHref.includes("x.com")) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-pageTextMuted hover:fill-accentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      )
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-pageTextMuted hover:fill-accentColor"
      >
        <path d="M13.12 17.023l-4.199-2.29a1 1 0 1 1 .968-1.749l4.197 2.289a1 1 0 0 1-.966 1.75zm-.63-5.483L8.322 9.25a1.001 1.001 0 0 1 1.06-1.696l4.17 2.289a1 1 0 1 1-1.062 1.697z"></path>
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
      </svg>
    )
  }

  return (
    <>
      <div className="fixed z-10 right-4 bottom-[5%] md:bottom-[20%]">
        <div className="flex flex-col gap-6 items-center">
          {socialContactLinks.map((link, index) => (
            <Link
              key={index}
              title={`${profile?.displayName}'s ${link.label}`}
              target="_blank"
              aria-label={`${profile?.displayName}'s ${link.label}`}
              rel="noopener noreferrer"
              href={link.href}
              className="scale-110 rounded link-outline"
            >
              {getSocialIcon(link.label, link.href)}
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 group flex flex-col gap-2 items-center left-4">
        <Link
          href={contactEmailLink}
          target={isMailLink ? "_blank" : undefined}
          rel={isMailLink ? "noopener noreferrer" : undefined}
          style={{
            writingMode: "vertical-lr",
          }}
          aria-label="Contact me"
          className="flex text-xs group-hover:text-accentColor font-light tracking-[0.3em] items-center gap-2 text-pageTextMuted"
        >
          Contact me
        </Link>
        <div className="h-24 w-[0.4px] bg-pageTextMuted group-hover:bg-accentColor "></div>
      </div>

      <div className="hidden md:block absolute bottom-4 right-4">
        <Link
          href="#project"
          aria-label="project"
          className="flex items-center gap-2 text-pageTextMuted"
        >
          <span className="text-sm tracking-widest">View Project</span>
          <ArrowRightIcon />
        </Link>
      </div>

      <Link
        href="#about"
        aria-label="about"
        className="absolute animate-bounce text-pageTextMuted hover:text-accentColor cursor-pointer bottom-4 left-[50%] -translate-x-1/2"
      >
        <div className="flex flex-col gap-1 items-center">
          <Mouse size={24} />
          <ArrowDown2 size={14} />
        </div>
      </Link>
    </>
  )
}
