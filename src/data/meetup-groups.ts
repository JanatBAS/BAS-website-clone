/** BAS-affiliated Meetup groups whose public events are synced into the calendar. */
export const MEETUP_GROUPS = [
  { urlname: 'bitcoin-meetup-switzerland', city: 'Zurich' },
  { urlname: 'bitcoin-meetup-geneva', city: 'Geneva' },
  { urlname: 'bitcoin-meetup-luzern', city: 'Luzern' },
  { urlname: 'bitcoin-meetup-neuchatel', city: 'Neuchatel' },
  { urlname: 'bitcoin-meetup-basel', city: 'Basel' },
] as const;

export function meetupGroupUrl(urlname: string): string {
  return `https://www.meetup.com/${urlname}/`;
}
