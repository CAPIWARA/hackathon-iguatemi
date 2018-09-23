package gateway

import (
	"encoding/json"
	"net/url"

	"github.com/kr/pretty"
	"github.com/luk4z7/pagarme-go/auth"
	"github.com/luk4z7/pagarme-go/lib/card"
	"github.com/luk4z7/pagarme-go/lib/transaction"
)

var transactionRecord transaction.Transaction
var creditCard card.Card

func CheckoutTransaction(amount int, username, cardid string) (int, error) {
	data, _ := json.Marshal(map[string]interface{}{
		"amount":  amount,
		"card_id": cardid,
		"customer": map[string]interface{}{
			"name": username,
		},
	})

	create, err, errosApi := transactionRecord.Create(data, url.Values{}, auth.Headers{})

	if err != nil {
		pretty.Log(errosApi)
		return 0, err
	}
	return create.Id, nil

}

func RegisterCreditCard(holderName, expiration, ccv, number string) (string, error) {
	data, _ := json.Marshal(map[string]string{
		"card_number":          number,
		"card_holder_name":     holderName,
		"card_expiration_date": expiration,
		"ccv":                  ccv,
	})
	create, err, errorsApi := creditCard.Create(data, url.Values{}, auth.Headers{})
	if err != nil {
		pretty.Log(errorsApi)
		return "", err
	}
	return create.Id, nil
}
