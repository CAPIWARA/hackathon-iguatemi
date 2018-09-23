package user

import (
	"hackathon-iguatemi/iguatemi-server/database"
	"hackathon-iguatemi/iguatemi-server/gateway"

	"github.com/graphql-go/graphql"
	"github.com/kr/pretty"
	"github.com/mitchellh/mapstructure"
)

func NewCard(params graphql.ResolveParams) (interface{}, error) {
	var user User

	holderName := params.Args["holderName"].(string)
	expiration := params.Args["expiration"].(string)
	ccv := params.Args["ccv"].(string)
	number := params.Args["number"].(string)

	gateway.RegisterCreditCard(holderName, expiration, ccv, number)
	return user, nil
}

func ScanHistory(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("scan history")
	return nil, nil
}

func FindUser(params graphql.ResolveParams) (interface{}, error) {
	var user User

	id := params.Context.Value("id").(string)
	pretty.Log("user: ", id)
	res, err := database.GetUser(id)

	if err != nil {
		return nil, err
	}

	if err := mapstructure.Decode(res, &user); err != nil {
		return nil, err
	}
	pretty.Log("user: ", user)
	return user, nil
}

func NewUser(params graphql.ResolveParams) (interface{}, error) {
	pretty.Log("new user")
	return nil, nil
}
