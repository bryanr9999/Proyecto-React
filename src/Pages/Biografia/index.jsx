import Layout from '../../components/Layout'
import React from 'react'
function Biografia () {
    return (
        <Layout>
<div className= 'mt-[85px]  text-black '>
        <div>
        <div className='flex items-center justify-center'>
        <img className='w-[15%] rounded-full  '
       src="src\Imgs_bsda/brayan.jpeg" 
       alt="" 
       />
        </div>
        
        <p className=" md:px-20 text-justify   text-3xl font-serif">
          Mi nombre es Brayan Rivera y decidi crear este sitio web de zapatos con la visión de proporcionar a los amantes del calzado una experiencia única y especializada. Mi objetivo es ofrecer una amplia selección de estilos, colores y precios teniendo en cuenta zapatos desde clásicos atemporales hasta las últimas tendencias de la moda, para satisfacer los gustos y necesidades de todos. Además, la página no solo será un lugar para comprar zapatos, sino también un espacio donde los usuarios puedan obtener inspiración, consejos de moda y participar en una comunidad apasionada por el calzado. 
        </p>
        </div>
        </div>
        
        </Layout>

    
        
       
    )
}
export default Biografia;