export const  updateObjectInArray = (items: any, itemId: any, objPropName: any, neuObjProps: any) => {

    return items.map((user: any) => {
        if (user[objPropName] === itemId) {
            return {...user, ...neuObjProps}
        }
        return user;
    })
}
