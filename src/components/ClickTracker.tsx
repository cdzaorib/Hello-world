"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/track";

/** Delegação única: qualquer elemento com data-track="nome" e data-track-*="valor" gera evento. */
export function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const { track, ...rest } = el.dataset;
      const params: Record<string, string> = {};
      for (const [k, v] of Object.entries(rest)) if (k.startsWith("track") && v) params[k.slice(5).toLowerCase()] = v;
      trackEvent(track ?? "click", params);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
