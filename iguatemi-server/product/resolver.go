package product

import (
	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
)

func FindProduct(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("find product")
	return nil, nil
}

func NewProduct(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new product")
	return nil, nil
}
