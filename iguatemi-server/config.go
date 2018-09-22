package main

import (
	"github.com/graphql-go/graphql"
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
		Fields:      graphql.Fields{},
	},
)

var mutation = graphql.NewObject(
	graphql.ObjectConfig{
		Name:        "mutation",
		Description: "mutation",
		Fields:      graphql.Fields{},
	},
)

var Handler = gqlhandler.New(&gqlhandler.Config{
	Schema: schema,
})
