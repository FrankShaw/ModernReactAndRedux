import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/index';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            );
        });
    }
}

function mapStateToProps(state) {
    //Whatever is returned from here shows up as props in Book List
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    //Whenever select book is called the result should be passed to all of our reducers
    return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);