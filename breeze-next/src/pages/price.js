import { useAuth } from '@/hooks/auth';
import { getPrice, updatePrice } from '@/lib/api_price'
import { useEffect, useState } from 'react'

export default function Price() {
    const [price, setPrice] = useState();
    const [newPrice, setNewPrice] = useState();

    const {user} = useAuth({middleware:'auth'})
    // console.log(useAuth)

    useEffect(() => {
        getprice()
    }, [])

    const getprice = async () => {
        try {
            const result = await getPrice()
            setPrice(result.price)
        } catch (error) {
            console.error(error)
        }
    }

    const updateprice = async () => {
        try {
            await updatePrice(newPrice);
            setPrice(newPrice);
            setNewPrice('');
        } catch (error) {
            console.error(error);
        }
    }

    if(user?.role === 'admin'){

    return (
            <div style={{ display: 'block', marginTop: '300px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Цена: {price} $</h1>
                    <div style={{ marginTop: '20px' }}>
                        <input
                            type="text"
                            placeholder={price}
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            style={{
                                borderRadius: '5px',
                                borderTopRightRadius: '0',
                                borderBottomRightRadius: '0',
                                border: '1px solid grey',
                                height: '34px',
                            }}
                        />
                        <button
                            onClick={updateprice}
                            style={{
                                borderRadius: '5px',
                                borderTopLeftRadius: '0',
                                borderBottomLeftRadius: '0',
                                border: '1px solid grey',
                                height: '34px',
                            }}>
                            Обновить
                        </button>
                    </div>
                </div>
            </div>
    )
}
}