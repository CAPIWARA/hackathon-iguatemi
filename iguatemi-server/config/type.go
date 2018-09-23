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
	}})

var typeProduct = graphql.NewObject(graphql.ObjectConfig{
	Name: "typeProduct",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Name: "id",
			Type: graphql.String,
		},
		"name": &graphql.Field{
			Name: "name",
			Type: graphql.String,
		},
		"price": &graphql.Field{
			Name: "price",
			Type: graphql.String,
		},
		"store": &graphql.Field{
			Name: "store",
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
		"name": &graphql.Field{
			Name: "name",
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
		"name": &graphql.Field{
			Name: "name",
			Type: graphql.String,
		},
		"address": &graphql.Field{
			Name: "address",
			Type: graphql.String,
		},
		"avatar": &graphql.Field{
			Name: "avatar",
			Type: graphql.String,
		},
		"cards": &graphql.Field{
			Name: "cards",
			Type: graphql.NewList(typeCreditCard),
		},
	}})
