import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Typography } from '@mui/material';
type QuesCompo={
    option1?:string,
    label1?:string,
    option2?:string,
    option3?:string,
    option4?:string,
    label2?:string,
    label3?:string,
    label4?:string,
    name?:string,
    marks?:string,
    handleOnClickQuest:(testId:string)=>void,
    selectedValue?:string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QuestionComponent(props:QuesCompo) {
    const {handleOnClickQuest,option1,option2,option3,marks,option4,label1,label2,label3,label4,name,selectedValue,onChange}=props
  return (
    <Box sx={{display:"flex", width:"100%", justifyContent:"space-between", padding:"20px", bgcolor:"#ffffff",
        borderRadius:"30px",
        boxShadow:"20px 20px 60px #00000041,inset -20px -20px 60px #ffffff40",
        marginTop:"20px"

    }} >
    <FormControl>
      <Typography variant='h5' id="demo-radio-buttons-group-label" sx={{
        fontFamily:"Inter",
        fontWeight:"900"
      }} >{name}</Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue=" "
        name="radio-buttons-group"
        value={selectedValue}
        onClick={()=>handleOnClickQuest("questionId")}
        onChange={onChange}
      >
        <FormControlLabel value={option1} control={<Radio />} label={label1} />
        <FormControlLabel value={option2} control={<Radio />} label={label2} />
        <FormControlLabel value={option3} control={<Radio />} label={label3} />
        <FormControlLabel value={option4} control={<Radio />} label={label4} />
      </RadioGroup>
    </FormControl>
    <Typography>Marks:-{marks}</Typography>

    </Box>
  );
}
