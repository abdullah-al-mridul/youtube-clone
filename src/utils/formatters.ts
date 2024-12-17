export function formatViews(views: string): string {
  return views;
}

export function formatTimestamp(timestamp: string): string {
  return timestamp;
}

export function formatSubscribers(subscribers: string): string {
  return subscribers;
}

export function formatNumber(num: number): string {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B"; // Billions
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M"; // Millions
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K"; // Thousands
  }
  return num.toString();
}
