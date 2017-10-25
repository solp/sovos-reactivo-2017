import React from 'react';

class NewContent extends React.Component{
    render(){
        return(
            <p>
                {this.props.New.content}
            </p>
        );
    }
}

export default NewContent;