import type { Metadata } from 'next';
import '../../styles/components/company.css';
import { INSIGHTS } from '@/content/insights';

export const metadata: Metadata = {
  title: 'Insights | GeoClim East Africa',
  description: "Insights from GeoClim's work across East Africa.",
};

// Evidence discipline (docs/08, .claude/rules/content-discipline.md): the
// current live site recycles its service pages as fake blog posts. This
// page launches honestly empty instead — no generated placeholder posts.
// INSIGHTS is an empty array (content/insights.ts) until a real,
// client-approved piece exists.
export default function InsightsPage() {
  return (
    <main>
      <section>
        <div className="wrap co-header">
          <span className="eyebrow">Insights</span>
          <h1>Insights from GeoClim&rsquo;s work across East Africa</h1>

          {INSIGHTS.length === 0 ? (
            <div className="insights-empty">
              <p>First pieces coming soon.</p>
            </div>
          ) : (
            <ul style={{ listStyle: 'none', margin: '32px 0 0', padding: 0 }}>
              {INSIGHTS.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
