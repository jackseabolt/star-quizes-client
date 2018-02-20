import React from 'react'; 
import { connect } from 'react-redux'; 
import './Board.css'; 
import BoardPost from '../BoardPost/BoardPost';  
import { getAllQuizes } from '../../actions/quiz'; 

export class Board extends React.Component {
    componentDidMount() {
        console.log("IT MOUNTED")
        this.props.dispatch(getAllQuizes()); 
    }
    
    render() {
        
        let boardPosts = this.props.quizes.map((quiz, index) => (
            <BoardPost key={index} quiz={quiz} />
        ))

        return ( 
            <div className="board"> 
                <div className="board-container">
                    { boardPosts }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    quizes: state.quizes? state.quizes : [], 
    answers: state.answers
}); 

export default connect(mapStateToProps)(Board); 

