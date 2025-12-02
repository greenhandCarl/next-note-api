import { folderController } from '@/controllers'

const { createFolder, getFoldersByUser, getFolderById, updateFolder, deleteFolder } = folderController

const folderResolvers = {
  Query: {
    foldersByUser: async (_, { userId }) => await getFoldersByUser(userId),
    folder: async (_, { id }) => await getFolderById(id),
  },
  Mutation: {
    createFolder: async (_, { userId, name, parentId }) =>
      await createFolder({ userId, name, parentId }),
    updateFolder: async (_, { id, name, parentId }) =>
      await updateFolder(id, { name, parentId, updatedAt: Date.now() }),
    deleteFolder: async (_, { id }) => {
      const result = await deleteFolder(id)
      return !!result
    },
  },
  Folder: {
    id: (folder) => folder._id.toString(),
  },
};

export default folderResolvers;