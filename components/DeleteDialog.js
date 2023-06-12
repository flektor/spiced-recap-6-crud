import { StyledButton } from "./StyledButton";
import { StyledDialog } from "./StyledDialog";

export default function DeleteDialog({ place, location, onDelete, onCancel }) {
  return (
    <StyledDialog open={true}>
      <div className="dialog-ovelay">
        <div className="dialog">
          <header>
            <h3>
              {place}, {location}
            </h3>
            <i className="fa fa-close"></i>
          </header>
          <div className="dialog-msg">
            <p> Would you like to delete the current record? </p>
          </div>
          <footer>
            <StyledButton onClick={onCancel} type="button">
              Cancel
            </StyledButton>
            <StyledButton onClick={onDelete} type="button" variant="delete">
              Delete
            </StyledButton>
          </footer>
        </div>
      </div>
    </StyledDialog>
  );
}
