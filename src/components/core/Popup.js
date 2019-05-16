import React, { Component } from 'react';
import MyButton from '../util/MyButton';
class Popup extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Welcome to React Quiz',
            text: 'This is a quiz application built using ReactJS. <br /><br />',
            buttonText: 'Start the quiz' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });
            
            this.props.startQuiz();
        } else {            
            location.reload();// restart the application
        }
    }
     
    createMarkup(text) {
        return {__html: text};
    }
    
    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="ml-5 col-md-10">
                        <div className="popup">
                            <h1>{title}</h1>
                            <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                            <span onClick={this.popupHandle}>
                                <MyButton
                                    text={buttonText}
                                    bck='#333'
                                    color='#fff'
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;