import React from 'react';
import SimpleCard from '../components/SimpleCard';
import './App.css';
import { Person } from '../model';
import { persons } from '../mock';
import { withRouter } from 'react-router-dom';

interface ManagementPortalState {
  persons: Person[];
}

class ManagementPortal extends React.Component<any, ManagementPortalState> {
  constructor(props: any) {
    super(props);
    this.state = { persons };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    //TODO: go to the right link
    this.props.history.push('/input-question');
  }



  getPersonCardView(persons: Person[]) {
    return [...persons].map((_x, i) => {

      return <SimpleCard person={this.state.persons[i]} key={i} handleClick={this.handleClick} />;
    });
  }

  render() {
    return (
      <div className="ManagementPortal">
        <h3>Management Portal</h3>
        {this.getPersonCardView(this.state.persons)}
      </div>
    );
  }
}

export default withRouter(ManagementPortal);
