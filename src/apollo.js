import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { setContext } from 'apollo-link-context'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';

Vue.use(VueApollo);

/*
let http_hasura_uri = process.env.MIX_APP_NAME;
let ws_hasura_uri = '';

if (window.location.origin === 'https://xpream.gmf-aeroasia.co.id') {
	http_hasura_uri = 'https://api-engine-xopsapi.apps-ocp.gmf-aeroasia.co.id'
	ws_hasura_uri = 'wss://api-engine-xopsapi.apps-ocp.gmf-aeroasia.co.id'
} else {
	http_hasura_uri = 'http://172.16.41.125:8080/v1/graphql'
	ws_hasura_uri = 'ws://172.16.41.125:8080/v1/graphql'
}
*/



// HTTP connection to the API
const httpLink = new createHttpLink({
	// You should use an absolute URL here
	uri:  process.env.MIX_HTTP_URI ? process.env.MIX_HTTP_URI : 'http://172.16.41.125:8080/v1/graphql',
	/*options: {
		lazy: true,
		reconnect: true,
		connectionParams: () => ({
			headers: {
				authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyIqIl0sInVzZXJJZCI6MSwieG9wc0NsYWltIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsibWFzdGVyIGFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6Im1hc3RlciBhZG1pbiIsIngtaGFzdXJhLXVzZXItaWQiOiIxIiwieC1oYXN1cmEtb3JnLWlkIjoiWE9QUyBHTUYgQWVyb0FzaWEiLCJ4LWhhc3VyYS1hYmlsaXR5IjoiW1wiKlwiXSJ9LCJpYXQiOjE2NDI5MzQzNTgsImV4cCI6MTY3NDQ3MDM1OCwiaXNzIjoiWE9QUyBBUEkgTWFuYWdlbWVudCIsInN1YiI6ImRpbWFzZWRpdGl5YSJ9.3fn0dyq-o8umtiEW4b-6uXuJAsgmBM0JvnMat_NCK-g"
			}
		})
	},
	fetch
	*/
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyIqIl0sInVzZXJJZCI6MSwieG9wc0NsYWltIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsibWFzdGVyIGFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6Im1hc3RlciBhZG1pbiIsIngtaGFzdXJhLXVzZXItaWQiOiIxIiwieC1oYXN1cmEtb3JnLWlkIjoiWE9QUyBHTUYgQWVyb0FzaWEiLCJ4LWhhc3VyYS1hYmlsaXR5IjoiW1wiKlwiXSJ9LCJpYXQiOjE2NDI5MzQzNTgsImV4cCI6MTY3NDQ3MDM1OCwiaXNzIjoiWE9QUyBBUEkgTWFuYWdlbWVudCIsInN1YiI6ImRpbWFzZWRpdGl5YSJ9.3fn0dyq-o8umtiEW4b-6uXuJAsgmBM0JvnMat_NCK-g"
	// return the headers to the context so httpLink can read them
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : ''
	  }
	}
  })
// Create the subscription websocket link
const wsLink = new WebSocketLink({
	uri:  process.env.MIX_WS_URI ? process.env.MIX_WS_URI : 'ws://172.16.41.125:8080/v1/graphql',
	options: {
		lazy: true,
		reconnect: true,
		connectionParams: () => ({
			headers: {
				authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyIqIl0sInVzZXJJZCI6MSwieG9wc0NsYWltIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsibWFzdGVyIGFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6Im1hc3RlciBhZG1pbiIsIngtaGFzdXJhLXVzZXItaWQiOiIxIiwieC1oYXN1cmEtb3JnLWlkIjoiWE9QUyBHTUYgQWVyb0FzaWEiLCJ4LWhhc3VyYS1hYmlsaXR5IjoiW1wiKlwiXSJ9LCJpYXQiOjE2NDI5MzQzNTgsImV4cCI6MTY3NDQ3MDM1OCwiaXNzIjoiWE9QUyBBUEkgTWFuYWdlbWVudCIsInN1YiI6ImRpbWFzZWRpdGl5YSJ9.3fn0dyq-o8umtiEW4b-6uXuJAsgmBM0JvnMat_NCK-g"
			}
		})
		/*connectionParams: {
			headers: {
				'content-type': 'application/json',
				'x-hasura-admin-secret': 'h4sur4B3tt3r4pi',
				'x-hasura-admin-key': 'h4sur4B3tt3r4pi'
			}
		}*/
	},
	fetch
});


// KITA KOMEN DULU
/*
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
*/
const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	wsLink,
	authLink.concat(httpLink)
);


// Create the apollo client
const client = new ApolloClient({
	link,
	// link: wsLink,
	cache: new InMemoryCache({ appTypename: true })
});

const apolloProvider = new VueApollo({
	defaultClient: client
});

export default apolloProvider;
