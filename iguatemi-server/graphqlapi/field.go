package graphqlapi

import (
	"hackathon-iguatemi/iguatemi-server/user"

	"github.com/graphql-go/graphql"
)

var FieldRegisterCard = &graphql.Field{
	Type:        typeCreditCard,
	Description: "newCard",
	Args: graphql.FieldConfigArgument{
		"holderName": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
		"expiration": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
		"ccv": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
		"number": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
	},
	Resolve: user.NewCard,
}

var FieldGetCards = &graphql.Field{
	Type:        graphql.NewList(typeCreditCard),
	Description: "getCards",
	Resolve:     user.FindCards,
}
