import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandLeetcode,
  IconCode,
} from "@tabler/icons-react";
import type { ReactNode } from "react";

const iconMap: Record<string, (className?: string) => ReactNode> = {
  github: (className) => <IconBrandGithub className={className} aria-hidden="true" />,
  linkedin: (className) => <IconBrandLinkedin className={className} aria-hidden="true" />,
  x: (className) => <IconBrandX className={className} aria-hidden="true" />,
  leetcode: (className) => <IconBrandLeetcode className={className} aria-hidden="true" />,
  geeksforgeeks: (className) => <IconCode className={className} aria-hidden="true" />,
};

export function getPlatformIcon(platform: string, className?: string): ReactNode {
  return iconMap[platform]?.(className) ?? null;
}
