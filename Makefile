build:
	echo "Docker ビルド"
	docker-compose build

up:
	echo "アプリケーション起動"
	docker-compose up -d

run unit test:
	echo: "API単体テスト実施"
	docker-compose run api npm run test