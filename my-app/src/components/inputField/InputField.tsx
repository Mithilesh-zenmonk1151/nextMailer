import { Paper, Stack, TextField } from '@mui/material'
import React from 'react'
import { ChangeEvent } from 'react';
type TextFieldProps={
  placeholder?:string,
  value?:string,
  Label?:string,
  Type?:string,
  customClassName?:string,
  handleOnChange?:React.ChangeEvent<HTMLInputElement>,
  setValue?: (value: string) => void

}
function InputFieldCompo(props: TextFieldProps) {
  const {value, placeholder,Label,Type,customClassName,handleOnChange,setValue}=props
  return (
    <Stack  sx={{
      marginTop:"22px"
    }}>
      <label className='label-input'>{Label}</label>
         {/* <TextField
         placeholder={placeholder}
         value={value}
         type={Type}
         onChange={(event: ChangeEvent<HTMLInputElement>)=> setValue(event.target.value)}
         className={customClassName}
         sx={{
          paddingTop:"14px",
          color:"white"
         }}
      /> */}
    </Stack>
  )
}

export default InputFieldCompo
