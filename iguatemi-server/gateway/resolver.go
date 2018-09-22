package gateway

import (
	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
)

//TODO aqui nao é rotas de graphql (eu acho)
func Payment(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("payment")
	return nil, nil
}

func NewStoreAccount(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new store account")
	return nil, nil
}
