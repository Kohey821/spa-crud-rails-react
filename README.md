# SPA CRUDサンプル（RailsとReact）

## セットアップ

### Rails

```
chmod +x ./setup.sh && ./setup.sh
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
