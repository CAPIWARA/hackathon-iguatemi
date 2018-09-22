package config

import (
	"github.com/graphql-go/graphql"
	gqlhandler "github.com/graphql-go/graphql-go-handler"
)

const (
	PORT = ":3000"
)

var schema, _ = graphql.NewSchema(graphql.SchemaConfig{
	Query:    query,
	Mutation: mutation,
})

var query = graphql.NewObject(
	graphql.ObjectConfig{
		Name:        "query",
		Description: "query",
		Fields: graphql.Fields{
			"getCards": FieldGetCards,
		},
	},
)

var mutation = graphql.NewObject(
	graphql.ObjectConfig{
		Name:        "mutation",
		Description: "mutation",
		Fields: graphql.Fields{
			"registerCard": FieldRegisterCard,
		},
	},
)

var Handler = gqlhandler.New(&gqlhandler.Config{
	Schema: &schema,
})
