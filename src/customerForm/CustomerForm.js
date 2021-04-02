import { Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const CustomerForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstError, setFirstError] = useState(false);
  const [lastError, setLastError] = useState(false);

  const handleFirstName = (s) => {
    setFirstName(s);
  } 

  const handleLastName = (s) => {
    setLastName(s);
  } 

  const handleSubmit = async () => {
    if(firstName === ""){
      setFirstError(true);
      return;
    } else{
      setFirstError(false);
    }

    if(lastName === ""){
      setLastError(true);
      return;
    } else{
      setLastError(false);
    }

    let param = {
      firstName: firstName,
      lastName: lastName
    }

    await fetch("https://cors-anywhere.herokuapp.com/https://bigcustomerapi.azurewebsites.net/api/Customers", {
      body: JSON.stringify(param),
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => console.log(res.json())).catch(res => console.log(res));

    props.toggleRefresh();
  }

  return (
    <Container style={{display: 'flex', justifyContent: 'space-between'}}>
      <Grid>
        <TextField
          required
          fullWidth
          id="firstName"
          name="firstName"
          autoFocus
          error={firstError}
          helperText = {firstError ? "first name is required" : ""}
          value={firstName}
          onChange={e => handleFirstName(e.target.value)}
        />
      </Grid>
      <Grid>
        <TextField
          required
          fullWidth
          id="lastName"
          name="lastName"
          autoFocus
          error={lastError}
          helperText = {lastError ? "last name is required" : ""}
          value={lastName}
          onChange={e => handleLastName(e.target.value)}
        />
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  )
}

export default CustomerForm;