package store

import (
	"hackathon-iguatemi/iguatemi-server/database"

	"github.com/mitchellh/mapstructure"

	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
)

func NewStore(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new store")
	return nil, nil
}

func GetStore(params graphql.ResolveParams) (interface{}, error) {
	var store Store

	id := params.Args["storeId"].(string)

	res, err := database.GetStore(id)
	if err != nil {
		return nil, err
	}

	if err := mapstructure.Decode(res, &store); err != nil {
		return nil, err
	}

	return store, nil
}

func GetStores(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("get stores")
	return nil, nil
}
