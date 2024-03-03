
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// export default function ImageAvatars() {
//     return (
//         <Stack direction="row" spacing={2}>
//             {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
//             <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//             {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
//         </Stack>
//     );
// }

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>JS</Avatar>
            {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar> */}
        </Stack>
    );
}