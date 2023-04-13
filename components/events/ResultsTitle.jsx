import Button from "../ui/button";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { city, country } = props;

  return (
    <section className={classes.title}>
      <h1>کاربران در {city + "-" + country}</h1>
      <Button link="/events">نمایش همه ی کاربران</Button>
    </section>
  );
}

export default ResultsTitle;
