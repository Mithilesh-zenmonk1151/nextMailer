import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
type buttonProps={
    text?:string,
    classNameBtn?:string,
    customSrcClass?:string,
    src?: React.ReactElement,
    type?:string,
    handleOnClick?: (event: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement, MouseEvent>) => void;
}
export default function Buttons(props:buttonProps) {
    const {text,classNameBtn,handleOnClick,src,customSrcClass}=props
  return (
    <div>
         <Stack spacing={2} direction="row" className={classNameBtn}>
      <Button variant="contained"    onClick={handleOnClick} type='submit'> <Box className={customSrcClass}>
        {src}
      </Box><Typography sx={{fontFamily:"Inter"}}>{text}</Typography></Button>
      
     
    </Stack>
      
    </div>
  )
}
