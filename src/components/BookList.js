import React, {Component} from 'react';
import { render } from 'react-dom';
import {ApolloProvider} from "react-apollo";
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// GraphQL query to fetch all data from graphQL server at localhost:4000
const GET_BOOKS = gql`
    query {
      books {
        id,
        title,
        available
        }
    }
`;

// Components render views
// This component runs the above GET_BOOKS query
class BookList extends Component {
    render() {
        return (
            <Query query={GET_BOOKS}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return <div>Loading</div>
                    }

                    if (error) {
                        return <div>Error {error.toString()}</div>
                    }

                    console.log(data);

                    return (
                        <ul>
                            {
                            data.books.map((b) => {
                                return <div key={b.id}>{b.title}</div>
                            })
                            }
                        </ul>
                    )
                }}
            </Query>
        );
    }
}

export default BookList;
