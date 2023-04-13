import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getFilteredEvents } from "@/helper/api-util";
import Head from "next/head";

import { Fragment } from "react";

function FilteredEventsPage(props) {
  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>فیلتر معتبر نمی باشد.</p>
        </ErrorAlert>
        <Button className="center" link="/events">
          نمایش تمام کاربران
        </Button>
      </Fragment>
    );
  }
  const pageHead = (
    <Head>
      <title> کاربان فیلتر شده</title>
      <meta
        name="description"
        content={`   و${props.filter.country}  ${props.filter.city} همه ی کاربران   `}
      ></meta>
    </Head>
  );
  const filteredEvents = props.events;
  if (!filteredEvents || filteredEvents.length < 1) {
    return (
      <Fragment>
        {pageHead}
        <ErrorAlert>
          <p>برای این فیلتر نتیجه ای یافت نشد</p>
        </ErrorAlert>
        <Button className="center" link="/events">
          نمایش همه ی کاربران
        </Button>
      </Fragment>
    );
  }
  return (
    <Fragment>
      {pageHead}
      <ResultsTitle city={props.filter.city} country={props.filter.country} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const city = filterData[1];
  const country = filterData[0];

  let cityType = typeof city;
  let countryType = typeof country;
  if (cityType !== "string" || countryType !== "string") {
    return {
      prpos: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }
  const filteredEvents = await getFilteredEvents({
    cityParam: city,
    countryParam: country,
  });

  return {
    props: {
      events: filteredEvents,
      filter: {
        city: city,
        country: country,
      },
    },
  };
}
export default FilteredEventsPage;
