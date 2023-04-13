import Image from "next/image";
import DateIcon from "../icons/date-icon";
import Button from "../ui/Button";
import classes from "./event-item.module.css";

import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { company, avatar, id, name, address } = props;
  const fullAddress = `${address.country} - ${address.city} - ${address.street}
   - ${address.alley} - ${address.number}`;
  // const readableDate = new Date(date).toLocaleDateString("en-US", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });
  // const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <Image src={avatar} alt={company} width={240} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{company}</h2>
          <div className={classes.date}>
            <DateIcon />
            <item>{name}</item>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{fullAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>بررسی کاربر</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
