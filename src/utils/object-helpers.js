export const  updateObjectInArray = (items, itemId, objPropName, neuObjProps) => {

    return items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...neuObjProps}
        }
        return user;
    })
}
