// schemas/index.js
import userSchema from './userSchema'
import tweetSchema from './tweetSchema'

export const schemaTypes = [].concat(userSchema, tweetSchema)
