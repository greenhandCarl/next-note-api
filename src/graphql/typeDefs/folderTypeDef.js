import { gql } from 'apollo-server-express'

const folderTypeDefs = gql`
  type Folder {
    id: ID!
    userId: ID!
    name: String!
    parentId: ID
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    foldersByUser(userId: ID!): [Folder!]!
    folder(id: ID!): Folder
  }

  type Mutation {
    createFolder(userId: ID!, name: String!, parentId: ID): Folder!
    updateFolder(id: ID!, name: String, parentId: ID): Folder!
    deleteFolder(id: ID!): Boolean!
  }
`;

export default folderTypeDefs;