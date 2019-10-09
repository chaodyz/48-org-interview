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
} from '@material-ui/core';
import { categories } from '../../mock';
import './input-question.css';
import SimpleDialog from '../../components/simpleDialog';
import { QuestionSubmission, Weight } from '../../model';


interface Props { }

interface MyState {
  categories: string[];
  selectedCats: string[];
  savedQuestions: QuestionSubmission[],
  currentQuestion: string;
  weights: Weight[]
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
      savedQuestions: [],
      weights: [{ 'Training and Learning Opportunities': 1 }],
      currentQuestion: 'something',
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

  valuetext = (number) => {
    return number.toString();
  };

  sliderOnChange = (event: object, value: any, cat: string) => {


    const weight = { [cat]: value }
    console.log(weight)
    // this.setState((prevState, _props) => {

    //   // return { weights: prevState.weights.push(weight) };
    //   return {}
    // });
    // console.log('😁', this.state)
  }

  handleYes = () => {
    console.log('👋 parent yes')
    //save and route
  }
  handleNo = () => {
    console.log('👋 parent no ')
    // save and clear


    this.saveQuestion(this.composeQuestionSubmission());
  }

  composeQuestionSubmission(): QuestionSubmission {
    return {
      question: this.state.currentQuestion,
      weights: this.state.weights
    }
  }

  saveQuestion(questionSubmission: QuestionSubmission) {
    fetch("http://localhost:3001/saveQuestions")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState((prev, _props) => {
            return { savedQuestions: [...prev.savedQuestions, ...result] };
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.error(error);
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )
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
                name={cat}
                getAriaValueText={this.valuetext}
                onChange={(event, object) => this.sliderOnChange(event, object, cat)}
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

        <div className="dialogButton">
          <SimpleDialog
            title="Add"
            primaryOption="Yes"
            secondaryOption="No"
            questionTitle="Add a new question?"
            handlePrimary={this.handleYes}
            handleSecondary={this.handleNo}
          ></SimpleDialog>
        </div>

      </div>
    );
  }
}

export default InputQuestionPage;
