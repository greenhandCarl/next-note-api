const folderResolvers = {
  Query: {
    getFolderById: async (_, { folderId }) => {
      return {
        _id: folderId,
        data: 'Hello world' + folderId
      };
    },
  },
  Mutation: {
    createFolder: async (_, { input }) => {
      return folderController.createFolder(input);
    },
  },
};

export default folderResolvers;