package main

import (
	"context"
	"hackathon-iguatemi/iguatemi-server/config"
	"hackathon-iguatemi/iguatemi-server/database"
	"log"
	"net/http"
	"runtime"

	"github.com/gorilla/mux"
	"github.com/kr/pretty"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU() - 1)
	if err := database.LoadDatabase(); err != nil {
		log.Fatalf("Database error: %v", err)
		return
	}

	mux := mux.NewRouter()
	pretty.Logf("starting on port %s", config.PORT)
	mux.Handle("/graphql", cors(config.Handler))
	log.Fatal(http.ListenAndServe(config.PORT, mux), nil)
}

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Expose-Headers", "Authorization")
		if r.Method == "OPTIONS" {
			return
		}
		ctx := context.WithValue(r.Context(), "id", "1")
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
