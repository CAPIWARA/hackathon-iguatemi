package product

type Product struct {
	Id          string `json:"id"`
	Name        string `json:"name"`
	Price       string `json:"price"`
	Store       string `json:"store"`
	Image       string `json:"image"`
	Description string `json:"description"`
}
