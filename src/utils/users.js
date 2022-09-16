const users = []

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate the data
    if (! username || !room){
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Vallidate username
    if (existingUser){
        return {
            error: 'Username is in use'
        }
    }

    // Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    // We could use filter, but it will keep runing even after we found a match
    const index = users.findIndex((user) => user.id === id)

    // we are returning the details of the user match found. As splice will give array of all index removed, so we are removing justone & access it at 0 index
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user => user.id === id))
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

// addUser({id:22, username:'Deepak', room: 'Delhi'})
// addUser({id:42, username:'Pawan', room: 'Delhi'})
// addUser({id:52, username:'Bhagat', room: 'Goa'})
// console.log(users)
// console.log(getUsersInRoom('goa'))
//console.log(users)



module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}