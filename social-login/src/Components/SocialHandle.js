import { Box, Button, Divider, MenuItem, TextField } from '@mui/material'
import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import { addsocialLogin } from '../Redux/action'
const SocialHandle = () => {
    const dispatch = useDispatch()


    const [link, setLink] = useState('');
    const [platform, setPlatform] = useState('');
    
    const handleSubmit = () => {
        dispatch(addsocialLogin())
    }
    
    const platformData = [
        {
            value: '0',
            label: 'Twitter',
        },
        {
            value: '1',
            label: 'Facebook',
        },
        {
            value: '3',
            label: 'Instagram',
        },
        {
            value: '4',
            label: 'Watsupp',
        },
    ]
    return (
        <>
            <Box style={{ margin: "25px" }}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select plateform*"
                    helperText="Please select your platform"
                    onChange={e => setPlatform(e.target.value)}
                    value={platform}
                >
                    {platformData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="outlined-basic"
                    label="Past Link Here*"
                    variant="outlined"
                    onChange={e => setLink(e.target.value)}
                    value={link}
                    style={{
                        marginLeft: "25px"
                    }} />
                {/* <Button variant='contained' color='info' style={{marginLeft:'25px'}}>Add</Button> */}
                <Divider style={{ marginTop: "25px", marginBottom: "25px" }} />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "1rem",
                    }}
                >
                    <Button
                        variant="outlined"
                        style={{
                            color: "#00224B",
                            backgroundColor: "#CBD2DC",
                            marginRight: "10px",
                        }}
                    //   onClick={handleClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}

                    >
                        update
                    </Button>
                </div>
            </Box>
        </>
    )
}

export default SocialHandle