import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {getCustomers} from '../API/customerAPI';

const CustomerList = (props) => {
  const [list, setList] = useState([]);
  useEffect(() =>  {
    const loadCustomers = async () => {
      setList(await getCustomers());
    };
    
    loadCustomers();
  }, [props.refresh]);

  return (
    <TableContainer style={{margin:'auto', width:'50%'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.firstName}</TableCell>
              <TableCell align="right">{item.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomerList;