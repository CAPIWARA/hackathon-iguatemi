package gateway

import (
	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
)

func Payment(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("payment")
	return nil, nil
}

func NewStoreAccount(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new store account")
	return nil, nil
}
