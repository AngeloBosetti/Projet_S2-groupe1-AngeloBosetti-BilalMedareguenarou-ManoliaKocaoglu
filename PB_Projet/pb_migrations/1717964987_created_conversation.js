/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y8ezod7twn60t1f",
    "created": "2024-06-09 20:29:47.355Z",
    "updated": "2024-06-09 20:29:47.355Z",
    "name": "conversation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7kk1l0ju",
        "name": "message",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "r422zrhfkm0hogt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "lnvrdksv",
        "name": "personnes",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y8ezod7twn60t1f");

  return dao.deleteCollection(collection);
})
