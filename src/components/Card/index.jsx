// Definición del componente Card que recibe datos como prop
const Card = (data) => {
    return (
        <div className=" relative top-16 flex justify-center items-center">
            {/* Contenedor principal de la tarjeta */}
            <div className="relative top-10 bg-white hover:bg-red-600 cursor-pointer w-56 h-60 rounded-lg">
                {/* Contenido de la tarjeta */}
                <figure className="relative mb-2 w-full h-4/5">
                    {/* Etiqueta en la esquina inferior izquierda */}
                    <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                        {/* Aquí puede ir algún contenido */}
                    </span>
                    {/* Imagen principal de la tarjeta */}
                    <img
                        className="w-full h-full hover:bg-red-300 object-cover rounded-lg"
                        src={data.data.photo}
                        alt=""
                        srcSet=""
                    />
                    {/* Icono '+' en la esquina superior derecha */}
                    <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 ">
                        +
                    </div>
                </figure>
                {/* Información debajo de la imagen */}
                <p className="flex justify-between">
                    <span className="text-sm font-light">{data.data.name}</span>
                    <span className="text-lg font-medium">${data.data.size}</span>
                    <span className="text-sm font-light">{data.data.color}</span>
                    <span className="text-lg font-medium">${data.data.price}</span>
                </p>
            </div>
        </div>
    );
};

// Exportación del componente Card
export default Card;
