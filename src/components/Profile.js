
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImageAvatars from './ProfileAvatar';
import './Profile.css';

export default function StateTextFields() {


    return (
        <>
            <div className="profile-avatar">
                <ImageAvatars />
            </div>
            <Box
                style={{ marginTop: '200px', marginLeft: '00px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-uncontrolled"
                    label="Profile Name"
                    defaultValue="John Smith"
                />
            </Box>
            <Box
                style={{ marginTop: '50px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25.5ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-uncontrolled"
                    label="Age"
                    defaultValue="42"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Email"
                    defaultValue="JohnSmith@gmail.com"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Phone"
                    defaultValue="123-456-7890"
                />

            </Box>
            <Box
                style={{ marginTop: '20px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-uncontrolled"
                    label="Address"
                    defaultValue="1234 Broadway, New York City 56789"
                />
            </Box>
            <Box
                style={{ marginTop: '20px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-uncontrolled"
                    label="Business Entity (Optional)"
                    defaultValue="ABC Company, LLC"
                />
            </Box>
            <Box
                style={{ marginTop: '70px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-uncontrolled"
                    label="Instagram Handle (Optional)"
                    defaultValue="JohnSmith777"
                />
            </Box>
            <Box
                style={{ marginTop: '20px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-uncontrolled"
                    label="Twitter (Optional)"
                    defaultValue="JohnTweets@Smith"
                />
            </Box>
            <Box
                style={{ marginTop: '20px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    id="outlined-uncontrolled"
                    label="Facebook Link (Optional)"
                    defaultValue="Mr. John Smith"
                />
            </Box>
        </>
    );
}
