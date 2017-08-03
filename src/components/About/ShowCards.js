/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const ShowCards = ({ headerText }) => {
  return (
    <div style={styles.container}>

      <h2 style={styles.headerText}>{headerText}</h2>

      <div style={styles.images}>
        <a href='http://www.imdb.com/title/tt6517102/' target='_blank' rel='noopener noreferrer' style={styles.imageWrapper}>
          <img src='https://mentalmultiverse.files.wordpress.com/2017/07/mv5bzjdkm2q0nzcty2rizs00zjcylwizntetmdbimjm0ymiwmtm1xkeyxkfqcgdeqxvynzq2mjy3mjm-_v1_.jpg' alt={'Castlevania'} style={styles.image} />
        </a>

        <a href='http://www.imdb.com/title/tt6517102/' target='_blank' rel='noopener noreferrer' style={styles.imageWrapper}>
          <img src='http://img07.deviantart.net/a7dd/i/2012/327/9/f/winx_club_nick_believix_by_winxclub157372-d5lwl2j.jpg' alt={'Winx Club'} style={styles.image} />
        </a>
      </div>

    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    marginTop: 40,

    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },

  // TEXT --------------------------

  headerText: {
    marginBottom: 40,
    fontSize: '1.8em',
  },

  // IMAGE CARD ---------------------

  images: {
    width: 600,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageWrapper: {
    width: 250,
    height: 140,

    backgroundColor: 'grey',

    overflow: 'hidden',
  },

  image: {
    width: '100%',
  },
}

export default ShowCards;
