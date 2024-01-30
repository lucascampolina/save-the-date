"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Financial Services",
        href: "/docs/primitives/financial-services",
        description:
            "Unlock digital success. Expert guidance in Banking Services, Investment Management and Trade Solutions.",
    },
    {
        title: "Telecommunications",
        href: "/docs/primitives/telecom",
        description:
            "Empowering Your Digital Future. Relevant projects in Wireless Communication, Internet Connectivity, Voice and Data Services.",
    },
    {
        title: "Innovative Software Solutions",
        href: "/docs/primitives/software-solutions",
        description:
            "Custom Software Solutions, Cloud Integration and Technology Stack Selection.",
    },
    {
        title: "Consulting Services",
        href: "/docs/primitives/consulting-services",
        description: "Software Architecture, Code Review, Legacy System Modernization, Migration to Cloud and more.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu className="font-roboto">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus:ring focus:ring-violet-100"
                                        href="/"
                                    >
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-2xl font-medium">
                                            Who I am
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            I'm a software engineer with 10+ years of experience in building highly scalable and reliable systems.                                            
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Site Architecture" className="hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus:ring focus:ring-violet-100">
                                Built using a event driven architeture.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Stacks" className="hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus:ring focus:ring-violet-100">
                                Some of stacks I mastered and other not too much.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Resume" className="hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus:ring focus:ring-violet-100">
                                Get my resume in PDF from a S3 bucket.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem className="hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus:ring focus:ring-violet-100"
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
