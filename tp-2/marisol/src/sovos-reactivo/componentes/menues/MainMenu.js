import React from 'react';

class MainMenu extends React.Component{
    render(){
        return (
            <div className="menu">
                <span className="search"><input type="text"  name="search" /> <input type="submit" className="button" value="Buscar" />
                </span>
                <span className="home"><a href="#">{this.props.home}</a></span> 
                {this.props.options.map((option,i) =>
                    <span key={i} className="alt"><a href="#">{option.name}</a></span>
                )}
            </div>
        );
    }
}

export default MainMenu;