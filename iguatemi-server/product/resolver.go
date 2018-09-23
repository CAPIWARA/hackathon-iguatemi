package product

import (
	"hackathon-iguatemi/iguatemi-server/database"

	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
	"github.com/mitchellh/mapstructure"
)

func FindProduct(params graphql.ResolveParams) (interface{}, error) {
	var product Product

	id := params.Args["productId"].(string)

	res, err := database.GetProduct(id)

	if err != nil {
		return nil, err
	}

	if err := mapstructure.Decode(res, &product); err != nil {
		return nil, err
	}

	return product, nil
}

func NewProduct(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new product")
	return nil, nil
}
