from flask import Flask, request, session
from passlib.hash import pbkdf2_sha256 as sha256
from data.connector import database


class User:

    # Start a new session
    def start_session(self, user):
        del user["password"]
        session["logged_in"] = True
        # session["user"] = user
        session.permanent = True
        return "Success", 200

    def register(self):

        user = {
            "username": request.json["username"],
            "password": request.json["password"],
        }

        # Encrypt the password
        user["password"] = sha256.hash(user["password"])

        # Check if the user already exists
        if database.users.find_one({"username": user["username"]}):
            return "User already exists", 400

        # Insert the user into the database
        if database.users.insert_one(user):
            return self.start_session(user)

        return "Failed to create user", 500

    def login(self):
        user = database.users.find_one({"username": request.json["username"]})

        if user and sha256.verify(request.json["password"], user["password"]):
            return self.start_session(user)

        return "Invalid username or password", 401

    def logout(self):
        session.clear()
        return "Logged out", 200
