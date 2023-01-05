import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve"
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      //firebase
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
