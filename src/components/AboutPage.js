import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Scrollbars } from 'react-custom-scrollbars';

import ProfilePic from '../assets/images/my-photo.png';

const AboutPage = () => {
  return (
    <div className="project__container">
      <div className="half valign-wrapper">
        <img className="hidden-on-tablet" src={ProfilePic} alt="Debashish Nayak" width="80%" />
      </div>
      <div className="half about__content">
        <Scrollbars
          autohide="true"
          autoHideTimeout={1000} 
          autoHideDuration={200}
        >
          <Grid>
            <Row className="about__clear p-h-xs">
              <Col xs={12} className="m-b-sm">
                <p className="about__greeting bold">
                  <span className="standout-text">Hi there  </span>
                  <span className="greeting__emoji sneaky-text text-light">( ´ ▽ ` ) <span className="greeting__hand"></span></span>
                </p>
                <span>I am <span className="accent bold">Debashish</span>, final year <span className="accent bold">undergraduate</span> pursuing Metallurgical & Materials Engineering at <span className="accent bold">Indian Institute of Technology Roorkee</span>.</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span className="fancy bold">Ore no Koto</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>Brought up in the serene coastal town of <span className="accent bold">Visakhapatnam</span>, I grew up with the dream of becoming a Pokémon Master.</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>I admire <span className="accent bold">Japanese culture</span>; their language, their music, especially the culture of manga and anime. Since my sixth grade I have always dreamt of visiting Japan someday, some fine day I <span className="accent bold">still</span> believe.</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>When outdoors or just strolling, I like to be on the lookout for birds and for chances to snap some pictures with my <span className="italics">always-surprising-me</span> Xiaomi Mi 5. When indoors, I just spam <span className="italics accent bold">repeat</span> on some Japanese songs and always prefer to sing it out, always.</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span className="fancy bold">Technical Proficiency</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <Row>
                  <Col xs={4}>
                    <p className="label">React</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">Redux</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">Jest</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">Enzyme</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">SCSS</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">BEM</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">Semantic UI</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">Adobe XD</p>
                  </Col>
                  <Col xs={4}>
                    <p className="label">Adobe Illustrator</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span className="fancy bold">Looking for..</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>I am currently looking for a <span className="accent bold">full-time job oppurtunity</span> anywhere who are in search for a dedicated and forward thinking developer.</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>If you fancy a chat feel free to contact me: </span>
                <a className="no-underline" href="mailto:debashishzero@gmail.com">
                  <h4 className="accent">debashishzero@gmail.com</h4>
                </a>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span className="fancy bold">Best Pokémon Team</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>Lugia, Mewtwo X, Primal Groudon, Arceus Ghost, Kyurem-W, Deoxys-Speed</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span className="fancy bold">Favourite Anime</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>Gintama, Clannad, Anohana, Cross Game, Wolf Children: Ame and Yuki, Fullmetal Alchemist: Brotherhood, One Piece</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span className="fancy bold">Favourite Manga & LNs</span>
              </Col>
              <Col xs={12} className="m-b-sm">
                <span>Koe no Katachi, Angel Densetsu, Tetsugaku Letra, Oregairu, Hakomari</span>
              </Col>
            </Row>
          </Grid>
        </Scrollbars>
      </div>
    </div>
  );
};

export default AboutPage;
