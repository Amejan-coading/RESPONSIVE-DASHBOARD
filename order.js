const orders=[{
    productName: 'Ruko Fu Pro Drone',
    productNum: '49347',
    paymentstatus: 'Due',
    shipping : 'pending'
},
{
    productName: 'Foldable mini drone',
    productNum: '49536',
    paymentstatus: 'Refund',
    shipping : 'Declined'
},
{
    productName: 'Ruko 11 pro Drone',
    productNum: '10112',
    paymentstatus: 'paid',
    shipping : 'Delivered'
},
{
    productName: 'Drone with Camera',
    productNum: '49678',
    paymentstatus: 'Refund',
    shipping : 'Declined'
},
{
    productName: 'GPS 4k Drone',
    productNum: '53627',
    paymentstatus: 'paid',
    shipping : 'Delivered'
},
{
    productName: 'DJI Air 25',
    productNum: '81345',
    paymentstatus: 'Due',
    shipping : 'pending'
},
{
    productName: 'Lozenge Drone',
    productNum: '00482',
    paymentstatus: 'paid',
    shipping : 'Delivered'
},
]
orders.forEach(orders=>{
    const tr= document.createElement('tr')
    const trContent= `<td>${orders.productName}</td>
                        <td>${orders.productNum}</td>
                        <td>${orders.paymentstatus}</td>
                        <td class="${orders.shipping==='Declined'?'danger': orders.shipping==='pending'? 'warning': 'primary'}">${orders.shipping}</td>
                        <td class="primary">Details</td>`

                        tr.innerHTML= trContent;
                        document.querySelector('table tbody').appendChild(tr)

})