/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SocialLinks from '../SocialLinks/SocialLinks';
import colors from '../../util/colors';

const Contact = () => {
  return (
    <div style={styles.container}>

      <div style={styles.voiceOverWrapper}>
        <h2 style={styles.agentHeader}>Abrams Artists Agency</h2>


        <p style={styles.agentGroup}>
          750 North San Vicenete Blvd <br />
          East Tower 11th Floor <br />
          Los Angeles, CA 90069
        </p>

        <p style={styles.agentGroup}>
          Tel: (310) 728-1060 <br />
          Fax: (310) 859-9791
        </p>

        <p style={styles.agentGroup}>
          <a href='http://abramsartists.com/' target='_blank' rel='noopener noreferrer' style={styles.link}>
            abramsartists.com
          </a>
        </p>
      </div> {/* voiceOverWrapper */}

      <SocialLinks headerText={'Social'} />

    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // AGENTS --------------------------

  voiceOverWrapper: {
    marginBottom: 20,
    textAlign: 'center',
  },

  agentHeader: {
    marginBottom: 10,
  },

  agentGroup: {
    marginBottom: 20,
    fontSize: '1.1em',
    lineHeight: '130%',
  },

  bold: {
    fontWeight: '800',
  },

  link: {
    textDecoration: 'none',
    color: colors.blue,
  }
}

export default Contact;
