import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Chip,
  ListItemText,
  Checkbox,
  Typography,
  Slider,
  Button,
} from '@material-ui/core';
import { categories } from '../../mock';
import './input-question.css';
import SimpleDialog from '../../components/simpleDialog';


interface Props { }

interface MyState {
  categories: string[];
  selectedCats: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
      width: 800,
    },
  },
};

class InputQuestionPage extends React.Component<Props, MyState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      categories,
      selectedCats: [],
    };

    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);

  }
  handleChange = (event: any) => {
    this.setCatName(event.target.value);
  };

  setCatName = (catName: string[]) => {
    if (catName.length < 4) {
      this.setState((_prevState, _props) => {
        return { selectedCats: catName };
      });
    }
  };

  valuetext = value => {
    return `${value}°C`;
  };

  handleYes = () => {
    console.log('👋 parent yes')
    //save and route
  }
  handleNo = () => {
    console.log('👋 parent no ')
    // save and clear
  }

  render() {
    return (
      <div className="inputForm">
        <TextField
          id="outlined-full-width"
          label="Question"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"

          margin="normal"
          variant="outlined"
          multiline
          rows="5"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl className="formControl">
          <InputLabel htmlFor="select-multiple-chip">Categories</InputLabel>
          <Select
            multiple
            style={{ width: 500 }}
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
            MenuProps={MenuProps}
          >
            {this.state.categories.map(cat => (
              <MenuItem key={cat} value={cat}>
                <Checkbox checked={this.state.selectedCats.indexOf(cat) > -1} />
                <ListItemText primary={cat} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {this.state.selectedCats.map(cat => {
          return (
            <FormControl className="formControl">
              <div className="margin10" />
              <Typography id="discrete-slider" gutterBottom>
                {cat}
              </Typography>
              <Slider
                defaultValue={0}
                getAriaValueText={this.valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={3}
              />
            </FormControl>
          );
        })}
        <Button variant="contained" color="primary" className="addButton">
          Add
        </Button>

        <SimpleDialog
          title="Add"
          primaryOption="Yes"
          secondaryOption="No"
          questionTitle="Add a new question?"
          handlePrimary={this.handleYes}
          handleSecondary={this.handleNo}
        ></SimpleDialog>
      </div>
    );
  }
}

export default InputQuestionPage;
