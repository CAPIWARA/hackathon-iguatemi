package database

import (
	"errors"

	"github.com/kr/pretty"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/guregu/dynamo"
)

var DynamoConnection *dynamo.DB

func LoadDatabase() error {
	s, err := session.NewSession()
	if err != nil {
		return errors.New("problem to create session: " + err.Error())
	}
	if DynamoConnection == nil {
		DynamoConnection = dynamo.New(s, &aws.Config{
			Region:     aws.String("sa-east-1"),
			MaxRetries: aws.Int(3),
		})
	}
	return nil
}

func GetUser(uuid string) (interface{}, error) {
	var data map[string]interface{}
	if err := DynamoConnection.Table("user").Get("id", uuid).
		One(&data); err != nil {

		pretty.Log("dynamodb find by hash key error: ", err)
		return nil, err
	}
	return data, nil
}

func GetStore(uuid string) (interface{}, error) {
	var data map[string]interface{}
	if err := DynamoConnection.Table("store").Get("id", uuid).
		One(&data); err != nil {

		pretty.Log("dynamodb find by hash key error: ", err)
		return nil, err
	}
	return data, nil
}

func GetProduct(uuid string) (interface{}, error) {
	var data map[string]interface{}
	if err := DynamoConnection.Table("product").Get("id", uuid).
		One(&data); err != nil {

		pretty.Log("dynamodb find by hash key error: ", err)
		return nil, err
	}
	return data, nil
}
