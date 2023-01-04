import React from "react";

import { TableBody, TableCell, TableContainer, TableHead,TableRow, Table, Paper } from '@mui/material'


function ProductList(props){
  
  const rows = [
      {
        id:1,
        name: 'Mouse',
        price: 120,
        category: 'Informática',
      },
      {
        id:2,
        name: 'Teclado',
        price: 150,
        category: 'Informática',
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
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">R$ {row.price}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductList