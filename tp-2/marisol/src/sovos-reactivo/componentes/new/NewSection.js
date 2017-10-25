import React from 'react';
import New from './New';


class NewSection extends React.Component{
    render(){
        return(
            <div className="content">
                {this.props.newsList.map((news,i) =>
                    <New New = {news} key = {i}/>
                )}
            </div>
        );
    }
}

export default NewSection;