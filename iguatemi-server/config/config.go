package config

import (
	"github.com/graphql-go/graphql"
	gqlhandler "github.com/graphql-go/graphql-go-handler"
)

const (
	PORT = ":3000"
)

var Schema, _ = graphql.NewSchema(graphql.SchemaConfig{
	Query:    query,
	Mutation: mutation,
})

var query = graphql.NewObject(
	graphql.ObjectConfig{
		Name:        "query",
		Description: "query",
		Fields: graphql.Fields{
			"getUser":    FieldGetUser,
			"getStore":   FieldGetStore,
			"getProduct": FieldGetProduct,
		},
	},
)

var mutation = graphql.NewObject(
	graphql.ObjectConfig{
		Name:        "mutation",
		Description: "mutation",
		Fields: graphql.Fields{
			"registerCard": FieldRegisterCard,
			"newProduct":   FieldNewProduct,
		},
	},
)

var Handler = gqlhandler.New(&gqlhandler.Config{
	Schema: &Schema,
})
