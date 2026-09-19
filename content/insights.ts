// Session 5 content — /insights.
//
// Deliberately empty. The current live site's "blog" recycles service-page
// copy as posts with fabricated bylines and dates; docs/08 calls that out
// explicitly and asks this session not to repeat it. There is no real
// insights content to publish yet, so this ships as an honest empty state
// ("First pieces coming soon.") rather than AI-generated filler. Populate
// this array only when a real, client-approved piece exists — never with
// seed/placeholder data.

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
}

export const INSIGHTS: InsightPost[] = [];
