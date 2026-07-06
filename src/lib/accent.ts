export interface Planet {
  key: string;
  body: string;
  day: string;
  symbol: string;
}

/** Ordered by JS getDay(): the 7 weekdays are named after these bodies. */
export const PLANETS: Planet[] = [
  { key: "sun", body: "Sun", day: "Sunday", symbol: "☉" },
  { key: "moon", body: "Moon", day: "Monday", symbol: "☽" },
  { key: "mars", body: "Mars", day: "Tuesday", symbol: "♂" },
  { key: "mercury", body: "Mercury", day: "Wednesday", symbol: "☿" },
  { key: "jupiter", body: "Jupiter", day: "Thursday", symbol: "♃" },
  { key: "venus", body: "Venus", day: "Friday", symbol: "♀" },
  { key: "saturn", body: "Saturn", day: "Saturday", symbol: "♄" },
];

/**
 * Runs inline in <head> before paint so the day's accent applies without a
 * flash of the fallback green. A ?accent=<planet> query param previews any
 * palette for that visit. Must stay dependency-free ES5.
 */
export const accentInitScript = `(function(){try{var p=["sun","moon","mars","mercury","jupiter","venus","saturn"];var q=new URLSearchParams(location.search).get("accent");document.documentElement.setAttribute("data-accent",q&&p.indexOf(q)>-1?q:p[new Date().getDay()])}catch(e){}})()`;

export function todaysPlanet(): Planet {
  return PLANETS[new Date().getDay()];
}
