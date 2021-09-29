export const setCorrectData = (value:any)=>{
    return {
        id: value.id,
        firstName: value.name.split(' ')[0],
        lastName: value.name.split(' ')[1],
        email:value.email,
        website:value.website,
        company: value.company.name,
        isAdd: false
    }
}