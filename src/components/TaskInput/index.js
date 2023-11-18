import React, { useRef } from "react";
import pencilIcon from "./../../img/pencilIcon.svg";
import { TaskInputWrapper, Input, Button } from "./style";

function TaskInput({ setTaskList }) {
  const inputRef = React.useRef(null);
  function addTask() {
    const value = inputRef.current.value;
    if (value === "") return;
    setTaskList((arr) => [...arr, value]);
    inputRef.current.value = "";
  }

  return (
    <TaskInputWrapper>
      <Button type="button" onClick={addTask}>
        <img src={pencilIcon} alt="pencil" />
      </Button>
      <Input type="text" ref={inputRef} placeholder="Write a task..." />
    </TaskInputWrapper>
  );
}

export default TaskInput;
