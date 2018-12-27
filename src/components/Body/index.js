import React from 'react'
import CatVector from '../../images/catVector.png'
import './styles.css';

const Body = () => (
  <div className="body">
    <div className="body-top">
      <div className="image-container"><img className="cat-image" src={CatVector} alt="cat" /></div>

    </div>
    <div className="body-bottom">
      <h4>Cat</h4>
      <h2>KITTY</h2>
      <p>A ghost, thousant invisible, still is like a place your sight can know on, echoung but here within this black pelt, your stringest gazewill be absorbed and utterly disappear:</p>
      <p>When nothing else can ease her, she charges into her dark night</p>
    </div>

  </div>
)
export default Body;