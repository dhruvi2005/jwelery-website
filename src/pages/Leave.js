import React from 'react'
import { Box, Grid, Container, Typography, Label, TextField, styled,Button } from '@mui/material'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Height, Padding } from '@mui/icons-material';

function Leave() {
    const CustomTextArea = styled('textarea')({
        // width: "570px",
        // height: "50px",
        // padding: "30px",
        // borderRadius: "9px",
        // border: "solid 1px gray",
        // '&:hover': {
        //   borderColor: '#ca9d7a',
        // },
        // '&:focus': {
        //   borderColor: '#ca9d7a',
        //   outline: 'none',
        // },
    });

    return (
        <div>
            <Box>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={6} md={6}>
                            <Box sx={{ textAlign: "start" }}>
                                <Typography variant='h3' sx={{ fontWeight: "600", color: "#132a36", marginBottom: "20px" }}>
                                    Get in touch
                                </Typography>
                                <Typography sx={{ color: "gray", borderBottom: "solid 1px #ECF0F0", paddingBottom: "35px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                                <Box>
                                    <Typography><RoomOutlinedIcon sx={{ color: "#CA9D7A", fontSize: "50px", paddingBottom: "20px" }} /></Typography>
                                </Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <Typography sx={{ color: "#132a36", fontWeight: "600", }}>
                                        Head office</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px", paddingTop: "10px" }}>Jln Cempaka Wangi No 22</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>  Jakarta - Indonesia</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                                <Box>
                                    <Typography><EmailOutlinedIcon sx={{ color: "#CA9D7A", fontSize: "50px", paddingBottom: "20px" }} /></Typography>
                                </Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <Typography sx={{ color: "#132a36", fontWeight: "600", }}>
                                        Email us</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px", paddingTop: "10px" }}>support@yourdomain.tld</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>  hello@yourdomain.tld</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                                <Box>
                                    <Typography><RoomOutlinedIcon sx={{ color: "#CA9D7A", fontSize: "50px", paddingBottom: "20px" }} /></Typography>
                                </Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <Typography sx={{ color: "#132a36", fontWeight: "600", }}>
                                        Head office</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px", paddingTop: "10px" }}>+6221.2002.2012
                                    </Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>  +6221.2002.2013</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Box sx={{ textAlign: "start" }}>
                                <Typography variant='h3' sx={{ fontWeight: "600", color: "#132a36", marginBottom: "20px" }}>
                                    Leave us a message
                                </Typography>
                                <Typography sx={{ color: "gray", paddingBottom: "35px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>

                            </Box>
                            <Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography sx={{
                                          paddingBottom:"15px"
                                        }}>
                                            <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Name</Typography>
                                            <TextField
                                                id="outlined-basic"
                                                placeholder='name'

                                                sx={{
                                                    width: "130%",

                                                    borderRadius: "9px",
                                                    border: "solid 1px gray",
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#ca9d7a',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#ca9d7a',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Typography>
                                        <Typography  >
                                            <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Company</Typography>
                                            <TextField
                                                id="outlined-basic"
                                                placeholder='Companyme'
                                                required

                                                sx={{
                                                    width: "130%",



                                                    borderRadius: "9px",
                                                    border: "solid 1px gray",

                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#ca9d7a',

                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#ca9d7a',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: "flex", justifyContent: "space-between",
                                          paddingBottom:"15px"
                                    }}>
                                        <Typography>
                                            <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Email</Typography>
                                            <TextField
                                                id="outlined-basic"
                                                placeholder='Email'

                                                sx={{
                                                    width: "130%",

                                                    borderRadius: "9px",
                                                    border: "solid 1px gray",
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#ca9d7a',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#ca9d7a',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Typography>
                                        <Typography>
                                            <Typography sx={{ color: "#132a36", fontWeight: "500" }}>phone</Typography>
                                            <TextField
                                                id="outlined-basic"
                                                placeholder='Phone'

                                                sx={{
                                                    width: "130%",



                                                    borderRadius: "9px",
                                                    border: "solid 1px gray",

                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#ca9d7a',

                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#ca9d7a',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                          paddingBottom:"15px"
                                        }}>
                                        <Typography>
                                            <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Subject</Typography>
                                            <TextField
                                                id="outlined-basic"
                                                placeholder='subject'

                                                sx={{
                                                    width: "112%",



                                                    borderRadius: "9px",
                                                    border: "solid 1px gray",

                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover fieldset': {
                                                            borderColor: '#ca9d7a',

                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#ca9d7a',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography>


                                            <Typography sx={{
                                          paddingBottom:"10px"
                                        }}>
                                                <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Message</Typography>
                                                <CustomTextArea id="outlined-basic" placeholder='Message' sx={{
                                                    width: "105%",
                                                    height: "50px",
                                                    padding: "20px",
                                                    borderRadius: "9px",
                                                    color: "gray",
                                                    border: "solid 1px gray",
                                                    '&:hover': {
                                                        borderColor: '#ca9d7a',
                                                    },
                                                    '&:focus': {
                                                        borderColor: '#ca9d7a',
                                                        outline: 'none',
                                                    },
                                                }}

                                                />
                                            </Typography>
                                        </Typography>
                                    </Box>
                                    <Box><Button
        sx={{
          height: "50px",
          width: "112%",
          backgroundColor: "#CA9D7A",
          color: "white",
          '&:hover': {
            backgroundColor: "black"
          }
        }}
      >
        Send Message
      </Button></Box>
                                    <Box>

                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Leave
