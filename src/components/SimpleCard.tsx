import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, CardActions, Button } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Name, Person } from '../model';

interface CardProp {
  person: Person;
  handleClick: () => void
}

const styles = {
  card: {
    minWidth: 275,
    margin: 15
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
};

class SimpleCard extends React.Component<any, CardProp, any> {
  getInitial(name: Name) {
    return name.firstName.charAt(0).toUpperCase() + ' ' + name.lastName.charAt(0).toUpperCase();
  }
  getFullName(name: Name) {
    return (
      name.firstName.charAt(0).toUpperCase() +
      name.firstName.slice(1) +
      ' ' +
      name.lastName.charAt(0).toUpperCase() +
      name.lastName.slice(1)
    );
  }

  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    const { classes, person } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Avatar className={classes.orangeAvatar}>{this.getInitial(person.name)} </Avatar>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.getFullName(person.name)}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {person.score}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.handleClick}>View</Button>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(SimpleCard);
