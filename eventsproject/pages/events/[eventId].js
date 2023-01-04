import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <h1>Event Detail</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  return {
    props: {
      selectedEvent: eventId,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  return {
    paths: { params: { eventId: "e1" } },
    fallback: false,
  };
}

export default EventDetailPage;
