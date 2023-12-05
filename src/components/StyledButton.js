import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  backgroundColor: 'rgba(50,50,50,1)',
  color: 'rgba(200,200,200,1)',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(200,200,200,1)',
    color: 'rgba(50,50,50,1)'
  },
  textTransform: 'none',
});

export { StyledButton }; 