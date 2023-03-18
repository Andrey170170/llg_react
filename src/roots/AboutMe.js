import Grid2 from '@mui/material/Unstable_Grid2';
import {Box, Divider, Paper, Typography} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function AboutMe(props) {
    return (
        <Box sx={{mt: 1, pt: 3, px: 5, pb: 5}}>
            <Grid2 container spacing={4}>
                <Grid2 xs={12}>
                    <Typography variant="h3" sx={{fontWeight: 600}}>
                        About me
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <img src={"/llg_react/stalker_No_Data.jpg"} alt={"Avatar"}
                         style={{maxWidth: "50%", height: "auto", overflow: "auto"}}/>
                </Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Hello, my name is Andrei! I am an inventor at heart and a programmer by nature with a dream
                            to create strong artificial intelligence. I am currently studying at UCLA Extension with the
                            intention of transferring to a better institution. I think strong AI would be the most
                            important and dangerous invention humanity has ever made (more dangerous than nuclear
                            warfare, as we have instruments to oppose warfare, but nothing to confront
                            super-intelligence, just as an ant cannot resist a child playfully destroying its colony).
                            In the future, I want to work in a lab and conduct research on artificial intelligence. And
                            yes, I am a "classic" programmer so my picture is not, well, except for a passport photo,
                            which is so terrible that it can scare children.
                        </Typography>
                    </Paper>
                </Grid2>

                <Grid2 xs={8}>
                    <Paper elevation={5} sx={{display: "flex", alignItems: "center", p: 2}}>
                        <KeyboardBackspaceIcon sx={{fontSize: 40, mr: 2}}/>
                        <Typography sx={{textAlign: "left"}}>
                            This is a model of my head, I made it myself. Only the hair is different, but it's the one
                            I'm dreaming about. You can twist it around and look at it from different angles.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 xs={4}></Grid2>

                <Grid2 xs={3}></Grid2>
                <Grid2 xs={8}>
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            As I said before I am a programmer, I know several programming languages: C#, C++, C,
                            JavaScript, Python. I know how to make both websites and desktop applications. My dream is
                            to specialize in machine learning, so I am actively studying Python. However, right now most
                            of my projects are websites. In terms of web development I'm familiar with Vue.js, React.js
                            (which is used in this portfolio), ASP.NET.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2></Grid2>

                <Grid2 xs={9}></Grid2>
                <Grid2 xs={3}>
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            This is still only an alpha version of the site, if it so happens that I will use it in
                            reality - I will buy the design, not myself will try to do it.
                        </Typography>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    )
}