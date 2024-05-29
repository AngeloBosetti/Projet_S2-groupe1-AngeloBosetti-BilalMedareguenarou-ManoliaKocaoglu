/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3vdfmtwis54wjh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vrs0ubjz",
    "name": "dateDebut",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dsqigxdo",
    "name": "dateFin",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3vdfmtwis54wjh5")

  // remove
  collection.schema.removeField("vrs0ubjz")

  // remove
  collection.schema.removeField("dsqigxdo")

  return dao.saveCollection(collection)
})
