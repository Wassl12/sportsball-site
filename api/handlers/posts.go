package handlers

import (
	m "api/models"
	"context"
	"encoding/json"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func GetPosts(w http.ResponseWriter, r *http.Request) {

	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	collection := client.Database("sportsball").Collection("posts")

	cursor, err := collection.Find(context.Background(), bson.M{})
	if err != nil {
		log.Println(err)
		http.Error(w, "Failed to retrieve fans", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(context.Background())

	var fans []m.SportsFan
	for cursor.Next(context.Background()) {
		var fan m.SportsFan
		if err := cursor.Decode(&fan); err != nil {
			log.Println(err)
			http.Error(w, "Failed to retrieve fans", http.StatusInternalServerError)
			return
		}
		fans = append(fans, fan)
	}

	jsonFans, err := json.Marshal(fans)
	if err != nil {
		log.Println(err)
		http.Error(w, "Failed to retrieve fans", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsonFans)
}