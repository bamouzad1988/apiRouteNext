import { getFeaturedEvents } from "./../helper/api-util";
import EventList from "./../components/events/EventList";

import Head from "next/head";
import NewsletterRegistration from "@/components/input/newsletter-registration";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title> جستجوی کاربران</title>
        <meta
          name="description"
          content="جستجوی کاربرانی که در حال جستجوی شغل مناسب می گردند"
        ></meta>
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  let data = await getFeaturedEvents();

  return {
    props: {
      events: data,
    },
    revalidate: 1800,
  };
}

export default HomePage;
