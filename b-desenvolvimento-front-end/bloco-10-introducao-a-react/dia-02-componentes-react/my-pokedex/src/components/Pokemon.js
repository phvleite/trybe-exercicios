import React from "react";

class Pokemon extends React.Component {
  render() {

    const { name, type, averageWeight, image } = this.props.pok;
    return (
      <div className="pok-box">
        <span className="pok-info">{name}</span>
        <tr></tr>
        <span className="pok-info">Tipo:&nbsp;{type}</span>
        <span className="pok-info">Peso:&nbsp;{`${averageWeight.value} ${averageWeight.measurementUnit}`}</span>
        <div className="pok-img">
          <img src={image} alt='' />
        </div>
      </div>
    );
  }
}

export default Pokemon;
