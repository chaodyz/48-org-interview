import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import { FormControl, InputLabel, Select, MenuItem, Input, Chip } from '@material-ui/core';
import { categories } from '../../mock';

interface Props {}

interface MyState {
  categories: string[];
  selectedCats: string[];
}

class InputQuestionPage extends React.Component<Props, MyState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      categories,
      selectedCats: [],
    };
  }
  handleChange = (event: any) => {
    this.setCatName(event.target.value);
  };

  setCatName = (catName: string[]) => {
    if (catName.length < 4) {
      this.setState((prevState, _props) => {
        return { selectedCats: catName };
      });
    }
  };
  render() {
    return (
      <div>
        <TextField
          id="outlined-full-width"
          label="Question"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows="5"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl className="formControl">
          <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
          <Select
            multiple
            value={this.state.selectedCats}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected: string[]) => (
              <div className="chips">
                {selected.map((value: string) => (
                  <Chip key={value} label={value} className="chip" />
                ))}
              </div>
            )}
            // MenuProps={MenuProps}
          >
            {this.state.categories.map(cat => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default InputQuestionPage;
