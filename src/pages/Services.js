import React from 'react'
import { Box, Grid, Container, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



export default function Services() {
  return (
    <Container >
      <Grid container item xs={12}  spacing={2}>
          <Grid item xl={12} lg={6} md={6} sm={12}>
            <Box >
              <img src="https://jewellerycityweb.thimaqua.info/wp-content/uploads/2022/08/bride-dresses-wedding-decoration-crystal-earrings.jpg" width={'100%'}
                alt="" style={{ borderRadius: "10px", }} />
            </Box>
          </Grid>
          <Grid  item xl={12} lg={6} md={6} sm={12} textAlign={"start"} padding={"10px"}   width={"100%"}  justifyContent={"center"} display={"flex"} alignItems={"center"} left={"46%"}  >
            <Box sx={{ boxShadow: "0pxm 10px 10px black", backgroundColor: "white", borderRadius:"20px" , width: "100%", padding: "20px 20px 100px 20px" , marginTop:"100px"}}>
              <Typography sx={{ color: "#ca9d7a" }
              }>
                Who we are

              </Typography>
              <Typography variant='h3' paddingTop={"15px"} fontWeight={"500"} color={"#132a36"}>
                Gives you quality services at the best prices.
              </Typography>
              <Typography sx={{ color: "gray" ,paddingTop:"20px"}}>
                Aenean finibus justo vivamus mattis accumsan urna hac eros maximus potenti vitae. Potenti dapibus nisl congue platea felis ultrices eros placerat curabitur diam. Consectetuer sociosqu fusce pellentesque mi ridiculus lacus mauris proin viverra ligula maecenas. Venenatis augue praesent tristique class id pretium.
              </Typography>
              <Box  sx={{display:"flex",gap:"80px"}}>
                <Box sx={{ paddingTop: "28px" }}>
                  <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>

                    <Typography>
                      <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                    </Typography>
                    <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>Support 24/7</Typography>

                  </Box>
                  <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>

                    <Typography>
                      <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                    </Typography>
                    <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>Best Quality</Typography>

                  </Box>
                  <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>


                    <Typography>
                      <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                    </Typography>
                    <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>Fastest Delivery</Typography>

                  </Box>
                  <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>

                    <Typography>
                      <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                    </Typography>
                    <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>
                      Warranty 30 Days Product</Typography>
                  </Box>
                  <Box>

                  </Box>
                </Box>




             
              <Box sx={{ paddingTop: "28px" }}>
                <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>

                  <Typography>
                    <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                  </Typography>
                  <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>Support 24/7</Typography>

                </Box>
                <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>

                  <Typography>
                    <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                  </Typography>
                  <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>Best Quality</Typography>

                </Box>
                <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>


                  <Typography>
                    <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                  </Typography>
                  <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>Fastest Delivery</Typography>

                </Box>
                <Box sx={{ display: "flex", gap: "10px", color: "gray" }}>

                  <Typography>
                    <CheckCircleOutlineIcon sx={{ color: "#ca9d7a" }} ></CheckCircleOutlineIcon>

                  </Typography>
                  <Typography sx={{ color: "#818EA0", fontWeight: "700" }}>
                    Warranty 30 Days Product</Typography>

                </Box>
                <Box>

                </Box>
              </Box>
              </Box>
            </Box>

          </Grid>
       
      </Grid>

    </Container>
  );
}