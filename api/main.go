package main

import (
	"api/handlers"
	"log"
	"net/http"
)

func main() {
	
	http.HandleFunc("/fans",handlers.GetPosts)

	// Start the HTTP server
	log.Println("Server listening on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
