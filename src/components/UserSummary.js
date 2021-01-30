import React, {useState} from "react";

export class UserSummary extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showMore: false };
  }
  
  render() {
    function showAll() {
      const elementdiv = document.getElementById('showMore');
      if (elementdiv.classList.contains('dn')) {
        elementdiv.classList.remove('dn');
      } else {
        elementdiv.classList.add('dn');
      }
    }
    let data = this.props.userData;
    if (data === null) {
      return (
        <div>
          <p>There is no User Data </p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="userBox">
            <h4>{data[0].name?.title} <span>{data[0].name?.first} {data[0].name?.last}</span></h4>
            <p>{data[0].email}</p>
            <div className="dn" id="showMore">
              <span><img src={data[0].picture?.large} /></span>
              <address>
                <span><h4 className="nomargin">State:</h4> {data[0].location?.state}</span>
                <span><h4 className="nomargin">City:</h4>{data[0].location?.city}</span>
                <span><h4 className="nomargin">Street:</h4>{data[0].location?.street?.name}-{data[0].location?.street?.number}</span>
              </address>
            </div>
            
            <button onClick={showAll} className="showmore ">Show More</button></div>
        </div>);
    }
  }
}