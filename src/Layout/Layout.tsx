import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useRef } from 'react';
import '../App.css';

const drawerWidth = 240;
const skillsItems1 = ['Reactjs', 'Redux', 'Redux toolkit', 'javascript', 'typescript', 'Angular', 'coffeescript', 'knockoutjs'];
const skillsItems2 = [ 'HtMl5', 'css3', 'Mui', 'semantic ui', 'less', 'Responsive design', 'jest',  ];
const skillsItems3 = [ 'AWs', 'pHp', 'nodejs', 'Git', 'Agile MethodoloGies',  'express', 'Mysql', 'postgresql'];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const main = useRef(null);
  const skills = useRef(null);
  const experience = useRef(null);
  const education = useRef(null);
  const community = useRef(null);
  const contact = useRef(null);

  const scrollToSection = React.useCallback((elementRef: any)  => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(skills)} sx={{ textAlign: 'center' }}>
            <ListItemText primaryTypographyProps={{variant: "h5"}}>SKILLS</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(experience)} sx={{ textAlign: 'center' }}>
            <ListItemText primaryTypographyProps={{variant: "h5"}}>EXPERIENCE</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(education)} sx={{ textAlign: 'center' }}>
            <ListItemText primaryTypographyProps={{variant: "h5"}}>EDUCATION</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(community)} sx={{ textAlign: 'center' }}>
            <ListItemText primaryTypographyProps={{variant: "h5"}}>COMMUNITY</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(contact)} sx={{ textAlign: 'center' }}>
            <ListItemText primaryTypographyProps={{variant: "h5"}}>CONTACT</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'block', position: 'absolute', width: '100%' }}>
      <AppBar position='fixed' sx={{ backgroundColor: 'black' }} component="nav">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            onClick={() => scrollToSection(main)}
          >
            <Typography
              variant="h4"
              component="div"
              sx={
                { 
                  px: 2,
                  color: '#fff',
                  '&:hover': {
                    color: '#e6bd57',
                  }
                }
              }
            >
              SEAN OLSON
            </Typography>
          </Button>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            <Button
              onClick={() => scrollToSection(skills)}
              sx={{
                paddingLeft: '20px',
                '&:hover': {
                  '& .MuiTypography-root':{
                    borderBottom: '4px solid white',
                }}
              }}
              >
              <Typography variant='h6' sx={
                { 
                  color: '#fff',
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    color: '#b37486'
                  }
                }
              }>SKILLS</Typography>
            </Button> 
            <Button
              onClick={() => scrollToSection(experience)}
              sx={{
                paddingLeft: '20px',
                '&:hover': {
                  '& .MuiTypography-root':{
                    borderBottom: '4px solid white',
                }}
              }}
              >
              <Typography variant='h6' sx={
                { 
                  color: '#fff',
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    color: '#5b9877'
                  }
                }
              }>EXPERIENCE</Typography>
            </Button> 
            <Button
              onClick={() => scrollToSection(education)}
              sx={{
                paddingLeft: '20px',
                '&:hover': {
                  '& .MuiTypography-root':{
                    borderBottom: '4px solid white',
                }}
              }}
              >
              <Typography variant='h6' sx={
                { 
                  color: '#fff',
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    color: '#e6bd57'
                  }
                }
              }>EDUCATION</Typography>
            </Button> 
            <Button
              onClick={() => scrollToSection(community)}
              sx={{
                paddingLeft: '20px',
                '&:hover': {
                  '& .MuiTypography-root':{
                    borderBottom: '4px solid white',
                }}
              }}
              >
              <Typography variant='h6' sx={
                { 
                  color: '#fff',
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    color: '#b37486'
                  }
                }
              }>COMMUNITY</Typography>
            </Button> 
            <Button
              onClick={() => scrollToSection(contact)}
              sx={{
                paddingLeft: '20px',
                '&:hover': {
                  '& .MuiTypography-root':{
                    borderBottom: '4px solid white',
                }}
              }}
              >
              <Typography variant='h6' sx={
                { 
                  color: '#fff',
                  borderBottom: '4px solid transparent',
                  '&:hover': {
                    color: '#5b9877'
                  }
                }
              }>CONTACT</Typography>
            </Button> 
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ backgroundColor: '#FAF9F6' }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box ref={main} sx={{ backgroundColor: '#e6bd57', height: '100vh', p: 3 }} display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6">
            hi, i'm sean. i'm a software developer in the twin cities with a passion for all things front end and responsive design.
        </Typography>
      </Box>
      <Box paddingTop={4} ref={skills} sx={{ backgroundColor: '#b37486', height: '100vh', p: 3}} display="flex">
        <Grid
          container
          alignContent="center"
        >
          <Grid container display="flex" textAlign="center" justifyContent="center" alignItems="center" xs={4} py={4} px={1} sx={{ backgroundColor: '#e6bd57' }} height="75%">
            <List style={{ width: '100%' }}>
              {skillsItems1.map((item) => (
                <ListItem sx={{ paddingTop: "15px", px: "10%", maxWidth: "95%", margin: "auto" }}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h5", 
                      style: {
                        wordWrap: 'break-word'
                      }}}
                    sx={{ textAlign: "center" }}
                  >
                    {item}
                  </ListItemText>
                </ListItem>
            ))}
            </List>
          </Grid>
          <Grid container display="flex" textAlign="center" justifyContent="center" alignItems="center" xs={4} py={4} px={1} height="75%">
          <List style={{ width: '100%' }}>
              {skillsItems2.map((item) => (
                <ListItem sx={{ paddingTop: "15px", px: "10%", maxWidth: "95%", margin: "auto" }}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h5", 
                      style: {
                        wordWrap: 'break-word'
                      }}}
                    sx={{ textAlign: "center" }}
                  >
                    {item}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid container display="flex" textAlign="center" justifyContent="center" alignItems="center" xs={4} py={4} px={1} sx={{ backgroundColor: '#5b9877' }} height="75%">
            <List style={{ width: '100%' }}>
              {skillsItems3.map((item) => (
                <ListItem sx={{ paddingTop: "15px", px: "10%", width: "95%", margin: "auto" }}>
                  <ListItemText
                    primaryTypographyProps={{ variant: "h5", 
                      style: {
                        wordWrap: 'break-word'
                      }}}
                    sx={{ textAlign: "center" }}
                  >
                    {item}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box ref={experience} sx={{ backgroundColor: '#5b9877', height: '100vh', p: 3 }} display="flex">
        <Grid 
          container
          spacing={0}
          direction="column"
          justifyContent="center"
        >
          <Grid container mb={2} borderLeft='#e6bd57 2px solid' paddingLeft={2}>
            <Grid mb={1} container justifyContent="space-between"  sx={{ backgroundColor: '#e6bd57', p: 2 }}>
              <Typography variant="h5">
                Kipsu | Minneapolis, MN
              </Typography>
              <Typography variant="h5">
                feb 2020 - present
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between">
              <Typography variant="h6">
                software engineer
              </Typography>
              <Typography variant="h6">
                aug 2021 - present
              </Typography>
            </Grid>
            <Grid mb={1}>
              <Typography>
              - Worked with the product team and other engineers to build the front end of new features in our core app / microservices.
              <br/>
              - Helped to build out a new core front end for the company using React, Typescript, MUI, and Redux Toolkit.
              <br/>
              - Mentored a Support Engineer to help prepare them for their transition onto the Engineering team.
              <br/>
              - Worked on a team of 5-6 developers and participated in daily and weekly agile ceremonies such as standups and retros. 
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between">
              <Typography variant="h6">
                support engineer
              </Typography>
              <Typography variant="h6">
                feb 2020 - aug 2021
              </Typography>
            </Grid>
            <Grid mb={1}>
              <Typography>
              - Served as the technical expert to help solve customer needs while working as a representative of the support team.
              <br/>
              - Pioneered a project to parse guest information on registration cards from our hospitality clients using regular expressions.
              </Typography>
            </Grid>
          </Grid>
          <Grid borderLeft='#e6bd57 2px solid' paddingLeft={2}>
            <Grid mb={1} container justifyContent="space-between" sx={{backgroundColor: '#e6bd57', p: 2}}>
              <Typography variant="h5">
                Prime Digital Academy | Minneapolis, MN
              </Typography>
              <Typography variant="h5">
                May 2019 - sep 2019
              </Typography>
            </Grid>
            <Grid>
              <Typography mb={1} variant="h6">
                full stack development student
              </Typography>
              <Typography mb={1}>
                Solo Project: Third Half
                <br/>
                - Platform for members of International Gay Rugby, providing a space for the community to connect with one another.
                <br/>
                - Technologies used: JavaScript, React, Material UI, CSS, Node, PostgreSQL
              </Typography>
              <Typography>
                Group Project: Kid Pro Quo
                <br/>
                - Worked with a team to build a responsive app for our client that allows parents to create and join babysitting “co-ops”.
                <br/>
                - Technologies used: JavaScript, React, Semantic UI, CSS, Node, PostgreSQL, Twilio API
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box ref={education} sx={{ backgroundColor: '#e6bd57', height: '100vh', p: 3 }} display="flex">
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
        >
          <Grid container mb={6} sx={{ backgroundColor: '#b37486'}}>
            <Grid xs={7} padding={2}>
              <Typography variant="h5">
                Prime Digital Academy | Minneapolis, MN
              </Typography>
              <Typography variant="h6">
                full stack software engineering certification
              </Typography>
            </Grid>
            <Grid xs={5} padding={2} textAlign="center" sx={{ backgroundColor: 'black', color: 'white' }}>
              <Typography variant="h6">
                sep 2019
              </Typography>
            </Grid>
          </Grid>
          <Grid container mb={6} sx={{ backgroundColor: '#b37486'}}>
            <Grid xs={8} padding={2}>
              <Typography variant="h5">
                California Lutheran University | Thousand Oaks, CA
              </Typography>
              <Typography variant="h6">
                b.a. music production
              </Typography>
            </Grid>
            <Grid xs={4} padding={2} textAlign="center" sx={{ backgroundColor: 'black', color: 'white' }}>
              <Typography variant="h6">
                may 2013
              </Typography>
            </Grid>
          </Grid>
          <Grid container mb={6} sx={{ backgroundColor: '#b37486'}}>
            <Grid xs={9} padding={2}>
              <Typography variant="h5">
                Auckland University of Technology | Auckland, Nz
              </Typography>
              <Typography variant="h6">
                semester abroad
              </Typography>
            </Grid>
            <Grid xs={3} padding={2} textAlign="center" sx={{ backgroundColor: 'black', color: 'white' }}>
              <Typography variant="h6">
                dec 2011
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box ref={community} sx={{ backgroundColor: '#b37486', height: '100vh', p: 3 }} display="flex">
        <Grid
          container
          direction="column"
          justifyContent="center"
        >
          <Grid container mb={4} justifyContent="space-between" sx={{ backgroundColor: '#FAF9F6' }}>
            <Grid xs={8} padding={2}>
              <Typography variant="h5">
                Minneapolis Mayhem Inclusive Rugby | Minneapolis, MN
              </Typography>
              <Typography variant="h6" paddingTop={1}>
                captain
              </Typography>
              <Typography>
                - Lead team in practices and matches. Play a big role in maintaining a positive and encouraging team culture.
              </Typography>
              <Typography variant="h6">
                events chair
              </Typography>
              <Typography>
                - In charge of organizing fundraising events with local businesses and sponsors for the club.
              </Typography>
              <Typography variant="h6">
                membership chair
              </Typography>
              <Typography>
                - Responsible for recruitment, new member enrollment, and maintaining current membership statuses.
              </Typography>
              <Typography variant="h6">
                communications chair
              </Typography>
              <Typography>
                - Tasked with maintaining a strong social media presence. Developed a website for the team. 
              </Typography>
            </Grid>
            <Grid xs={4} padding={2} sx={{ backgroundColor: '#5b9877'}}>
              <Typography variant="h6">
                dec 2017 - present
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" mb={4} sx={{ backgroundColor: '#FAF9F6' }}>
            <Grid xs={8} padding={2}>
              <Typography variant="h5">
                Polar Plunge | Minneapolis, MN
              </Typography>
              <Typography>
                Annual fundraiser to raise money and awareness for Special Olympics Minnesota.
              </Typography>
            </Grid>
            <Grid xs={4} padding={2} sx={{ backgroundColor: '#5b9877'}}>
              <Typography variant="h6">
                june 2019 - present
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" sx={{ backgroundColor: '#FAF9F6' }}>
            <Grid xs={8} padding={2}>
              <Typography variant="h5">
                Fukushima Tsunami Relief | Fukushima, Japan
              </Typography>
              <Typography>
                Helped a resident of Fukushima by cleaning debris out of his home and sewer drains.
              </Typography>
            </Grid>
            <Grid xs={4} padding={2} sx={{ backgroundColor: '#5b9877'}}>
              <Typography variant="h6">
                  May 2011
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box ref={contact} sx={{ backgroundColor: '#5b9877', height: '100vh', p: 3 }}>
      <Toolbar />
      <Grid>
        <Grid container>
          <MailOutlineIcon />
          <Typography variant="body2"  color='white' paddingLeft={1}>
            srolson@callutheran.edu
          </Typography>
        </Grid>
        <Grid container>
          <PhoneIphoneIcon />
          <Typography variant="body2" color='white' paddingLeft={1}>
            (805)418-0603
          </Typography>
        </Grid>
        <Grid container>
          <LinkedInIcon />
            <a style={{ paddingLeft: '10px' }} href="https://www.linkedin.com/in/sean-olson-3410">linkedin.com/in/sean-olson-3410</a>
        </Grid>
        <Grid container>
          <GitHubIcon />
            <a style={{ paddingLeft: '10px' }} href="https://www.github.com/sean-r-olson">github.com/sean-r-olson</a>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
}