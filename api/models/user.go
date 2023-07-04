package models

type SportsFan struct {
	Username            string `bson:"username"`
	CollegeFootballTeam string `bson:"collegeFootballTeam"`
	Email               string `bson:"email"`
}