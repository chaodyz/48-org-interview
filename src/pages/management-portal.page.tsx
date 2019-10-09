import React from 'react';
import SimpleCard from '../components/SimpleCard';
import './App.css';
import { Person } from '../model';
import { persons } from '../mock';

interface ManagementPortalState {
  persons: Person[];
}

class ManagementPortal extends React.Component<any, ManagementPortalState> {
  constructor(props: any) {
    super(props);
    this.state = { persons };
  }

  getPersonCardView(persons: Person[]) {
    return [...persons].map((_x, i) => {
      return <SimpleCard name={this.state.persons[i].name} key={i} />;
    });
  }

  render() {
    return (
      <div className="ManagementPortal">
        management portal
        {this.getPersonCardView(this.state.persons)}
      </div>
    );
  }
}

export default ManagementPortal;
