const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey:'a154e1e5b45e80de44c9c87cfbc7f61c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`

}
export default apiConfig;