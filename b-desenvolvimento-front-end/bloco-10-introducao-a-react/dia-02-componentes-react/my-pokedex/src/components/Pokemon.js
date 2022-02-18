import React from "react";

class Pokemon extends React.Component {
  render() {

    const { name, type, averageWeight, image } = this.props.pok;
    return (
      <div className="pok-box">
        <span className="pok-info">{name}</span>
        <span className="pok-info">{type}</span>
        <span className="pok-info">{`${averageWeight.value} ${averageWeight.measurementUnit}`}</span>
        <div className="pok-img">
          <img src={image} alt='' />
        </div>
      </div>
    );
  }
}

export default Pokemon;
