import { mongoose } from '@/helpers'

const fileSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  folderId: mongoose.Schema.Types.ObjectId,
  name: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const File = mongoose.model('File', fileSchema)