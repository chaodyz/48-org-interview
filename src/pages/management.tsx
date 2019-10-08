import React from 'react';
import SimpleCard from '../components/SimpleCard';
import './App.css';
import { Name, emotionUnit, Person } from '../model';


interface ManagementPortalState{
persons: Person[];
}

const styles={
  
}

class ManagementPortal extends React.Component<any, ManagementPortalState> {
  constructor(props: any) {
    super(props);
    this.state = { persons:[
      {
        name: { firstName: 'Sara', lastName: 'Pargair Cohan' }
      },
      {
        name: { firstName: 'Ruchita', lastName: 'Joshi' }
      },
      {
        name: { firstName: 'Ayaz', lastName: 'Kadam' }
      },
      {
        name: { firstName: 'Anas', lastName: 'AI-Raheem' }
      },
      {
        name: { firstName: 'Di', lastName: 'Zhou' }
      }
    ] };
  }
 
  getPersonCardView(persons:Person[]){
    return [...persons].map((_x,i)=>{
      return <SimpleCard name={this.state.persons[i].name} key={i} />
    })
    }

  
  render(){
    return <div className="ManagementPortal">
      management portal
      {this.getPersonCardView(this.state.persons)}
    </div>
  }
}

export default ManagementPortal;
