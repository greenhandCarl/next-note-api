const folderTypeDefs = `#graphql
  type Folder {
    _id: ID!
  }

  input CreateFolderInput {
    name: String!
    parentId: ID
    createdBy: ID!
  }

  input UpdateFolderInput {
    name: String
    parentId: ID
  }

  type FolderDeleteResponse {
    message: String!
  }

  type Query {
    getFolderById(folderId: ID!): Folder
    getFolders(createdBy: ID!, parentId: ID): [Folder]
  }

  type Mutation {
    createFolder(input: CreateFolderInput!): Folder
    updateFolder(folderId: ID!, input: UpdateFolderInput!): Folder
    deleteFolder(folderId: ID!): FolderDeleteResponse
  }
`;

export default folderTypeDefs;