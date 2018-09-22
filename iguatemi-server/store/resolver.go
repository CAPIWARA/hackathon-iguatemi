package store

import (
	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
)

func NewStore(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new store")
	return nil, nil
}

func GetStore(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("get store")
	return nil, nil
}

func GetStores(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("get stores")
	return nil, nil
}
