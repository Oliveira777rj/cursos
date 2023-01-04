import React from "react";
import { TableBody, TableCell, TableContainer, TableHead,TableRow, Table, Paper } from '@mui/material'

function CategoryList(props){

  const rows = [
    {
      id: 1,
      name: 'Informática',
    },
    {
      id: 2,
      name: 'Casa',
    },
];


  return(
  
    <div>
      <h4> 
        {props.texto}
      </h4>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default CategoryList