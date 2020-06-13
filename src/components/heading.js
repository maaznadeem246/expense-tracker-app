import React from 'react';
import { Typography } from '@material-ui/core';

function Heading ({children}) {

    return (
       
        <Typography>
            {children}
        </Typography>
    )
  }

  export default Heading;