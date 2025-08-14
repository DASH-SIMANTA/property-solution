export const getPosts = async () => {
    const response =await fetch ('/public/property-info.json');
    return response.json();
}