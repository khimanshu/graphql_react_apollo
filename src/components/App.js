import React, { Component } from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from "./BookList";


// Pass your GraphQL endpoint to uri (since our express graphQL endpoint is running at localhost:4000)
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

// We are trying to get Booklist and send it in ApolloProvider
class App extends Component{
    render() {
        return (
            <div className="App">
                <ApolloProvider client={client}>
                    <BookList/>
                </ApolloProvider>
            </div>
        );
    }
}

export default App;
