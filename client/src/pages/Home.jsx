import React from 'react'
import AppNavigation from '../component/AppNavigation'
import Grid from '@material-ui/core/Grid'
import bepPortrait from '../assets/bep_portrait.png'
import boderBottom from '../assets/bottomBorder.svg'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  borderBot: {
    textAlign: 'right'
  },
    textTipe: {
    textAlign: 'left',
    fontFamily: 'Montserrat',
    fontSize: '3.5rem',
    letterSpacing: '.001rem',
    lineHeight: '.8',
    color: '#A26742'
  }
})

const Home = () => {

  const classes = useStyles()

  return(
    <>
      <AppNavigation />
      <Grid 
        container
        style={{
          height: '40rem',
          backgroundColor: '#f9f9f9'
        }}
      >
        <Grid 
          item lg={8} md={8} sm={7} sm={12}
          height='30%'
          style={{
            paddingLeft: '15rem',
            paddingTop: '15rem'
          }}
        >
          <Typography className={classes.textTipe}>hello ... I’m</Typography>
          <Typography 
            style={{
              fontSize: '5rem',
              fontWeight: 'bold',
              textAlign: 'left',
              color: '#423937'
            }}
          >
              BILLY PESOTH
          </Typography>
          <Typography className={classes.textTipe}>I’m a Full-Stack Developer</Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={5} sm={12}>
          <img
            style={{ 
              paddingTop: '10rem',
              paddingRight: '15rem'
            }}
            src={bepPortrait}
            width='50%'
          />
        </Grid>
      </Grid>
      
      <Grid 
        className={classes.borderBot}
        item
        style={{
          backgroundColor: '#f9f9f9'
        }}
      >
        <img
          src={boderBottom}
          width='75%'
        />
      </Grid>
    </>
  )
}

export default Home