import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/context";

const AddUser = () => {
  const throwBack = useNavigate();
  const { data, setData } = useUser();
  const {name, setName} = useState('')
  const {email, setEmail} = useState('')
  const {body, setBody} = useState('')
  const nameValue = useRef("");
  const emailValue = useRef("");
  const bodyValue = useRef("");

  const nameChange = (evt) => {
    setName(evt.target.value);
  }
  const emailChange = (evt) => {
    setEmail(evt.target.value);
  }
  const bodyChange = (evt) => {
    setBody(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newObj = {
      name: nameValue.current.value,
      email: emailValue.current.value,
      body: bodyValue.current.value
    };
    console.log(newObj);

    setData([...data, newObj]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={nameValue}
        placeholder="Please enter your name"
        onChange={nameChange}
        required
      />
      <input
        type="email"
        ref={emailValue}
        placeholder="Please enter your email"
        onChange={emailChange}
        required
      />
      <input
        type="text"
        onChange={bodyChange}
        ref={bodyValue}
        placeholder="Description"
        required
      />
      <button type="submit" onClick={() => throwBack("/home")}>
        Add
      </button>
    </form>
  );
};

export default AddUser;
