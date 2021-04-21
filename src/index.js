import react from 'react';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "./assets/style.css"
import quizzService from "./quizService/index"

class QuizzBee extends Component{

    state={
        questionBank:[]
    };

    getQuestions=()=>{

        quizzService().then(question=>{
            this.setState({
                questionBank:question
            })
        })
       
    }

    componentDidMount(){
        this.getQuestions();
    }
    render(){
        return(
            <div className="container">
                
                <div className="title">QuizzBee</div>
                {this.state.questionBank.length>0 &&
                this.state.questionBank.map(
                    ({question,answers,correct,questionId})=>
                    <h4>
                        {question}
                    </h4>
                )}

            </div>
        );
    }
}
ReactDOM.render(<QuizzBee/>,document.getElementById("root"))