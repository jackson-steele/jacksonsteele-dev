export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, params);
  }
}
