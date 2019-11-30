import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IdInput = styled.input`
  width: 80%;
`;

const NameInput = styled.input`
  width: 80%;
`;

const DateInput = styled.input`
  width: 80%;
`;

const BirthdayPresentInput = styled.input`
  width: 80%;
`;

const Done = styled.div`
  margin-bottom: 20px;
`;

const CheckBoxContainer = styled.div`
  height: 50px;
  color: black;
`;

const DoneCheckBox = styled.input`
  height: 20px;
  width: 20px;
  border: 1px black;
`;

function NewBirthday() {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [done, setDone] = React.useState(null);
  const [present, setPresent] = React.useState("");
  const [id, setId] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(name, date, present, id, done);
    await fetch("http://localhost3001/birthdays", {
      method: "POST",
      headers: {
        "Contend-Type": "application/json"
      },
      body: JSON.stringify({ name, date, done })
    });
    setName("");
    setDate("");
    setPresent("");
    setId("");
    setDone(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Birthday</h2>
      <NameInput
        autofocus
        type="text"
        placeholder="Who is your birthday buddy?"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <DateInput
        autofocus
        type="date"
        value={date}
        onChange={event => setDate(event.target.value)}
      />

      <BirthdayPresentInput
        autofocus
        type="text"
        placeholder="What is your buddy's birthday wish?"
        value={present}
        onChange={event => setPresent(event.target.value)}
      />

      <IdInput
        autofocus
        type="number"
        placeholder="Id-number?"
        value={id}
        onChange={event => setPresent(event.target.value)}
      />

      <h3>Done getting a birthday present?</h3>
      <Done>
        <CheckBoxContainer>
          <DoneCheckBox type="checkbox" />
        </CheckBoxContainer>
      </Done>
      <button>Submit</button>
    </Form>
  );
}

export default NewBirthday;
