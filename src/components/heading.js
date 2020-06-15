import React from 'react';
import { Typography } from '@material-ui/core';

//////////
// general Heading component
//////////

function Heading ({children}) {

    return (
       
        <Typography   >
            <div className="otherHeadings">{children}</div>
        </Typography>
    )
  }

  export default Heading;