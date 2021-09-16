import React from "react";
import "./styles/Item.css";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    }

    render() {
        var available = this.props.item.quantity ? "" : "out-of-stock"
        return(
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
                <a href={`/items/${this.props.item._id}`}>
                <div className="card" style={{height:"100%", width:"100%"}}>
                    <img className={`card-img-top ${available}` } src={this.props.item.image} alt="item" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.brand}</h5>
                        <p className="card-text">{this.props.item.name}</p>
                        {/* <a href="#" className="btn btn-primary">View</a> */}
                        {/* <div className="d-flex flex-row justify-content-around">
                           { this.props.item.colors.map(
                               (color) =>  <div style={{height:"20px", width:"20px", border:"1px solid black" , borderRadius:"100%", backgroundColor:`${color}`}}></div>
                           ) }
                        </div> */}
                        {/* <div className="d-flex flex-row justify-content-around">
                           { this.sizes.map(
                               (size) => {
                                if(this.props.item.sizes.includes(size)) {
                                    return <div>{size}</div>
                                }
                                else {
                                    return <div style={{color:"silver"}}>{size}</div>
                                }
                               }
                           ) }
                        </div> */}
                    </div>
                </div>
                </a>
                
            </div>
        );
    }
}