(()=>{"use strict";var e={n:r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return e.d(o,{a:o}),o},d:(r,o)=>{for(var t in o)e.o(o,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("express");var o=e.n(r);const t=require("apollo-server-express"),l=t.gql`
  type Query {
    hello: String
  }
`,a=new t.ApolloServer({typeDefs:l,resolvers:{Query:{hello:()=>"Hello, World"}}}),s=o()();!async function(){await a.start(),a.applyMiddleware({app:s}),s.listen({port:4e3},()=>{console.log(`🚀 Server ready at http://localhost:4000${a.graphqlPath}`)})}()})();