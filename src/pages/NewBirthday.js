import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameInput = styled.input`
  width: 80%;
`;

const Done = styled.div`
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  height: 50px;
  color: black;
`;

const StyledCheckbox = styled.checkbox`
  width: 20px;
  height: 20px;
`;

function NewBirthday() {
  const [name, setName] = React.useState("");
  const [done, setDone] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    await fetch("http://localhost3333/birthdays", {
      method: "POST",
      headers: {
        "Contend-Type": "application/json"
      },
      body: JSON.stringify({ name, done })
    });
    setName("");
    setDone(null);
  }

  const DoneCheckbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={done}>
      <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Add Birthday</h2>
      <NameInput
        autofocus
        type="text"
        placeholder="who is your birthday buddy?"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <h3>Done getting a birthday present?</h3>
      <Done>
        <DoneCheckbox />
      </Done>
      <button>Submit</button>
    </Form>
  );
}

export default NewBirthday;
