import { useRef } from "react";
import Button from "../ui/Button";
import Classes from "./events-search.module.css";

function EventsSearch(props) {
  const countryInputRef = useRef();
  const cityInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const selectedCountry = countryInputRef.current.value;
    const selectedCity = cityInputRef.current.value;

    props.onSearch(selectedCountry, selectedCity);
  };

  return (
    <form className={Classes.form} action="submit" onSubmit={submitHandler}>
      <div className={Classes.controls}>
        {/* country */}
        <div className={Classes.control}>
          <label htmlFor="country">کشور</label>
          <select name="" id="country" ref={countryInputRef}>
            <option value="ایران">ایران</option>
            <option value="سایر">سایر</option>
          </select>
        </div>
        {/* city */}
        <div className={Classes.control}>
          <label htmlFor="city">شهر</label>
          <select name="" id="city" ref={cityInputRef}>
            <option value="تبریز">تبریز</option>
            <option value="ارومیه">ارومیه</option>
            <option value="اردبیل">اردبیل</option>
            <option value="اصفهان">اصفهان</option>
            <option value="کرج">کرج</option>
            <option value="ایلام">ایلام</option>
            <option value="بوشهر">بوشهر</option>
            <option value="تهران">تهران</option>
            <option value="شهرکرد">شهرکرد</option>
            <option value="1بیرجند">بیرجند</option>
            <option value="مشهد">مشهد</option>
            <option value="بجنورد">بجنورد</option>
            <option value="اهواز">اهواز</option>
            <option value="زنجان">زنجان</option>
            <option value="سمنان">سمنان</option>
            <option value="زاهدان">زاهدان</option>
            <option value="شیراز">شیراز</option>
            <option value="قم">قم</option>
            <option value="سنندج">سنندج</option>
            <option value="کرمان">کرمان</option>
            <option value="کرمانشاه">کرمانشاه</option>
            <option value="یاسوج">یاسوج</option>
            <option value="گرگان">گرگان</option>
            <option value="رشت">رشت</option>
            <option value="خرم‌آباد">خرم‌آباد</option>
            <option value="ساری">ساری</option>
            <option value="اراک">اراک</option>
            <option value="بندرعباس">بندرعباس</option>
            <option value="همدان">همدان</option>
            <option value="یزد">یزد</option>
          </select>
        </div>
      </div>
      <Button>جستجوی کاربران</Button>
    </form>
  );
}
export default EventsSearch;
