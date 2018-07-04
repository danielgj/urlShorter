import React, { Component } from 'react';

import dgjIcon from '../img/dgj.png';
import twitterIcon from '../img/twitter.png';
import linkedinIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';

export class Footer extends Component {
  render() {
    return (
      <footer className="fixed-bottom navbar bg-dark">
               <img src={dgjIcon} alt="Daniel Garcia Jones" title="Daniel Garcia Jones" className="rounded-circle footerImg"/>
                <div className="row">
                        <div className="col"></div>
                </div>        
                <div className="row">
                    <div className="col">
                        <p className="footerCopy text-center">&copy; 2018 Daniel García Jones</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-right footerContact">
                            <a href="https://github.com/danielgj/urlShorter" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github_profile" title="github_profile" className="socialIcon"/></a>
                            <a href="https://www.linkedin.com/in/dgarciaj/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedin_profile" title="linkedin_profile" className="socialIcon"/></a>
                            <a href="https://twitter.com/danielgarjones/" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="twitter_profile" title="twitter_profile" className="socialIcon"/></a>
                        </p>
                    </div>
                </div>       
      </footer>
    );
  }
}