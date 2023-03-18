import {Box, Card, CardContent, CardMedia, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText, Paper, Typography} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import BuildIcon from '@mui/icons-material/Build';
import {amber} from "@mui/material/colors";

export function Skills(props) {
    return(
        <Box sx={{mt:1, pt: 3, px: 5, pb: 5}}>
            <Grid2 container spacing={4}>
                <Grid2 xs={12}>
                    <Typography variant={"h3"}>
                        Skills
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/llg_react/stalker_No_Data.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/llg_react/stalker_No_Data.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/llg_react/stalker_No_Data.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>

                <Grid2 xs display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/llg_react/stalker_No_Data.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/llg_react/stalker_No_Data.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>

                <Grid2 xs={12}>
                    <Divider/>
                </Grid2>

                <Grid2 xs={12} sx={{mt:2}}>
                    <Typography variant="h3" sx={{fontWeight: 400}}>
                        Extracurricular Activities
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Paper>
                        <List dense={false}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BuildIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Secondary text"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BuildIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Secondary text"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BuildIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Secondary text"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BuildIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Secondary text"
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid2>

                <Grid2 xs={12}>
                    <Divider/>
                </Grid2>

                <Grid2 xs={12} sx={{mt:2}}>
                    <Typography variant="h3" sx={{fontWeight: 400}}>
                        Awards
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={2}></Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 xs={2}></Grid2>

                <Grid2 xs={2}></Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 xs={2}></Grid2>

                <Grid2 xs={2}></Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 xs={2}></Grid2>

                <Grid2 xs={2}></Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 xs={2}></Grid2>

                <Grid2 xs={2}></Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non nisi non diam lacinia vulputate eu ac arcu. Pellentesque ac dui urna. Nullam semper tincidunt lorem, in mattis orci feugiat vitae. Suspendisse potenti. Proin eget consectetur est, sit amet dictum purus. Donec tincidunt urna vel diam lacinia, eu malesuada est tincidunt. In hac habitasse platea dictumst. Suspendisse varius tincidunt libero, nec maximus nisl eleifend eu. Nulla facilisi. Curabitur pharetra faucibus lacus. Sed non tempor risus, eu tempor ex. Praesent vitae quam neque.
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 xs={2}></Grid2>

                <Grid2 xs={12}>
                    <Divider/>
                </Grid2>
            </Grid2>
        </Box>
    )
}