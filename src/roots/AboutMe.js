import Grid2 from '@mui/material/Unstable_Grid2';
import {Box, Divider, Paper, Typography} from "@mui/material";
import { blue, amber } from '@mui/material/colors';

export function AboutMe(props) {
    return(
        <Box sx={{mt:1, pt: 3, px: 5, pb: 5}}>
            <Grid2 container spacing={4}>
                <Grid2 xs={12}>
                    <Typography variant="h3" sx={{fontWeight: 600}}>
                        About me
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <img src={"/llg_react/stalker_No_Data.jpg"} alt={"Avatar"} style={{maxWidth: "70%", height: "auto", overflow: "auto"}}/>
                </Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque. Aliquam id libero quis risus fringilla fringilla. Morbi in lorem in enim tristique viverra vel vitae sem. Fusce euismod finibus ultricies. Sed feugiat sit amet elit ut bibendum. Aliquam dignissim enim eget ipsum vulputate, vel accumsan ipsum venenatis. Duis nec feugiat ante, ut sagittis libero. Nullam ut neque sapien. Sed congue dui id enim faucibus, ut dignissim neque ullamcorper. Duis pulvinar diam quis velit volutpat aliquet. Sed nec tellus nisi. Donec quis turpis nec magna gravida blandit. Sed euismod finibus mauris, ac dignissim leo bibendum eget. Sed ac lectus vel odio volutpat ultricies in ut velit. Aliquam id enim blandit, iaculis justo eget, malesuada nisl. Etiam quis orci dapibus, placerat magna ut, commodo metus.
                        </Typography>
                    </Paper>
                </Grid2>

                <Grid2 xs={8}>
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 xs={4}></Grid2>

                <Grid2 xs={3}></Grid2>
                <Grid2 xs={8}>
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2></Grid2>

                <Grid2 xs={9}></Grid2>
                <Grid2 xs={3}>
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu.
                        </Typography>
                    </Paper>
                </Grid2>
            </Grid2>
        </Box>
    )
}