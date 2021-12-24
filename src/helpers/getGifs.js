export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Uc70e0XTrWZZpLYSnaLq42Dfcy4OepXh`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    console.log(gifs);
    //setImages(gifs);

    return gifs;
}

