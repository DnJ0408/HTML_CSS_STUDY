document.addEventListener('DOMContentLoaded', () => {
    const menu = [
        { name: '아메리카노', price: 4100, image: 'americano.jpg' },
        { name: '카페라떼', price: 4600, image: 'latte.jpg' },
        { name: '카푸치노', price: 4600, image: 'cappuccino.jpg' },
        { name: '카라멜 마끼아또', price: 5800, image: 'caramel.jpg' },
        { name: '자바 칩 프라푸치노', price: 6300, image: 'javachip.jpg' },
        { name: '딸기 요거트 블렌디드', price: 6300, image: 'strawberry.jpg' }
    ];

    let order = {};
    let totalPrice = 0;

    const menuContainer = document.getElementById('menu');
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    const submitOrderButton = document.getElementById('submit-order');
    
    menu.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="./img/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₩${item.price}</p>
            <button class="add-to-order" data-index="${index}">주문 추가</button>
        `;

        card.querySelector('.add-to-order').addEventListener('click', (event) => {

            const index = event.target.getAttribute('data-index');
            const menuItem = menu[index];

            if(!order[menuItem.name]){   
                order[menuItem.name] = {price: menuItem.price, quantity: 1};
            }else{
                order[menuItem.name].quantity +=1;
            }

            totalPrice += menuItem.price;

            updateOrderList();
        })

        menuContainer.appendChild(card);
    })
    
    // 주문 내역 업데이트 함수
    function updateOrderList() {
        orderList.innerHTML = '';
        for (let itemName in order) {
            const orderItem = order[itemName];
            const orderItemElement = document.createElement('li');
            orderItemElement.innerHTML = `
                ${itemName} - ₩${orderItem.price.toLocaleString()}
                <button class="decrease" data-item="${itemName}">-</button>
                ${orderItem.quantity}
                <button class="increase" data-item="${itemName}">+</button>
                <button class="remove" data-item="${itemName}">삭제</button>
            `;
            orderList.appendChild(orderItemElement);
        }
        totalPriceElement.textContent = totalPrice.toLocaleString();
    }

    // 아이템 삭제 로직
    orderList.addEventListener('click', (event) => {
        const itemName = event.target.getAttribute('data-item');
        
        //수량 증가
        if (event.target.classList.contains('increase')) {
            order[itemName].quantity += 1;
            totalPrice += order[itemName].price;
            updateOrderList();
        }

        //수량 감소
        if (event.target.classList.contains('decrease')) {
            if (order[itemName].quantity > 1) {
                order[itemName].quantity -= 1;
                totalPrice -= order[itemName].price;
            } else {
            totalPrice -= order[itemName].price;
            delete order[itemName];
            }
            updateOrderList();
        }

        //수량 삭제
        if (event.target.classList.contains('remove')) {
            totalPrice -= order[itemName].price * order[itemName].quantity;
            delete order[itemName];
            updateOrderList();
        }
    });

    // 주문 제출 로직
    submitOrderButton.addEventListener('click', () => {
        if (Object.keys(order).length > 0) {
            alert('주문해 주셔서 감사합니다!');
            order = {};
            totalPrice = 0;
            updateOrderList();
        } else {
            alert('주문 내역이 비어 있습니다!');
        }
    });
});