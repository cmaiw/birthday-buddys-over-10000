import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Tajawal", sans-serif;
`;

const IdInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
`;

const NameInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
`;

const DateInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
`;

const BirthdayPresentInput = styled.input`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
`;

const Done = styled.div`
  margin-bottom: 20px;
`;

const CheckBoxContainer = styled.div`
  height: 50px;
  color: black;
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
`;

const DoneCheckBox = styled.input`
  height: 20px;
  width: 20px;
  border: 1px black;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 4px;
  padding: 2px;
`;

const SubmitButton = styled.button`
  display: flex;
  height: 20px;
  padding: 4px;
  margin-bottom: 20px;
  font-family: "Tajawal", sans-serif;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.background};
  border-radius: 8px;
  border: none;
  font-family: "Tajawal", sans-serif;
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
      body: JSON.stringify({ name, date, present, id, done })
    });

    function isChecked() {
      class Checkbox extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            isChecked: true
          };
        }
        toggleChange = () => {
          this.setState({
            isChecked: !this.state.isChecked
          });
        };
      }
    }

    setName("");
    setDate("");
    setPresent("");
    setId("");
    setDone(isChecked(this.setState()));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Birthday:</h2>
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
        type="key"
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
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
}

export default NewBirthday;
