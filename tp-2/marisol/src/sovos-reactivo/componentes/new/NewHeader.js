import React from 'react';

class NewHeader extends React.Component{
    render(){
        return(
            <h1>
                {this.props.New.title}	
            </h1>
        );
    }
}

export default NewHeader;