package graphqlapi

import "github.com/graphql-go/graphql"

var typeCreditCard = graphql.NewObject(graphql.ObjectConfig{
	Name: "typeCreditCard",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Name: "id",
			Type: graphql.String,
		},
		"holderName": &graphql.Field{
			Name: "holderName",
			Type: graphql.String,
		},
		"expiration": &graphql.Field{
			Name: "expiration",
			Type: graphql.String,
		},
		"number": &graphql.Field{
			Name: "number",
			Type: graphql.String,
		},
		"ccv": &graphql.Field{
			Name: "ccv",
			Type: graphql.String,
		},
	},
})
