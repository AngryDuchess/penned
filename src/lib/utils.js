const getDateCreated = ()=> {
    const date = new Date().toDateString().split(" ")
    const month = date[1];
    const year = date[3];
    return month + " " + year;
}

export {getDateCreated}