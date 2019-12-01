import React from "react";
import Birthday from "./Birthday";

function BirthdayList() {
  const [birthdays, setBirthdays] = React.useState([]);

  async function fetchBirthdays() {
    const response = await fetch("http://localhost:3001/birthdays");
    const newBirthdays = await response.json();
    setBirthdays(newBirthdays);
  }

  React.useEffect(() => {
    fetchBirthdays();
  }, []);

  return (
    <div>
      {birthdays.map(birthday => (
        <Birthday
          key={birthday.id}
          name={birthday.name}
          date={birthday.date}
          present={birthday.present}
        />
      ))}
    </div>
  );
}

export default BirthdayList;
