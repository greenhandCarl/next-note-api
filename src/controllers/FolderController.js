import { FolderModel } from '@/models'

class FolderController {
  async createFolder ({ userId, name, parentId }) {
    const folder = new FolderModel({ userId, name, parentId })
    return await folder.save()
  }

  async getFoldersByUser (userId) {
    return await FolderModel.find({ userId })
  }

  async getFolderById (id) {
    return await FolderModel.findById(id)
  }

  async updateFolder (id, updateData) {
    updateData.updatedAt = Date.now()
    return await FolderModel.findByIdAndUpdate(id, updateData, { new: true })
  }

  async deleteFolder (id) {
    return await FolderModel.findByIdAndDelete(id)
  }
}

export const folderController = new FolderController()
 