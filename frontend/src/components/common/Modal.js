import React from 'react';
import { Modal as MuiModal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modal = ({ open, onClose, title, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;