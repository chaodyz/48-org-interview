import React from 'react';
import TextField from "@material-ui/core/TextField";

interface Props {
}

interface State {

}

export default class InputQuestionPage extends React.Component<Props, any> {
    render() {
        return <div><TextField
            id="outlined-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows="3"
            InputLabelProps={{
                shrink: true,
            }}
        /></div> ;
    }
}


// export default function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
