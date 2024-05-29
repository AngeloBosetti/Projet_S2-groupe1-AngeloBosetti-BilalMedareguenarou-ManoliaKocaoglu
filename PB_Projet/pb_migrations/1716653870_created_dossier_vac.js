/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3vdfmtwis54wjh5",
    "created": "2024-05-25 16:17:50.399Z",
    "updated": "2024-05-25 16:17:50.399Z",
    "name": "dossier_vac",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zlwwryns",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "isjyeoy8",
        "name": "images",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "fqxi59k8",
        "name": "field",
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
        "id": "rf8dwiws",
        "name": "couverture",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("3vdfmtwis54wjh5");

  return dao.deleteCollection(collection);
})
