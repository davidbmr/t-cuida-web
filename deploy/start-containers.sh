#!/bin/bash

DOCKER_CONFIG_FILE=docker-compose.yml
AWS_ACCOUNT_ID=455708140048
AWS_LOCATION=us-east-2
ROOT_FOLDER=t-cuida-web
ECR_NAME=t-cuida-web
IMAGE_TAG=latest

docker system prune -f

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_LOCATION.amazonaws.com

docker pull $AWS_ACCOUNT_ID.dkr.ecr.$AWS_LOCATION.amazonaws.com/$ECR_NAME:$IMAGE_TAG

cd /home/$(whoami)/t-cuida-web
docker compose -f $DOCKER_CONFIG_FILE up -d --force-recreate
