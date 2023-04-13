import EventSummary from "@/components/event-detail/event-summary";
import { getEventById, getFeaturedEvents } from "@/../helper/api-util";
import { Fragment } from "react";
import EventLogistics from "./../../components/event-detail/event-logistics";
import EventContent from "./../../components/event-detail/event-content";
import ErrorAlert from "@/components/ui/ErrorAlert";

import Head from "next/head";
import Comments from "@/components/input/comments";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <Fragment>
        <Head>
          <title> {event.name}</title>
          <meta name="description" content={event.company}></meta>
        </Head>
        <ErrorAlert>
          <p>کاربر مورد نظر یافت نشد</p>;
        </ErrorAlert>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.name}</title>
        <meta
          name="description"
          content="نمایش یکی از کاربرانی که در حال جستجوی شغل مناسب می گردند"
        ></meta>
      </Head>
      <EventSummary title={event.name} />
      <EventLogistics
        id={event.id}
        company={event.company}
        avatar={event.avatar}
        name={event.name}
        address={event.address}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}
export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id + "" } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailPage;
