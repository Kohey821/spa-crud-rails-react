# SPA CRUDサンプル（RailsとReact）

## セットアップ

### Rails

```
./setup.sh
```

または`./setup.sh`を一行ずつ実行する

### React

```
cd ./frontend
npm install
```

.env.local.defaultをコピーして.env.localを作成

```
cp .env.local.default .env.local
```

## 起動

- Railsを起動

```
docker-compose up
```

- react-scriptsの（おそらくwebpackの）devServerを起動

```
cd ./frontend
yarn start
```

[localhost:3000](localhost:3000)で閲覧
