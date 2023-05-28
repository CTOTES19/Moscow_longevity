package handlers

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"

	"github.com/avdushin/rgoauth/pkg/utils"
	"github.com/avdushin/rgoauth/vars"
	"github.com/gorilla/mux"
	"golang.org/x/crypto/bcrypt"
)

// получаем данные пользователя
func GetUser(w http.ResponseWriter, r *http.Request) {
	utils.EnableCORS(&w)
	if r.Method == "OPTIONS" {
		return
	}
	// Установка соединения с базой данных MySQL
	db, err := sql.Open("mysql", vars.DBConn+vars.DBName)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	id := mux.Vars(r)["id"]

	// Выполнение запроса к базе данных для получения данных пользователя по ID
	var user User
	err = db.QueryRow("SELECT id, username, fio, birth, sex, city, addressofresidence, phone, email FROM users WHERE id = ?", id).Scan(&user.ID, &user.Username, &user.FIO, &user.Birth, &user.Sex, &user.City, &user.AddressOfResidence, &user.Phone, &user.Email)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	response, err := json.Marshal(user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(response)
}

// Обновляем данные пользователя
func UpdateUser(w http.ResponseWriter, r *http.Request) {
	utils.EnableCORS(&w)
	if r.Method == http.MethodPut {
		db, err := sql.Open("mysql", vars.DBConn+vars.DBName)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer db.Close()

		id := mux.Vars(r)["id"]
		// fmt.Println("ID:", id)

		// Получение данных пользователя из запроса
		var user User
		if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		// Хеширование пароля
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Обновление данных пользователя в БД MySQL
		stmt, err := db.Prepare("UPDATE users SET username = ?, fio = ?, birth = ?, sex = ?, city = ?, addressofresidence = ?, phone = ?, email = ?, password = ? WHERE id=?")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		defer stmt.Close()

		if _, err = stmt.Exec(user.Username, user.FIO, user.Birth, user.Sex, user.City, user.AddressOfResidence, user.Phone, user.Email, hashedPassword, id); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		response := map[string]string{
			"message": "Данные успешно обновлены",
		}
		jsonResponse, err := json.Marshal(response)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(jsonResponse)
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}
