import React from 'react';

class NewFooter extends React.Component{
    render(){
        return(
            <div className="post_info">
                {this.props.New.date}| Posted by <a href="#">{this.props.New.creator}</a>| <a href="#">{this.props.New.quantityOfComments}</a>
            </div>
        );
    }
}

export default NewFooter;