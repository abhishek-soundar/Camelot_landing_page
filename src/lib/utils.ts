import { clsx, type ClassValue } from "clsx";

/**
 * Utility for merging CSS classes gracefully.
 * Even though we're using Vanilla CSS for most components, 
 * this is useful if we use Tailwind utilities for layout.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
