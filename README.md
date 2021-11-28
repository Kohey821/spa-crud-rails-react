# SPA投函サンプル（CRUD（RailsとReact））

## セットアップ

- Railsをインストール

```
docker-compose build
```

- テーブルを作成

```
docker-compose run --rm app bin/rails db:migrate
```

- Reactをインストール

```
cd ./frontend
npm install
```

## 起動

- コンテナを起動

```
docker-compose up
```

- react-scriptsの（おそらくwebpackの）devServerを起動

```
cd ./frontend
yarn start
```
