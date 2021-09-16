import React from "react";


export default class Header extends React.Component {

    render() {
        return (
            <>
                <nav class="navbar text-white bg-dark">
                    <h3><a href="/" style={{ color: "white", textDecoration: "none" }}>Lorem Ipsum</a></h3>
                    {this.props.children}
                    {/* <form class="form-inline d-flex flex-row">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onSearchInputChange} />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onSearchSubmit} >Search</button>
                </form> */}
                </nav>

            </>
        );
    }
}