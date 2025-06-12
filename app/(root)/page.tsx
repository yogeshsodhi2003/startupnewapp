import Box from "@/components/Box";
import Card from "@/components/Card";
import Search from "@/components/Search";

import { STARTUPS_QUERY } from "@/sanity/lib/query";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home(props: {
  searchParams: Promise<{ q?: string }>;
}) {
  const searchParams = await props.searchParams;
  const rawQuery = searchParams.q?.trim();
  const params = { search: rawQuery || "" };
  const heading = "The Stage for Startups to Pitch, Shine, and Scale"

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  return (
    <>
      <div className="heading">
        <Box heading={heading} />
      </div>

      <div className="flex  items-center flex-col p-8">
        <Search />
        <div className="w-full text-left mt-5 ">
        {rawQuery ? (
          <h1 className="head-text">Here's the result for {rawQuery}</h1>
        ) : (
          <h1 className="head-text">Trending Startups</h1>
        )}
        </div>
      </div>
      <Card posts={posts || []} />
    </>
  );
}
