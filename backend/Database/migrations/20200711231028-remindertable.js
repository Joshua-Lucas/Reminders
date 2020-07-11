'use strict'

var dbm
var type
var seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db) {
  return (
    // db.addForeignKey(
    //   'reminders',
    //   'users-table',
    //   'user_id',
    //   {
    //     user_id: 'id',
    //   },
    //   {
    //     onDelete: 'CASCADE',
    //     onUpdate: 'RESTRICT',
    //   }
    // ),
    db.createTable('reminders', {
      id: { type: 'bigint', primaryKey: true, autoIncrement: true },
      title: { type: 'string' },
      details: { type: 'text' },
      daytobe: { type: 'text' },
      frequencey: { type: 'bigint' },
      user_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'id',
          table: 'users',
          rules: {
            onDelete: 'CASCADE',
          },
          mapping: 'id',
        },
      },
    })
  )
}

exports.down = function (db) {
  return db.dropTable('reminders')
}

exports._meta = {
  version: 1,
}
