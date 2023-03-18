import {NavLink, Outlet} from "react-router-dom";
import {AndreyHead} from "./AndreyHead";
import { blue, grey } from '@mui/material/colors';

import "../css/Root.css"
import {AppBar, Button, Container, Typography, Box, Link} from "@mui/material";

export function Root(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: grey[200]
            }}
        >
            <Box>
                <AppBar postion="static" color="info" style={{"height": "5vh", "justify-content": "center"}}>
                    <Container maxWidth={"xl"}
                               style={{"display": "flex", "align-items": "center", "justify-content": "space-between"}}>
                        <Typography style={{"font-size": "16pt"}}>Kopanev Andrey</Typography>
                        <Box>
                            <Button variant="text" color="primary" className={"navButtons"}>
                                <NavLink to={"/llg_react/"} className={"links"}>
                                    <Typography >About me</Typography>
                                </NavLink>
                            </Button>
                            <Button variant="text" color="primary" className={"navButtons"}>
                                <NavLink to={"/llg_react/skills"} className={"links"}>
                                    <Typography >Skills</Typography>
                                </NavLink>
                            </Button>
                            <Button variant="text" color="primary" className={"navButtons"}>
                                <NavLink to={"/llg_react/resume"} className={"links"}>
                                    <Typography >Resume</Typography>
                                </NavLink>
                            </Button>
                        </Box>
                    </Container>
                </AppBar>
            </Box>
            <Box className="body" sx={{mt: "5.5vh", height: "87vh", width: "97%", mx: "auto"}}>
                <AndreyHead style={{"width": "33%", "height": "100%", "overflow": "hidden"}}></AndreyHead>
                <Box sx={{width: "66%", height: "100%", overflow: "auto", overflowX: "hidden"}}>
                    <Outlet/>
                </Box>
            </Box>
            <Box
                component="footer"
                sx={{
                    py: 2,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? blue[200]
                            : blue[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        Kopanev Andrey
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {'Copyright © '}
                        <Link color="inherit" href="/">
                            Your Website
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}