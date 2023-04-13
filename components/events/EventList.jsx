import EventItem from "./EventItem";

import classes from "./event-list.module.css";

function EventList(props) {

  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            company={event.company}
            avatar={event.avatar}
            name={event.name}
            address={event.address}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
