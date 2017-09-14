import React, { Component } from 'react';
import { Panel, Row, Col, Glyphicon } from 'react-bootstrap';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import FaceBookIcons from 'react-icons/lib/fa/facebook';
import viewIcons from '../../assert/view.svg';
import likeIcons from '../../assert/like.svg';
import plusIcons from '../../assert/plus.svg';
import trashIcons from '../../assert/garbage.svg';
import happyIcons from '../../assert/happy.svg';
import sadIcons from '../../assert/sad.svg';
import secretIcons from '../../assert/sad.svg';
import userIcons from '../../assert/user.png';


import './styles.scss';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const acHeader = (
      <div className="acHeader">
        <div className="ac-check">
          <Checkbox />
        </div>
        <div className="ac-icon">
          <div className="user-pic">
            <img src={userIcons} className="user-pic" />
          </div>
          <div className="facebook-pic">
            <FaceBookIcons />
          </div>
        </div>
        <div className="ac-name">
          <div className="name">Tinnapop Suraphon</div>
          <div>
            <small><Glyphicon glyph="globe" /> Public</small>
            <small>  •  </small>
            <small>07 July 1992 0:00 AM</small>
          </div>
        </div>
        <button className="btn-list">
          <Glyphicon glyph="option-vertical" />
        </button>
      </div>
    );

    const acBody = (
      <div className="acBody">
        <h5>Front-end Developer at Thailand..., Bangkok.</h5>
        <p>Front-end Developer at Thailand..., Bangkok. And my IG : www.instagram.com/t0no0  |  <Glyphicon glyph="earphone" /> 099-494-7771 (Ton.)</p>
        <br />
        <div className="neo-status">
          <div className="items">
            <Glyphicon glyph="folder-close" /> <span className="labels">300</span>
          </div>
          <div className="items">
            <Glyphicon glyph="thumbs-up" /> <span className="labels">777</span>
          </div>
          <div className="items">
            <Glyphicon glyph="comment" /> <span className="labels">10K</span>
          </div>
          <div className="items-hr"></div>
        </div>
        <div className="status">
          <div className="ac-1">
            <img src={happyIcons} width="18px" /> Ton N Ton 
          </div>
          <div className="ac-2">
            <font className="colon">:</font><Chip className="chip">Ton N Ton </Chip>
            <img src={plusIcons} width="24px" />
          </div>
        </div>
        <div className="status">
          <div className="ac-1">
            <img src={secretIcons} width="18px" /> Hello - 
          </div>
          <div className="ac-2">
            <font className="colon">:</font><Chip className="chip">Test Test Tes </Chip>
            <img src={plusIcons} width="24px" />
          </div>
        </div>
        <div className="status">
          <div className="ac-1">
            <img src={sadIcons} width="18px" /> Hobby
          </div>
          <div className="ac-2">
            <font className="colon">:</font><Chip className="chip">StarTex </Chip> <Chip className="chip">StarLord </Chip>
            <img src={plusIcons} width="24px" />
          </div>
        </div>
      </div>
    );

    const footer = (
      <div className="acFooter">
        <div className="ac-1">
          <img src={viewIcons} width="35px" />
          <img src={likeIcons} width="25px" />
          <div className="border" />
          <img src={plusIcons} width="24px" />
          <div className="border" />
        </div>
        <div className="ac-2">
          <div className="border" />
          <img src={trashIcons} width="22px" />
        </div>
      </div>
    );

    return (
      <div className="component-account">
        <Panel footer={footer}>
          { acHeader }
          { acBody }
        </Panel>
      </div>
    );
  }
}

export default Account;
