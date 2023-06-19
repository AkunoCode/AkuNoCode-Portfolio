import './Home.css';
import Profile from '../NoBG_Profile.png'
import github from '../Github.png'
import google from '../Google.png'
import facebook from '../Facebook.png'
import instagram from '../Instagram.png'

function Home() {
  return (
    <div id='HomePage'>
      <div id="Hero-Section">
        <div id='Hero-Content'>
          <div id='Hero-Texts'>
            <h1><span id="Hello">Hello,</span><br />I'm Leo!</h1>
            <h2>IN PURSUIT OF KNOWLEDGE TO BE<br />A SOFTWARE ENGINEER</h2>
            <div id='Explore-Button'>
              <a href='/'>Explore</a>
            </div>
          </div>
          <div id='Profile-Section'>
            <div id='ImageContainer'>
              <img src={Profile} alt="Leo's Profile Pic" id='ProfilePic' />
              <div id='ProfileFrame'></div>
              <div id='LinkIcons'>
                <a href='https://github.com/AkunoCode' target='blank'>
                  <img src={github} alt="Leo's Github Account" id='Github' />
                </a>
                <a href='mailto:echevariajohnleo@gmail.com' target='blank'>
                  <img src={google} alt="Leo's Gmail Account" id='Google' />
                </a>
                <a href='https://www.facebook.com/liyoooo.05/' target='blank'>
                  <img src={facebook} alt="Leo's Facebook Account" id='Facebook' />
                </a>
                <a href='https://www.instagram.com/liyoooo_00/' target='blank'>
                  <img src={instagram} alt="Leo's Instagram Account" id='Instagram' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
