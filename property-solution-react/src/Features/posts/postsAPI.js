
export const getPosts = async () => {
    const response =await fetch ('/property-info.json');
    return response.json();
}
