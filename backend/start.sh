#!/bin/bash
echo "Starting Migrations for inital Use Admin..."
python3 manage.py migrate
echo ====================================

echo "Creating Migrations..."
python3 manage.py makemigrations
echo ====================================

echo "Starting Migrations..."
python3 manage.py migrate
echo ====================================

echo "Starting Server..."
python3 manage.py runserver 0.0.0.0:8000