import React from "react";
import Link from "next/link";
import {
  CalendarIcon,
  HomeIcon,
  LucideProps,
  MailIcon,
  PencilIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { IconBaseProps } from "react-icons/lib";
// import { ModeToggle } from "@/components/mode-toggle";

// export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  calendar: (
    props: React.JSX.IntrinsicAttributes &
      Omit<LucideProps, "ref"> &
      React.RefAttributes<SVGSVGElement>
  ) => <CalendarIcon {...props} />,
  email: (
    props: React.JSX.IntrinsicAttributes &
      Omit<LucideProps, "ref"> &
      React.RefAttributes<SVGSVGElement>
  ) => <MailIcon {...props} />,
  linkedin: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <FaLinkedin {...props} className="h-6 w-6" />
  ),
  github: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <FaGithub {...props} className="h-6 w-6" />
  ),
  leetcode: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <SiLeetcode {...props} className="h-6 w-6" />
  ),
  uiverse: (props: React.JSX.IntrinsicAttributes & IconBaseProps) => (
    <MdDesignServices {...props} className="h-6 w-6" />
  ),
};

const DATA = {
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    // { href: "#", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SouravBandyopadhyay",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/souravbandyopadhyay/",
        icon: Icons.linkedin,
      },
      // X: {
      //   name: "X",
      //   url: "#",
      //   icon: Icons.x,
      // },
      leetcode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Sourav_280598/",
        icon: Icons.leetcode,
      },
      uiverse: {
        name: "UiVerse",
        url: "https://uiverse.io/profile/SouravBandyopadhyay",
        icon: Icons.uiverse,
      },
      email: {
        name: "Send Email",
        url: "mailto:souravb.1998@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

export default function DockDemo() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-10 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />

        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-8 rounded-full"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
