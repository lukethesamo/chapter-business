type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter((x): x is string | number => Boolean(x) && typeof x !== 'boolean')
    .join(' ');
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}
