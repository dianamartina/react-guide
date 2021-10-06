import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import "./CourseInput.css";

// 2. component FormControl with styled components
// import styled from "styled-components";
// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")}; /* for 3. adding dynamic css using styled component with props  */
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   &.invalid input {
//     border-color: red;
//   }
// `;

// component CourseInput
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* 1. adding dynamic css */}

      {/*
          <div className={`form-control ${!isValid ? "invalid" : ""}`}> 
           <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> 
         <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}

      {/* 2. adding dynamic css using styled component*/}
      {/* <FormControl className={!isValid ? "invalid" : ""}> */}

      {/* 3. adding dynamic css using styled component with props*/}
      {/* <FormControl invalid={!isValid}>        
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl> */}

      {/* 4. adding dynamic css using CSS modules */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
