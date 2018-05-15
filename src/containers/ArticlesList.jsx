import React from 'react';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

const mapStateToProps = state => ({
    articles: state.articles
});

class ConnectedArticlesList extends React.Component {

    render() {
        const { articles } = this.props;
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1 mx-auto">Articles</span>
                </nav>
                <ul className="list-group mt-4">
                    {articles.map(e => <li className="list-group-item d-flex justify-content-between align-items-center" key={uuidv1()}>
                        {e.name}
                        <span className="badge badge-primary badge-pill">{e.rating}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

const List = connect(mapStateToProps)(ConnectedArticlesList);

export default List;
