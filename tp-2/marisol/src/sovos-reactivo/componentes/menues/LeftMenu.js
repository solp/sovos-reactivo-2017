import React from 'react';

class LeftMenu extends React.Component{
    render() {
        return (
            <div className="main_nav"> 
                <div className="sub_menu">
                    <div>{this.props.title1}</div>
                    {this.props.items.map((item,i) =>
                        <a key={i} href="#">Ver Noticias de <b>{item.name}</b></a>
                    )}
                </div>
                <div className="sub_menu">
                    <div>{this.props.title2}</div>
                    {this.props.items2.map((item2,i) =>
                        <a key={i} href=""><li>{item2.name}</li></a>
                    )}
                </div> 
            </div>
        );
    }

}

export default LeftMenu;