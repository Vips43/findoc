import { Button } from '@mui/material'
import React from 'react'

function Buttons({text, variant="contained",color="white", bgClr="#fe9447", border, px=1}) {
  return (
    <>
    <Button variant={variant} sx={{border:border,bgcolor:bgClr, color:color, textTransform:"capitalize", fontWeight:"400", py:0.3, px:px, whiteSpace:"nowrap"}}>
    {text}
    </Button>
    </>
  )
}

export default Buttons