import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="flex w-screen">
        <div className="flex h-full w-full ">
          <div className="container mx-auto text-center py-24">
            <h1 className="text-4xl font-bold text-white">
              {siteConfig.title}
            </h1>
            <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
