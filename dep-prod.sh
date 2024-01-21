docker-compose -f ./docker-compose-prod.yml build
docker build --target prod -t votre-image:prod .


kubectl apply -f ./deploy-prod.yml

