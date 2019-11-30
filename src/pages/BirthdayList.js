import React from "react";

function BirthdayList() {
  const [birthdays, setBirthdays] = React.useState([]);

  async function fetchBirthdays() {
    const response = await fetch("http://localhost:1111/birthdays");
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
          note={birthday.note}
        />
      ))}
    </div>
  );
}

export default BirthdayList;
