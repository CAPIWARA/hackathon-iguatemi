package main

import (
	"log"
	"net/http"
	"runtime"

	"github.com/gorilla/mux"
	"github.com/kr/pretty"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU() - 1)

	mux := mux.NewRouter()
	pretty.Sprintf("starting on port %s", PORT)
	mux.Handle("/graphql", cors(Handler))
	log.Fatal(http.ListenAndServe(PORT, nil))
}

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Expose-Headers", "Authorization")
		if r.Method == "OPTIONS" {
			log.Println("options method ")
			return
		}
		next.ServeHTTP(w, r)
	})
}
