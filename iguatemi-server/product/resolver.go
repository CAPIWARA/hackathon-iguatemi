package product

import (
	"hackathon-iguatemi/iguatemi-server/database"

	"github.com/kr/pretty"

	"github.com/graphql-go/graphql"
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
	pretty.Log("params: ", params.Args)
	name := params.Args["name"].(string)
	//TODO wrooong
	id := params.Args["productId"].(string)
	price := params.Args["price"].(string)
	store := params.Args["storeId"].(string)
	description := params.Args["description"].(string)
	image := params.Args["image"].(string)

	product := Product{
		Name:        name,
		Price:       price,
		Store:       store,
		Description: description,
		Id:          id,
		Image:       image,
	}

	if err := database.SaveProduct(product); err != nil {
		return nil, err
	}

	return product, nil
}
