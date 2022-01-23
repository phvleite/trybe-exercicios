const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    Object.keys(order.order).forEach(ord => {
      if (ord === 'delivery') {
        const cliente = order.order.delivery.deliveryPerson;
        const entrega = `entrega para ${order.name}, Telefone: ${order.phoneNumber}, R.${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment} `;
        console.log(`Olá ${cliente}, ${entrega}`);
      }
    });
  }

  // customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    const consumption = [];
    Object.keys(order.order).forEach((ord) => {
      if (ord !== 'delivery') {
        if (ord !== 'drinks') {
          Object.keys(order.order[ord]).forEach((item) => {
            consumption.push(item);        
          });
        } else {
          Object.keys(order.order[ord]).forEach((item) => {
            consumption.push(order.order[ord][item].type);
          });
        }
      }
    });
    let finishedConsumption = '';
    consumption.forEach((item, ind, arr) => {
      if (ind < arr.length - 1) {
        finishedConsumption += `${item}, `;
      } else {
        finishedConsumption += `e ${item} `;
      }
    });
    const finished = `Olá ${order.name}, o total do seu pedido de ${finishedConsumption}é de R$${order.payment.total},00.`;
    console.log(finished);
  }
  
  orderModifier(order);
