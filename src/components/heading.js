import React from 'react';
import { Typography } from '@material-ui/core';

//////////
// general Heading component
//////////

function Heading ({children}) {

    return (
       
        <Typography>
            {children}
        </Typography>
    )
  }

  export default Heading;