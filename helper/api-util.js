import axios from "axios";
// export async function getAllEvents() {
//   const response = await fetch("https://jsonplaceholder.ir/users");
//   const data = await response.json();

//   const events = [];

//   for (const key in data) {
//     events.push({
//       id: key,
//       ...data[key],
//     });
//   }
//   return events;
// }
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.id < 5);
}

export async function getEventById(id) {
  let respone = await fetch(`https://jsonplaceholder.ir/users/${id}`);
  return await respone.json();
}

export async function getAllEvents() {
  let respone = await fetch(`https://jsonplaceholder.ir/users`);
  return await respone.json();
}

export async function getFilteredEvents(dateFilter) {
  const { cityParam, countryParam } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    return (
      event.address.city === cityParam && event.address.country === countryParam
    );
  });
  return await filteredEvents;
}
