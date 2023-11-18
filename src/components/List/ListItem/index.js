import { useRef, useState } from "react";
import binIcon from "./../../../img/binIcon.svg";
import { Li, Input, Label, Button } from "./style";

function ListItem({ task, deleteTask }) {
  const checkboxRef = useRef(null);
  const [isDone, setIsDone] = useState(false);

  function taskDone() {
    setIsDone((prev) => !prev);
  }

  function handler() {
    deleteTask(task);
    setIsDone(false)
  }

  return (
    <Li>
      <Input type="checkbox" ref={checkboxRef} id={task} onClick={taskDone} />
      <Label className={isDone && "checked"} for={task}>
        {task}
      </Label>
      {isDone && (
        <Button type="button" onClick={handler}>
          <img src={binIcon} alt="Trash bin" />
        </Button>
      )}
    </Li>
  );
}

export default ListItem;
