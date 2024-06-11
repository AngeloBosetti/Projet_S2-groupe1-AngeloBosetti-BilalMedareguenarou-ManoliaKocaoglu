/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("85wm8chs69aqvfl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "85wm8chs69aqvfl",
    "created": "2024-05-29 13:38:43.031Z",
    "updated": "2024-05-29 13:43:50.992Z",
    "name": "AZHHHHHHHHHHHH",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u7pb8itd",
        "name": "users",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "eqrbr3et",
        "name": "messages",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
