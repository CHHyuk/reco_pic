import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { backColor,fontColor } from '../constants/constants';

const StyledButton = styled(Button)({
  backgroundColor: backColor,
  color: fontColor,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: fontColor,
    color: backColor,
  },
  textTransform: 'none',
});

export { StyledButton }; 