const initialState = {
    products:[
        {
            id: 1,
            name: 'shirt',
            title: 'Spódniczki aleFigle',
            basePrice: 90,
            colors: ['red', 'lightbeige', 'white','pink','green'],
            sizes: [
              { name: '1-2lata', additionalPrice: 10 },
              { name: '3-4lata', additionalPrice: 15 },
              { name: '5-6lat', additionalPrice: 20 },
              { name: '7-15lat', additionalPrice: 25 }
            ]
          },
          {
            id: 2,
            name: 'hat',
            title: 'Czapki aleFigle',
            basePrice: 30,
            colors: ['lightblue', 'grey', 'red','beige','pink','blue'],
            sizes: [
              { name: 'S', additionalPrice: 10 },
              { name: 'M', additionalPrice: 15 },
              { name: 'L', additionalPrice: 20 },
              { name: 'XL', additionalPrice: 25 }
            ]
          },
         
    ]
}
export default initialState;