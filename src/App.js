import React, { useState } from 'react';
import './App.css';
import CustomerList from './customerList/CustomerList';
import CustomerForm from './customerForm/CustomerForm';
import { Grid } from '@material-ui/core';

function App() {
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    setRefresh(!refresh);
  }

  return (
    <Grid style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>

      <CustomerList refresh={refresh}/>
      <br />
      <CustomerForm toggleRefresh={toggleRefresh}/>
    </Grid>
  );
}

export default App;
