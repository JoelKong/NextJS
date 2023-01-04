import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
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
  };
}

export default HomePage;
