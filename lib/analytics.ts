declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, string>) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
