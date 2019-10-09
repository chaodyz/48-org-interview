import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


interface DialogProps {
  title: string;
  primaryOption: string;
  secondaryOption: string;
  questionTitle: string;
  content?: string;
  handlePrimary: () => void
  handleSecondary: () => void
}
export default function SimpleDialog(props: DialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSecondary = () => {
    setOpen(false);
    props.handleSecondary();
  };

  const handlePrimary = () => {
    setOpen(false);
    props.handlePrimary();
  }

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.questionTitle}</DialogTitle>
        {props.content && <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
        </DialogContent>}
        <DialogActions>
          <Button onClick={handlePrimary} color="primary">
            {props.primaryOption}
          </Button>
          <Button onClick={handleSecondary} color="primary" autoFocus>
            {props.secondaryOption}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
