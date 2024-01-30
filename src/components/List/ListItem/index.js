import binIcon from "./../../../img/binIcon.svg";
import { StyledLi, StyledInput, StyledLabel, StyledButton } from "./style";

function ListItem({ text, id, isDone, deleteTask, updateTaskStatus }) {
  const onCheckboxClick = () => {
    updateTaskStatus(id);
  };

  const onButtonClick = () => {
    deleteTask(id);
  };

  return (
    <StyledLi>
      <StyledInput type="checkbox" onClick={onCheckboxClick} />
      <StyledLabel className={isDone && "checked"}>{text}</StyledLabel>
      {isDone && (
        <StyledButton type="button" onClick={onButtonClick}>
          <img src={binIcon} alt="Trash bin" />
        </StyledButton>
      )}
    </StyledLi>
  );
}

export default ListItem;
