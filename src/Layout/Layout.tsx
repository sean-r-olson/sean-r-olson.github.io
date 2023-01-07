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
// const navItems = ['skills', 'experience', 'education', 'community', 'contact'];
const skillsItems1 = ['Reactjs', 'Redux', 'css3', 'Angular', 'Responsive design', 'pHp','Git', 'Agile MethodoloGies'];
const skillsItems2 = ['javascript', 'Redux toolkit', 'less', 'jest','coffeescript', 'nodejs', 'Mysql'];
const skillsItems3 = ['typescript','Mui', 'HtMl5', 'AWs', 'knockoutjs', 'express', 'postgresql'];

export default function DrawerAppBar() {
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
            <ListItemText
              disableTypography
              primary={<Typography sx={{ fontFamily: 'Major Mono Display' }}>SKILLS</Typography>}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(experience)} sx={{ textAlign: 'center' }}>
            <ListItemText
              disableTypography
              primary={<Typography sx={{ fontFamily: 'Major Mono Display' }}>EXPERIENCE</Typography>}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(education)} sx={{ textAlign: 'center' }}>
            <ListItemText
              disableTypography
              primary={<Typography sx={{ fontFamily: 'Major Mono Display' }}>EDUCATION</Typography>}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(community)} sx={{ textAlign: 'center' }}>
            <ListItemText
              disableTypography
              primary={<Typography sx={{ fontFamily: 'Major Mono Display' }}>COMMUNITY</Typography>}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => scrollToSection(contact)} sx={{ textAlign: 'center' }}>
            <ListItemText
              disableTypography
              primary={<Typography sx={{ fontFamily: 'Major Mono Display' }}>CONTACT</Typography>}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );


  return (
    <Box sx={{ display: 'block', position: 'absolute', width: '100%' }}>
      {/* <CssBaseline /> */}
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
                    '& .MuiTypography-root':{
                      borderBottom: '4px solid white',
                  }}
                }
              }
            >
              SEAN OLSON
            </Typography>
          </Button>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            <Button
              onClick={() => scrollToSection(skills)}
              sx={
                { 
                  px: 2,
                  color: '#fff',
                  '&:hover': {
                    color: '#b37486',
                    '& .MuiTypography-root':{
                      borderBottom: '4px solid white',
                  }}
                }
              }
              >
              <Typography variant='h6'>skills</Typography>
            </Button>
            <Button
              onClick={() => scrollToSection(experience)}
              sx={
                { 
                  px: 2,
                  color: '#fff',
                  '&:hover': {
                    color: '#5b9877',
                    '& .MuiTypography-root':{
                      borderBottom: '4px solid white',
                  }}
                }
              }
              >
              <Typography variant='h6'>experience</Typography>
            </Button>
            <Button
              onClick={() => scrollToSection(education)}
              sx={
                { 
                  px: 2,
                  color: '#fff',
                  '&:hover': {
                    color: '#e6bd57',
                    '& .MuiTypography-root':{
                      borderBottom: '4px solid white',
                  }}
                }
              }
              >
              <Typography variant='h6'>education</Typography>
            </Button>
            <Button
              onClick={() => scrollToSection(community)}
              sx={
                { 
                  px: 2,
                  color: '#fff',
                  '&:hover': {
                    color: '#b37486',
                    '& .MuiTypography-root':{
                      borderBottom: '4px solid white',
                  }}
                }
              }
              >
              <Typography variant='h6'>community</Typography>
            </Button>
            <Button
              onClick={() => scrollToSection(contact)}
              sx={
                { 
                  px: 2,
                  color: '#fff',
                  '&:hover': {
                    color: '#5b9877',
                    '& .MuiTypography-root':{
                      borderBottom: '4px solid white',
                  }}
                }
              }
              >
              <Typography variant='h6'>contact</Typography>
            </Button>   
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box ref={main} sx={{ backgroundColor: '#e6bd57', height: '100vh', p: 3}}>
        <Toolbar />
        <Typography variant="h6">
            hi, i'm sean. i'm a software developer in the twin cities with a passion for all things front end and responsive design.
        </Typography>
      </Box>
      <Box paddingTop={4} ref={skills} sx={{ backgroundColor: '#b37486', height: '100vh', p: 3}} display="flex" justifyContent="center">
        <Toolbar /> 
        <Grid container textAlign="center" alignItems="center">
          <Grid xs={4} display="block" py={4} px={1} sx={{ backgroundColor: '#e6bd57'}}>
          {skillsItems1.map((item, index) => (
            <Typography variant="h6" paddingBottom={ index !== skillsItems1.length - 1 ? 4 : 0}>
              {item}
            </Typography>
          ))}
          </Grid>
          <Grid xs={4} display="block" py={4} px={1}>
          {skillsItems2.map((item, index) => (
            <Typography variant="h6" paddingBottom={ index !== skillsItems1.length - 1 ? 4 : 0}>
              {item}
           </Typography>
          ))}
          </Grid>
          <Grid xs={4} display="block" py={4} px={1} sx={{ backgroundColor: '#5b9877' }}>
          {skillsItems3.map((item, index) => (
            <Typography variant="h6"paddingBottom={ index !== skillsItems1.length - 1 ? 4 : 0}>
              {item}
          </Typography>
          ))}
          </Grid>
        </Grid>
      </Box>
      <Box ref={experience} sx={{ backgroundColor: '#5b9877', height: '100vh', p: 3 }} display="flex" justifyContent="center">
        <Toolbar />
        <Grid 
          container
          spacing={0}
          direction="column"
          justifyContent="center"
        >
            <Grid container mb={4} borderLeft='#e6bd57 2px solid' paddingLeft={2} >
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
          <Grid mb={4} borderLeft='#e6bd57 2px solid' paddingLeft={2}>
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
      <Box ref={education} sx={{ backgroundColor: '#e6bd57', height: '100vh', p: 3}} display="flex" justifyContent="center">
        <Toolbar />
        <Grid
          container
          spacing={0}
          direction="column"
          justifyContent="center"
        >
          <Grid mb={6} sx={{ backgroundColor: '#b37486'}}>
            <Grid container justifyContent="space-between">
              <Grid padding={2}>
                <Typography variant="h5">
                  Prime Digital Academy | Minneapolis, MN
                </Typography>
                <Typography variant="h6">
                  full stack software engineering certification
                </Typography>
              </Grid>
              <Grid padding={2} xs={4} sx={{ backgroundColor: 'black', color: 'white' }}>
                <Typography variant="h6">
                  sep 2019
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid mb={6} sx={{ backgroundColor: '#b37486'}}>
            <Grid container justifyContent="space-between">
              <Grid padding={2}>
                <Typography variant="h5">
                  California Lutheran University | Thousand Oaks, CA
                </Typography>
                <Typography variant="h6">
                  b.a. music production
                </Typography>
              </Grid>
              <Grid padding={2} xs={3} sx={{ backgroundColor: 'black', color: 'white' }}>
                <Typography variant="h6">
                  may 2013
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid mb={6} sx={{ backgroundColor: '#b37486'}}>
            <Grid container justifyContent="space-between">
              <Grid padding={2}>
                <Typography variant="h5">
                  Auckland University of Technology | Auckland, Nz
                </Typography>
                <Typography variant="h6">
                  semester abroad
                </Typography>
              </Grid>
              <Grid padding={2} xs={2} sx={{ backgroundColor: 'black', color: 'white' }}>
                <Typography variant="h6">
                  dec 2011
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box ref={community} sx={{ backgroundColor: '#b37486', height: '100vh', p: 3}} display="flex" justifyContent="center">
        <Toolbar/>
        <Grid
          container
          direction="column"
          justifyContent="center"
        >
          <Grid container mb={4} justifyContent="space-between" sx={{ backgroundColor: '#FAF9F6'}}>
            <Grid xs={9} padding={2}>
              <Typography variant="h5">
                Minneapolis Mayhem Inclusive Rugby | Minneapolis, MN
              </Typography>
              <Typography>
                Events Chair
              </Typography>
              <Typography>
                - In charge of organizing fundraising events with local businesses and sponsors for the club.
              </Typography>
              <Typography>
                Membership Chair
              </Typography>
              <Typography>
                - Responsible for recruitment, new member enrollment, and maintaining current membership statuses.
              </Typography>
              <Typography>
                Communications Chair
              </Typography>
              <Typography>
                - Tasked with maintaining a strong social media presence. Developed a website for the team. 
              </Typography>
            </Grid>
            <Grid xs={3} padding={2} sx={{ backgroundColor: '#5b9877'}}>
              <Typography variant="h6">
                dec 2017 - present
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" mb={4} sx={{ backgroundColor: '#FAF9F6'}}>
            <Grid padding={2}>
              <Typography variant="h5">
                Polar Plunge | Minneapolis, MN
              </Typography>
              <Typography>
                Annual fundraiser to raise money and awareness for Special Olympics Minnesota.
              </Typography>
            </Grid>
            <Grid xs={3} padding={2} sx={{ backgroundColor: '#5b9877'}}>
              <Typography variant="h6">
                june 2019 - present
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" sx={{ backgroundColor: '#FAF9F6' }}>
            <Grid padding={2}>
              <Typography variant="h5">
                Fukushima Tsunami Relief | Fukushima, Japan
              </Typography>
              <Typography>
                Helped a resident of Fukushima by cleaning debris out of his home and sewer drains.
              </Typography>
            </Grid>
            <Grid xs={3} padding={2} sx={{ backgroundColor: '#5b9877'}}>
              <Typography variant="h6">
                  May 2011
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box ref={contact} sx={{ backgroundColor: '#5b9877', height: '100vh', p: 3}}>
        <Toolbar />
      <Grid paddingLeft={4}>
        <Grid container>
          <MailOutlineIcon />
          <Typography>
            srolson@callutheran.edu
          </Typography>
        </Grid>
        <Grid container>
          <PhoneIphoneIcon />
          <Typography>
            (805)418-0603
          </Typography>
        </Grid>
        <Grid container>
          <LinkedInIcon />
            <Typography>
              linkedin.com/in/sean-olson-3410
            </Typography>
        </Grid>
        <Grid container>
          <GitHubIcon />
            <Typography>
              github.com/sean-r-olson
            </Typography>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
}