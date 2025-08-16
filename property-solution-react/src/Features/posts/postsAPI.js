export const getPosts = async () => {
    const response =await fetch ('/property-info.json');
    return response.json();
}

// export async function getPosts() {
//   try {
//     const res = await fetch('/property-info.json');
//     const text = await res.text(); // see raw response
//     // console.log(text);
//     return JSON.parse(text);
//   } catch (error) {
//     // console.error('Error fetching posts:', error);
//     throw error;
//   }
// }
