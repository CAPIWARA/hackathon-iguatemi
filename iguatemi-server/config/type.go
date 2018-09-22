package config

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

var typeProduct = graphql.NewObject(graphql.ObjectConfig{
	Name: "typeProduct",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Name: "id",
			Type: graphql.String,
		},
	}})

var typeStore = graphql.NewObject(graphql.ObjectConfig{
	Name: "typeStore",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Name: "id",
			Type: graphql.String,
		},
	}})

var typeUser = graphql.NewObject(graphql.ObjectConfig{
	Name: "typeUser",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Name: "id",
			Type: graphql.String,
		},
	}})
