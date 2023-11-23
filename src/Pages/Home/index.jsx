import Layout from '../../components/Layout'
import { useState, useEffect } from 'react'
import Card from '../../components/Card'

function Home (){
    const [items, setItems] = useState(null)
    useEffect(() => {
        // https://fakeapi.platzi.com/
        fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Shoe/')
            .then(response => response.json())
            .then(data => setItems(data))

    })
    
    return (
        <Layout>
            
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }

            </div>
        </Layout>
    )
}
export default Home