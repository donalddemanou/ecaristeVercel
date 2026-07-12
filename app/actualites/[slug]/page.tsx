import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/lib/articles';
import { Icon } from '@/components/Icon';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.pageTitle,
    description: article.pageDescription,
    alternates: { canonical: `/actualites/${article.slug}` },
    openGraph: {
      title: article.pageTitle,
      description: article.pageDescription,
      url: `/actualites/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main>
      <section style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link href="/actualites" className="btn btn--ghost btn--sm" style={{ marginBottom: '1.5rem' }}>
            <Icon name="chevron-left" /> Retour aux actualités
          </Link>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            {article.displayDate}
          </p>
          <h1 style={{ marginTop: '0.5rem' }}>{article.title}</h1>

          <div
            className="photo-placeholder"
            style={{ borderRadius: 'var(--radius-md)', minHeight: '280px', margin: '2rem 0' }}
          >
            <div>
              <Icon name="doc" />
              <br />
              Image de l&apos;article (à intégrer)
            </div>
          </div>

          {article.paragraphs.map((p, i) => (
            <p
              key={i}
              style={i === 0 ? undefined : { marginTop: '1rem' }}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
