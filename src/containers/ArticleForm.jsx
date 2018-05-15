import React from 'react';
import { AddArticleAction } from "../actions/AddArticleAction";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(AddArticleAction(article))
    }
}

class ConnectedArticleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rating: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleRatingChange(e) {
        //console.log(e);
        this.setState({ rating: e.target.value });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const { name, rating } = this.state;
        this.setState({ name: '', rating: 0 });
        this.props.addArticle({ name, rating });

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1 mx-auto">Add a new Article</span>
                </nav>
                <form className="mt-3">
                    <div className="form-group">
                        <label htmlFor="artName">Article Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                            aria-describedby="artNameHelp" placeholder="Enter article name"
                            value={this.state.name} onChange={this.handleNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="artRating">Rating</label>
                        <input type="text" pattern="[0-9]*" className="form-control" id="artRating"
                        placeholder="Enter article rating"    
                        value={this.state.rating} onChange={this.handleRatingChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
            
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedArticleForm);

export default Form;
