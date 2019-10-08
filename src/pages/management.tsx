import React from 'react';
import SimpleCard from '../components/SimpleCard';
import './App.css';

class ManagementPortal extends React.Component {
  render(){
    return <div className="ManagementPortal">
      management portal
     <SimpleCard name="DiZ" />
    </div>
  }
}

export default ManagementPortal;
