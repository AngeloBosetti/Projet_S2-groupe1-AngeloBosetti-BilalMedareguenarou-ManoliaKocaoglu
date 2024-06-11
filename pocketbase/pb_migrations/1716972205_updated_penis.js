/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xak2b8s8k8bm8s9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szywcgqt",
    "name": "proprietaire_et_nom_du_penis",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xak2b8s8k8bm8s9")

  // remove
  collection.schema.removeField("szywcgqt")

  return dao.saveCollection(collection)
})
