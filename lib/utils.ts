import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  const [first, last] = name.split(" ");
  return last !== undefined
    ? `${first.charAt(0).toUpperCase()}${last.charAt(0).toUpperCase()}`
    : first.charAt(0).toUpperCase();
};
