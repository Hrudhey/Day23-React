import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const data = [
        {"NAME":"Palmer","Course":"BTECH","Place":"London","Address":"Address1"},
        {"NAME":"Jennings","Course":"BA","Place":"Pattom","Address":"Address2"},
        {"NAME":"Jacksin","Course":"BTECH","Place":"Palayam","Address":"Address3"}
  ];

const Home = () => {
  return (
    <>
    <h2></h2>
    <TableContainer>
        
     <Table sx={{ minWidth: 350 }} style={{width:'400px',border:'1px solid black',position:'relative',left:'500px',marginTop:'40px'}} aria-label="simple table">
        <TableHead>
     <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Course</TableCell>
        <TableCell>Place</TableCell>
        <TableCell>Address</TableCell>

     </TableRow>
        </TableHead>

    <TableBody>
    {data.map((item) => (
        <TableRow
        key={item.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
         <TableCell component="th" scope="row">
                {item.NAME}
              </TableCell>
              <TableCell align="left">{item.Course}</TableCell>
              <TableCell align="left">{item.Place}</TableCell>
              <TableCell align="left">{item.Address}</TableCell>

              
     </TableRow>
    ))}

        </TableBody>

     </Table>
    </TableContainer>
    </>
  )
}

export default Home