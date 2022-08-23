 const consultarAPI = async (categorias, pais, setArregloNoticias) => {
    const respuesta = await fetch(`
         https://newsapi.org/v2/top-headlines/sources?apiKey=6624334bbfc14247b52fb14cfcf7fcee&country=${pais}&category=${categorias}`);
    const dato = await respuesta.json();
    setArregloNoticias(dato.sources);
};
export default consultarAPI;