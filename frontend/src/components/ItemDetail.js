import React from "react";
import {config} from "../ipconfig";
import Header from "./Header";
import "./styles/ItemDetail.css";

export default class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.sizes = ['S', 'M', 'L', 'XL', 'XXL'];
        this.state = {
            itemData : {}
        }
    }

    getUrl = (itemId) => {
        const url = `${config.backendEndpoint}/items/${itemId}`;
        console.log(url)
        return url;
    }

    getItemData = async(url) => {
        let apiResponse = await fetch(url);
        let data = await apiResponse.json();
        this.setState({
            itemData: data
        })
    }

    componentDidMount = async() => {
        var itemId =  this.props.match.params.id;
        var url = this.getUrl(itemId);
        await this.getItemData(url);
        // console.log(this.state.itemData.sizes)
    }


    render() {
        return(
            <>
                <Header />
                <div className="container mt-5">
                    <div className="row d-flex flex-row">
                        <div className="col-xs-12 col-md-6">
                            <img className="w-100" src={this.state.itemData.image} />
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <h1>{this.state.itemData.brand}</h1>
                            <h3>{this.state.itemData.name}</h3>

                            <strong className="text-success">₹ {this.state.itemData.price}/-</strong>

                            <div className="mt-5 mb-3 d-flex flex-row justify-content-between">
                                { Object.keys(this.state.itemData).length && this.sizes.map(
                                    (size) =>  <button className={ `button ` + (this.state.itemData.sizes.includes(size) ? "" : "button-disabled")}>{size}</button>
                                    ) 
                                }
                            </div>
                            <div className="my-3 d-flex flex-row">
                                { Object.keys(this.state.itemData).length &&  this.state.itemData.colors.map(
                                    (color) =>  <div className="mx-2" style={{height:"30px", width:"30px", border:"2px solid silver" , borderRadius:"100%", backgroundColor:`${color}`}}></div>
                                ) }
                            </div>
                            <div className="mt-3">
                                <h3>Description</h3>
                                <p>{this.state.itemData.description}</p>
                            </div>
                            <div className="d-flex flex-row">
                                <button>Add To Cart</button>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        );
    }
}