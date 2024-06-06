import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const units = [
    { name: 'second', seconds: 1 },
    { name: 'minute', seconds: 60 },
    { name: 'hour', seconds: 60 * 60 },
    { name: 'day', seconds: 60 * 60 * 24 },
    { name: 'week', seconds: 60 * 60 * 24 * 7 },
    { name: 'month', seconds: 60 * 60 * 24 * 30 },
    { name: 'year', seconds: 60 * 60 * 24 * 365 },
  ];

  for (let i = units.length - 1; i >= 0; i--) {
    const unit = units[i];
    const diffInUnits = Math.floor(diffInSeconds / unit.seconds);
    if (diffInUnits >= 1) {
      const unitName = diffInUnits > 1 ? `${unit.name}s` : unit.name;
      return `${diffInUnits} ${unitName} ago`;
    }
  }

  return 'just now';
};

export function formatNumber(num: number): string {
  let result: string;

  if (num >= 1000000) {
      result = (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
      result = (num / 1000).toFixed(1) + "K";
  } else {
      result = num.toString();
  }

  return result;
}

export const getJoinedDate = (date: Date): string => {
  // Get the month and year from the date
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Return the formatted string
  return `${month} ${year}`;
}
