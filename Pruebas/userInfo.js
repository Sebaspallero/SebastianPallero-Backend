const users = [];

//JOIN USER TO CHAT

const userJoin = (id,userName)=>{
    const user = {id,userName};
    users.push(user);
    return user;
}

//GET CURRENT USER

const getCurrentUser = (id)=>{
    return users.find(user=> user.id==id)
}

export {userJoin,getCurrentUser}