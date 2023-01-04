import React from "react";
import { Card, CardContent, Button, TextField } from "@mui/material"


function CategoryRegister(props){

  return(
    <Card>
    <CardContent>
      
        <div style={{ fontSize: '18px' }}>{props.texto}</div>
        <div style={{ display:'flex', flexDirection: 'column'}}>
        <div style={{ width: '60%', marginTop:'14px' }}>
            <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined" />
        </div>
        <div style={{ display:'flex', width: '60%', marginTop:'14px', justifyContent:'right' }}>
            <Button variant="contained">Salvar</Button>
            </div>
        </div>
      
    </CardContent>
  </Card>
  )
}

export default CategoryRegister