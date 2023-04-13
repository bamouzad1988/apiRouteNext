import Image from "next/image";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import { Fragment } from "react";

function EventLogistics(props) {
  const { address, avatar, name, company } = props;
  const fullAddress = `${address.country} - ${address.city} - ${address.street}
   - ${address.alley} - ${address.number}`;
  // const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // });
  // const addressText = address.replace(', ', '\n');

  return (
    <Fragment>
      <h1 className={classes.header}>{company}</h1>
      <section className={classes.logistics}>
        <div className={classes.image}>
          <Image src={avatar} alt={name} width={400} height={400} />
        </div>
        <ul className={classes.list}>
          <LogisticsItem icon={DateIcon}>
            <time>{name}</time>
          </LogisticsItem>
          <LogisticsItem icon={AddressIcon}>
            <address>{fullAddress}</address>
          </LogisticsItem>
        </ul>
      </section>
    </Fragment>
  );
}

export default EventLogistics;
