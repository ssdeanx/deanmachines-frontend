import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

interface MobileNavProps {
  items?: {
    title: string
    href: string
    disabled?: boolean
  }[]
}

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open mobile menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-full max-w-[300px] pr-0">
          <SheetHeader className="px-4">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col space-y-2 px-4">
              {items?.map((item, index) => (
                <MobileLink
                  key={index}
                  href={item.href}
                  pathname={pathname}
                  setIsOpen={setIsOpen}
                  disabled={item.disabled}
                >
                  {item.title}
                </MobileLink>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  pathname: string
  setIsOpen: (open: boolean) => void
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        pathname === href && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}
