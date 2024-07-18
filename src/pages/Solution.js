import React from 'react'
import { Box, Grid, Container, Typography, CardContent, Card } from '@mui/material'
import bride_errings from '../assets/images/aboutpage/-bride-earrings-.jpg'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Translate } from '@mui/icons-material';

function Solution() {
    const icons = [
        {
            icon: < RemoveRedEyeOutlinedIcon sx={{ fontSize: "65px", color: "#ca9d7a" }} />,
            title1: "Vision",
            title2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."

        },
        {
            icon: < StoreIcon sx={{ fontSize: "65px", color: "#ca9d7a" }} />,
            title1: "Mission",
            title2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."

        },
        {
            icon: < ShoppingCartIcon sx={{ fontSize: "65px", color: "#ca9d7a" }} />,
            title1: "Motto",
            title2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."

        }
    ]

    return (
        <div >
            <Box>
                <Box>

                    <Box> <img src={bride_errings} alt="" style={{
                        width: "100%", 
                        height: "550px"
                    }} />

                        <Box sx={{
                            transform: 'translateY(-210%)',

                         
                        }} >
                            <Typography sx={{ color: "#132a36" }}>Value </Typography>
                            <Typography sx={{ color: "#FFF", fontSize: "50px", fontWeight: "500" }}>A right place for the right </Typography>
                            <Typography sx={{ color: "#FFF", fontSize: "50px", fontWeight: "500" }}>
                                solution
                            </Typography>
                            <Typography sx={{ color: "white" }}>em ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec </Typography>
                            <Typography sx={{ color: "white" }}>ullamcorper mattis, pulvinar dapibus leo.</Typography>
                        </Box>
                    </Box>



                    <Container>

                        <Grid container spacing={2} sx={{
                            transform: 'translateY(-100%)',
                            top: 0,
                            zIndex: 10,

                        }} >
                            {icons.map(item => (
                                <Grid item xl={12} sm={6} md={4} >
                                    <Card sx={{ width: "100%", margin: "auto" }}>
                                        <Box>
                                            <CardContent >
                                                <Box sx={{ background: "white", padding: "25px 25px 25px 25px", borderRadius: "20px" }}>
                                                    <>
                                                        <Typography  >
                                                            {item.icon}
                                                        </Typography>
                                                        <Typography color={"#132a36"} sx={{ fontWeight: "500", fontSize: "19px", paddingTop: "10px" }} >
                                                            {item.title1}
                                                        </Typography>
                                                        <Typography sx={{ color: "gray", paddingTop: "10px" }}>
                                                            {item.title2}
                                                        </Typography>
                                                    </>
                                                </Box>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}

                        </Grid>
                    </Container>

                </Box>
            </Box>



        </div>
    )
}

export default Solution





