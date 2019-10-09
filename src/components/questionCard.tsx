import React from 'react';
import { Card, CardHeader, Typography, CardContent } from '@material-ui/core';

export default class QuestionCard extends React.Component<any, any> {
  render() {
    // return (<Card>
    //   <CardHeader
    //     title={this.props.title}
    //   />

    //   <CardContent>
    //     <Typography variant="body1" gutterBottom>
    //       {this.props.content}
    //     </Typography>
    //   </CardContent>
    // </Card >)

    return (

      <div className="col s12 m6">
        <div className="card grey lighten-5">
          <div className="card-content black-text">
            <span className="card-title">{this.props.title}</span>
            <p> {this.props.content}</p>
          </div>
        </div>

      </div>)
  }

}