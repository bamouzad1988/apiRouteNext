import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/helper/api-util";
import { Fragment } from "react";
import EventsSearch from "./../../components/events/EventsSearch";
import { useRouter } from "next/router";
import Head from "next/head";

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (country, city) => {
    const fullPath = `/events/${country}/${city}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <Head>
        <title> همه ی کاربران</title>
        <meta
          name="description"
          content="همه ی کاربرانی که در حال جستجوی شغل مناسب می گردند"
        ></meta>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  let allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
export default AllEventsPage;
