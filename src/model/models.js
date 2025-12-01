const mongoose = require('mongoose')

const folderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const fileSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  folderId: mongoose.Schema.Types.ObjectId,
  name: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Folder = mongoose.model('Folder', folderSchema)
const File = mongoose.model('File', fileSchema)

module.exports = { Folder, File }