const {v4:uuid} = require('uuid')
const user = require('../models/user')

const resolvers = {
    Query :{
        users(parent, args, { models }){
            return models.User.findAll()
        },
    
        user(parent, { id }, { models }){
            return models.User.findByPk(id)
        },
    
        posts(parent, args, { models }){
            return models.Post.findAll()
        },
    
        post(parent, {id}, { models }){
            return models.Post.findByPk(id)
        },
    },

    Mutation:{
        async addUser(parent, { input }, { models }){
            const { name, email } = input
            return models.User.create({
                name,
                email
            })
        },
    
        async addPost(parent, { input }, { models }){
            const { content, userId } = input
            return models.Post.create({
                content,
                userId
            })
        },

        async deleteUser(parent, { id }, { models }){
            const userID = id
            await models.User.destroy({ where: { id: userID } })

            return true
        },

        async deletePost(parent, { id }, { models }){
            const postID = id
            await models.Post.destroy({ where: { id: postID } })

            return true
        },
        
        async updateUser(parent, { id, input }, { models }){
            const userID = id
            const name = input.name
            const email = input.email
            models.User.update({
                name,
                email
            }, 
            {
                where:{id:userID},
            })

            return "updated"
        },

        async updatePost(parent, { id, input }, { models }){
            const postID = id
            const content = input.content
            models.Post.update({
                content
            },
            {
                where:{id:postID},
            })
            return models.Post.findByPk(postID)
        }
    },

    User: {
        posts: async (user) => {
            user.getPosts(user);
          },
      },
    Post: {
        user(parent, args, { models })
        }
    },
}

module.exports = { resolvers }