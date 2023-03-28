import { Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import SocialHandle from './SocialHandle';
import UserDetails from './UserDetails';
import { useDispatch, useSelector } from 'react-redux';
import { dataList } from '../Redux/action';

import "./Main.css"
const Main = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    console.warn("data in Main Component..", data);
  
    useEffect(() => {
      dispatch(dataList())
    }, [dispatch])
    return (
        <div className='container'>
            <Typography
                style={{ margin: "15px", color: "#00224B", fontSize: "25px" }}
            >
                User profile
            </Typography>
            <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab label="User Details" index={0} />
                    <Tab label="Social handel" index={1} />
                </Tabs>
            </Box>
            {value === 0 && <UserDetails />}
            {value === 1 && <SocialHandle />}

        </div>
    )
}

export default Main