export const apiUrl = "http://localhost:3000/api/"
// export const mongodbConnection = "mongodb+srv://vercel-admin-user:iXqzm7arhOWnb1gb@cluster0.s6pnqew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
export const mongodbConnection = process.env["MONGODB_URI"]