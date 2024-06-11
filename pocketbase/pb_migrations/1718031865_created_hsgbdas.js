/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qawgdc2pvmhl0v6",
    "created": "2024-06-10 15:04:24.995Z",
    "updated": "2024-06-10 15:04:24.995Z",
    "name": "hsgbdas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8ytjufs4",
        "name": "nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("qawgdc2pvmhl0v6");

  return dao.deleteCollection(collection);
})
