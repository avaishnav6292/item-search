import React from "react";
import {config} from "../ipconfig";
import Item from "./Item";
import Header from "./Header";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.items = [];
        this.state = {
            searchResult: []
        }
    }

    getUrl = () => {
        const url = `${config.backendEndpoint}/items`;
        return url;
    }

    getItemsData = async(url) => {
        const apiResponse = await fetch(url);
        const data = await apiResponse.json();
        return data;
    }

    componentDidMount = async() => {
        const url = this.getUrl();
        const data = await this.getItemsData(url);
        this.items = data;
        this.setState({
            searchResult: data
        })
        console.log(this.state.searchResult);
    }

    onSearchInputChange = (e) => {
        var searchQuery = e.target.value;
        this.setState({
            searchResult: this.items.filter(
                (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.image.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.brand.toLowerCase().includes(searchQuery.toLowerCase())
            )
        });
    }

    render() {
        return(
            <>
                <Header >
                    <form class="form-inline d-flex flex-row">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search by name, brand, category" aria-label="Search" onChange={this.onSearchInputChange} />
                        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onSearchSubmit} >Search</button> */}
                    </form>
                </Header>
                <div className="container">
                    <div className="row">
                        { this.state.searchResult.map(
                            (item) => <Item item={item} />
                            ) 
                        } 
                    </div>
                </div>
            </>
        );
    }
}