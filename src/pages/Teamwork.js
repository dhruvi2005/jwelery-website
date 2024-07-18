import React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import b1 from '../assets/pagesimg/businessman1.png'
import b2 from '../assets/pagesimg/businessman2.png'
import b3 from '../assets/pagesimg/businessman3.png'
import b4 from '../assets/pagesimg/business3.png'


function Teamwork() {
    const bussiness=[{
       img1:b1,
       Name:"Samuha Tifany",
       skils:"Graphic Designer",
       facebook:<FacebookIcon sx={{height:"50px",width:"50px"}} />,
       link:<LinkedInIcon sx={{height:"50px",width:"50px"}} />
    },
    {
        img1:b2,
        Name:"Kang Kasep",
        skils:"Copy Writter",
        facebook:<FacebookIcon sx={{height:"50px",width:"50px"}} />,
        link:<LinkedInIcon sx={{height:"50px",width:"50px"}} />
     },
     {
        img1:b3,
        Name:"Mark Baffalao",
        skils:"SEO Assistant",
        facebook:<FacebookIcon sx={{height:"50px",width:"50px"}} />,
        link:<LinkedInIcon sx={{height:"50px",width:"50px"}} />
     },
     {
        img1:b4,
        Name:"Aldebaran Alfaqrh",
        skils:"Lead of Marketing",
        facebook:<FacebookIcon sx={{height:"50px",width:"50px"}} />,
        link:<LinkedInIcon sx={{height:"50px",width:"50px"}} />
     },
]
    return (
        <div>
            <Box sx={{marginTop:"20px"}}>
                <Container>
                    <Box sx={{ textAlign: "start" }}>
                        <Typography sx={{ color: "#ca9d7a" }}>Meet our team</Typography>
                        <Typography variant='h3' sx={{ fontWeight: "500", color: "#132a36" }} >Teamwork makes the dream work.</Typography>
                    </Box>
                    <Box sx={{paddingTop:"20px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} md={3} sx={{display:"flex"}}>
                               {
                                bussiness.map((item,index)=>{
                                    return(
                                        <Box>
                                        <img src={item.img1} alt="" />
      
       <Typography sx={{ color: "#132a36", fontWeight: "700", paddingTop: "10px" }}>{item.Name}</Typography>
                                        <Typography sx={{ color: "gray", paddingTop: "10px" }}>{item.skils}</Typography>
                                       <Box sx={{display:"flex",alignItems:"center"}}>
                                        <Typography > {item.facebook}</Typography>
                                        <Typography>{item.link}</Typography>
                                       </Box>
                                    </Box>
                                    )
                                })
                               }
                            </Grid>
                            
                        </Grid>
                    </Box>
                    <Box sx={{ textAlign: "start" }}>
                        <Typography variant='h3' sx={{ fontWeight: "500", color: "#132a36"}} >
                        Interested in join our team?</Typography>
                        <Typography sx={{color:"gray",paddingTop:"20px"}}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                    </Box>
                    <Typography sx={{width:"120px",backgroundColor:"#ca9d7a",color:"white",borderRadius:"5px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:"10px",margin:"0 auto",marginTop:"25px", marginBottom:"20px",
                        "&:hover":{
                            backgroundColor:"black"
                        }
                    }}>Contact us </Typography>
                   
                </Container>
            </Box>
        </div>
    )
}

export default Teamwork
