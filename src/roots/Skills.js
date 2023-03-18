import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import BuildIcon from '@mui/icons-material/Build';
import BookIcon from '@mui/icons-material/Book';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

export function Skills(props) {
    return (
        <Box sx={{mt: 1, pt: 3, px: 5, pb: 5}}>
            <Grid2 container spacing={4}>
                <Grid2 xs={12}>
                    <Typography variant={"h3"}>
                        Skills
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 200}}
                            image="/llg_react/programming_skill.jpg"
                            title="Programming skill"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Programming
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I have a strong background in programming languages such as Python, Java, or C++, which
                                allows me to write efficient and effective code to create algorithms, train models, and
                                analyze data.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 200}}
                            image="/llg_react/mathematics_statistics_skill.jpeg"
                            title="Mathematics and Statistics skill"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mathematics and Statistics
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I have a good understanding of mathematical and statistical concepts such as linear
                                algebra, calculus, probability theory, and statistics, which enables me to design and
                                implement complex models and algorithms.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 200}}
                            image="/llg_react/machine_learning_skill.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Machine Learning
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I am proficient in designing, implementing, and training machine learning models for
                                various applications, which is based on my knowledge of machine learning algorithms that
                                enable systems to learn from data and improve their performance over time.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>

                <Grid2 xs display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 200}}
                            image="/llg_react/big-data-visualisation.webp"
                            title="Data Analysis and Visualization skill"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Data Analysis and Visualization
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I am able to analyze large and complex data sets using tools such as SQL, Pandas, and
                                NumPy. Additionally, I have skills in visualizing data and communicating insights to
                                stakeholders using tools like Tableau or Matplotlib.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            sx={{height: 200}}
                            image="/llg_react/Fotolia_103529811_L-Problem-Solving.jpg"
                            title="Problem-Solving skill"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Problem-Solving
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                I have strong problem-solving skills and am able to apply critical thinking to develop
                                creative solutions to complex problems. My ability to think abstractly and have a solid
                                understanding of AI concepts and techniques allows me to identify and solve problems
                                effectively.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>

                <Grid2 xs={12}>
                    <Divider/>
                </Grid2>

                <Grid2 xs={12} sx={{mt: 2}}>
                    <Typography variant="h3" sx={{fontWeight: 400}}>
                        Extracurricular Activities
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={1}></Grid2>
                <Grid2 xs={10} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <List dense={false}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BuildIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Programing projects"
                                    secondary="I run several programming projects in which I try to apply new approaches to program design and programming language tools. It is a valuable extracurricular activity that can help individuals develop problem-solving skills, logical thinking, and creativity. The biggest current project is an online computer hardware store."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BookIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Reading fiction books"
                                    secondary="Reading fiction books is a leisure activity that involves reading stories that are not based on true events. It is a great way to escape from the stresses of everyday life and immerse oneself in a different world. Reading fiction books can help me develop my imagination, creativity, and empathy by exposing me to different characters, settings, and perspectives. I consider the Hyperion series by Dan Simmons to be the best book I've read recently."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <VideogameAssetIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Gaming"
                                    secondary="I am an avid gamer. This is another way for me to take a break from programming. I like to play first-person shooters with a realistic approach or with complex mechanics."
                                />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid2>
                <Grid2 xs={1}></Grid2>

                <Grid2 xs={12}>
                    <Divider/>
                </Grid2>

                <Grid2 xs={12} sx={{mt: 2}}>
                    <Typography variant="h3" sx={{fontWeight: 400}}>
                        Awards
                    </Typography>
                    <Divider/>
                </Grid2>

                <Grid2 xs={2}></Grid2>
                <Grid2 xs={8} display="flex" justifyContent="center" alignItems="center">
                    <Paper elevation={5}>
                        <Typography sx={{textAlign: "left", p: 2}}>
                            So far, there are none.
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