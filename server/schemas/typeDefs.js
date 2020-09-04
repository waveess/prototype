const { gql } =require('apollo-server-express');

const typeDefs = gql`
        type Category {
            _id: ID
            name: String
        }

        type Product {
            _id: ID
            name: String
            description: String
            image: String
            quantity: int
            price: Float
            category: Category
        }

        type Order {
            _id: ID
            purchaseDate: String
            products: [Product]
        }

        type: User {
            __id: ID
            firstName: String
            lastName: String
            email: String
            orders: [Order]
        }

        type Auth {
            token: ID
            user: User
        }

        type Query {
            categories: [Category]
            products(category: ID, name: String): [Product]
            product(_id: ID!): Product
            user: User
            order(_id: ID!): Order
        }

        type Mutation {
            addUser(firstNmae: String!, lastName: String!, email: String!, password: String!): Auth
            addOrder(products: [ID]!): Order
            updateUser(firstName: String, lastName: String, email: String, password: String): User
            updateProduct(_id: ID!, quantity: int!): Product
            login(email: String!, password: String!): Auth
        }`
        ;

        module.exports = typeDefs;