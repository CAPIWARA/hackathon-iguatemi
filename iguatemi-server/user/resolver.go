package user

import (
	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
)

func NewCard(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new card")
	return nil, nil
}

func FindCards(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("get cards")
	return nil, nil
}

func ScanHistory(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("scan history")
	return nil, nil
}

func FindUser(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("find user")
	return nil, nil
}

func NewUser(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new user")
	return nil, nil
}
