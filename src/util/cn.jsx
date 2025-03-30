// import { clsx, type ClassValue } from "clsx";
import { clsx, } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @param {...import("clsx").ClassArray} inputs
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
