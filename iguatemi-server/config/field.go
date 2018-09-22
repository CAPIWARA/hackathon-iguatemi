package config

import (
	"hackathon-iguatemi/iguatemi-server/product"
	"hackathon-iguatemi/iguatemi-server/store"
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

//TODO implent scan history model
var FiledScanHistory = &graphql.Field{
	Type:        graphql.NewList(nil),
	Description: "scan history",
	Resolve:     user.ScanHistory,
}

var FieldGetProduct = &graphql.Field{
	Type:        typeProduct,
	Description: "find product",
	Args: graphql.FieldConfigArgument{
		"productId": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
	},
	Resolve: product.FindProduct,
}

var FieldNewProduct = &graphql.Field{
	Type:        typeProduct,
	Description: "new product",
	Args: graphql.FieldConfigArgument{
		"name": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
		"price": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
		"description": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
		"storeId": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
	},
	Resolve: product.NewProduct,
}

var FieldNewStore = &graphql.Field{
	Type:        typeStore,
	Description: "new store",
	Args: graphql.FieldConfigArgument{
		"name": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
		"description": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
	},
	Resolve: store.NewStore,
}

var FieldGetStore = &graphql.Field{
	Type:        typeStore,
	Description: "get store",
	Args: graphql.FieldConfigArgument{
		"storeId": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
	},
	Resolve: store.GetStore,
}

var FieldGetStores = &graphql.Field{
	Type:        typeStore,
	Description: "find all stores",
	Args:        graphql.FieldConfigArgument{},
	Resolve:     store.GetStores,
}

var FieldGetUser = &graphql.Field{
	Type:        typeUser,
	Description: "get user",
	Args: graphql.FieldConfigArgument{
		"userId": &graphql.ArgumentConfig{
			Type: graphql.NewNonNull(graphql.String),
		},
	},
	Resolve: user.FindUser,
}
