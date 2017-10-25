import React from 'react';
import NewHeader from './NewHeader';
import NewContent from './NewContent';
import NewFooter from './NewFooter';

class New extends React.Component{
    render(){
        return(
            <div>
                <NewHeader New = {this.props.New}/>
                <NewContent New = {this.props.New}/>
                <NewFooter New = {this.props.New}/>
            </div>
        );
    }
}

export default New;