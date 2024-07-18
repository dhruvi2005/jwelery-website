import React from 'react';
import { Container, Grid, Box ,Typography} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../assets/images/aboutpage/logo1.svg';
import logo2 from '../assets/images/aboutpage/logo2.svg';
import logo3 from '../assets/images/aboutpage/logo3.svg';
import logo4 from '../assets/images/aboutpage/logo4.svg';
import logo5 from '../assets/images/aboutpage/logo5.svg';




function ServicesLogo() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    

   
    }
    return (
        <Box sx={{paddingBottom:"100px"}}>
            <Container>

            <Grid item xs={9} >
       
            <Slider {...settings}>
            <Box>
              <img src={logo1} alt="logo1" style={{ width: "230px", height: "100px" }} />
            </Box>
            <Box>
              <img src={logo2} alt="logo2" style={{ width: "230px", height: "100px" }} />
            </Box>
            <Box>
              <img src={logo3} alt="logo3" style={{ width: "230px", height: "100px" }} />
            </Box>
            <Box>
              <img src={logo4} alt="logo4" style={{ width: "230px", height: "100px" }} />
            </Box>
            <Box>
              <img src={logo5} alt="logo5" style={{ width: "230px", height: "100px" }} />
            </Box>
          </Slider>
     
      </Grid>
               




                <Grid container spacing={2} columns={12} sx={{ paddingTop: "70px" }}>
                    <Grid item xl={6}  lg={6} md={6}  sm ={12} sx={{ textAlign: "start" }}>
                        <Typography sx={{ color: "#ca9d7a", paddingBottom: "25px" }}>
                            Our History
                        </Typography>
                        <Typography variant='h3' sx={{ fontWeight: "500", color: "#132a36" }}>
                            Excellent electronic service with affordability
                        </Typography>
                        <Typography sx={{ color: "gray", paddingTop: "35px" }}>
                            Ex nisi rutrum mus eget tempus porttitor posuere dignissim ultricies quisque scelerisque. Vitae tristique integer lacus condimentum fusce morbi. Malesuada taciti elementum aptent at dis. Gravida tristique nostra habitasse litora sapien.
                        </Typography>

                        <Typography sx={{ color: "gray", paddingTop: "35px" }}>
                            Ex nisi rutrum mus eget tempus porttitor posuere dignissim ultricies quisque scelerisque. Vitae tristique integer lacus condimentum fusce morbi. Malesuada taciti elementum aptent at dis. Gravida tristique nostra habitasse litora sapien.
                        </Typography>


                        <Grid sx={{ display: "flex", textAlign: "center", gap: "60px" }}>
                            <Grid>
                                <Typography variant='h3' sx={{ fontWeight: "700", color: "#ca9d7a" }}>
                                    15+
                                </Typography>
                                <Typography sx={{ color: "gray", fontWeight: "700", fontSize: "15px" }} >
                                    Years Experience
                                </Typography>

                            </Grid>

                            <Grid>
                                <Typography variant='h3' sx={{ fontWeight: "700", color: "#ca9d7a" }}>
                                    5M+
                                </Typography>
                                <Typography sx={{ color: "gray", fontWeight: "700", fontSize: "15px" }}>
                                    Years Experience
                                </Typography>

                            </Grid>

                            <Grid>
                                <Typography variant='h3' sx={{ fontWeight: "700", color: "#ca9d7a" }}>
                                    4M+
                                </Typography>
                                <Typography sx={{ color: "gray", fontWeight: "700", fontSize: "15px" }}>
                                    Years Experience
                                </Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xl={6}  lg={6}  md={6} sm={12}>
                        <Box  sx={{display:"flex", paddingBottom:" 25px" ,justifyContent:"center",alignItems:"center",gap:"60px",
                        }}>
                            <Box>
                                <Typography variant='h4' sx={{fontWeight:"700",paddingBottom:"30px",color:"#132a36"}}>
                                    2007
                                </Typography>

            
                            </Box>
                            <Box sx={{textAlign:"start"}}>
                                <Typography sx={{fontWeight:"700",color:"#132a36"}}>
                                    
                                      Opening store
                                </Typography>
                                <Typography sx={{color:"gray",paddingTop:"10px"}}>
                                Vehicula diam class magnis bibendum pede hendrerit magna
                                </Typography>

                            </Box>
                       
                        </Box>
                        <hr />


                        <Box  sx={{display:"flex",justifyContent:"center",  paddingBottom:" 25px",alignItems:"center",gap:"60px"
                        }}>
                            <Box>
                                <Typography variant='h4' sx={{fontWeight:"700",paddingBottom:"30px",color:"#132a36"}}>
                                    2012
                                </Typography>

            
                            </Box>
                            <Box sx={{textAlign:"start"}}>
                                <Typography sx={{fontWeight:"700",color:"#132a36"}}>
                                    
                                      Opening store
                                </Typography>
                                <Typography sx={{color:"gray",paddingTop:"10px"}}>
                                Vehicula diam class magnis bibendum pede hendrerit magna
                                </Typography>

                            </Box>
                       
                        </Box>
                        <hr />


                        <Box  sx={{display:"flex",justifyContent:"center",  paddingBottom:" 25px",alignItems:"center",gap:"60px"
                        }}>
                            <Box>
                                <Typography variant='h4' sx={{fontWeight:"700",paddingBottom:"30px",color:"#132a36"}}>
                                    2015
                                </Typography>

            
                            </Box>
                            <Box sx={{textAlign:"start"}}>
                                <Typography sx={{fontWeight:"700",color:"#132a36"}}>
                                    
                                      Opening store
                                </Typography>
                                <Typography sx={{color:"gray",paddingTop:"10px"}}>
                                Vehicula diam class magnis bibendum pede hendrerit magna
                                </Typography>

                            </Box>
                       
                        </Box>
                        <hr />
                        <Box  sx={{display:"flex",justifyContent:"center", paddingBottom:"30px",alignItems:"center",gap:"60px"
                        }}>
                            <Box>
                                <Typography variant='h4' sx={{fontWeight:"700",paddingBottom:"30px",color:"#132a36"}}>
                                    2020
                                </Typography>

            
                            </Box>
                            <Box sx={{textAlign:"start"}}>
                                <Typography sx={{fontWeight:"700",color:"#132a36"}}>
                                    
                                      Opening store
                                </Typography>
                                <Typography sx={{color:"gray",paddingTop:"10px"}}>
                                Vehicula diam class magnis bibendum pede hendrerit magna
                                </Typography>

                            </Box>
                       
                        </Box>
                        <hr />

                        


                    </Grid>
                </Grid>

            </Container>


        </Box>
    )
}

export default ServicesLogo
