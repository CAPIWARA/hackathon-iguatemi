package user

type User struct {
	Id      string `json:"id"`
	Name    string `json:"name"`
	Address string `json:"address"`
	Avatar  string `json:"avatar"`
	Cards   []Card `json:"cards"`
}

type Card struct {
	HolderName string `json:"holderName"`
	Expiration string `json:"expiration"`
	Number     string `json:"number"`
	Ccv        string `json:"ccv"`
}
