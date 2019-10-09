import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';
import { Name } from '../model';

interface CardProp {
  name: Name;
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

  render() {
    const { classes, name } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Avatar className={classes.orangeAvatar}>{this.getInitial(name)} </Avatar>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.getFullName(name)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(SimpleCard);
