import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { deepOrange } from '@material-ui/core/colors';
import { Name } from '../model';
import TextField from "@material-ui/core/TextField";
import { Pie } from "react-chartjs-2";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import { withRouter } from 'react-router-dom';

interface CardProp {
    name: Name
}

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    disabledInput: {
        color: '#000000',
    },
};

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};
const options = {
    responsive: false,

}

class InterviewResultPage extends React.Component<any, CardProp, any> {

    render() {
        const { classes, location } = this.props;
        console.log(location.state.person);
        return (

            <Card className={classes.card}>
                <CardContent>
                    <TextField
                        id="outlined-multiline-static"
                        label="Question"
                        multiline
                        rows="4"
                        defaultValue="Default Value"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        disabled={true}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Answer"
                        multiline
                        rows="4"
                        defaultValue="Default Value"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        disabled={true}
                    />
                    <Pie data={data} options={options} />
                </CardContent>
            </Card>
        );

    }
}
export default withStyles(styles)(InterviewResultPage);
