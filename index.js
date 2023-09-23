let fruits = [
  {id: 1, title: 'Apples', price: 20, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9dWtB64x2W-vjDvbOa14wop1AXDqvwvArg&usqp=CAU'},
  {id: 2, title: 'Oranges', price: 30, img: 'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg'},
  {id: 3, title: 'Mango', price: 40, img: 'https://chilli-no5.com/wp-content/uploads/2021/01/health-benefits-of-mangoes.jpg'}
]

const myModal = $.modal({
  title: 'new Modal',
  closable: true,
  content: `
    <p>Modal is working</p>
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      myModal.close();
    }},
    {text: 'Cancel', type: 'danger', handler() {
      myModal.close();
    }}
  ]
});

const toHTML = card => `
  <div class="col">
    <div class="card">
      <img class="card-img-top" src="${card.img || ''}">
      <div class="card-body">
        <h5 class="card-title">${card.title || ''}</h5>
        <a class="btn btn-primary" data-btn="price" data-id="${card.id}">Price</a>
        <a class="btn btn-danger" data-btn="remove" data-id="${card.id}">Delete</a>
      </div>
    </div>
  </div>
`

function render() {
  const html = fruits.map(toHTML).join();
  document.querySelector('[data-cards]').innerHTML = html;
}

render();

const priceModal = $.modal({
  title: 'Price',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Close', type: 'primary', handler() {
      priceModal.close();
    }}
  ]
});

document.addEventListener('click', event => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;

  if (btnType) {
    const fruit = fruits.find(f => f.id === id);

    if (btnType === 'price') {
      priceModal.setContent(`
        <p>Price for ${fruit.title}: ${fruit.price}</p>
      `)
      priceModal.open();
    } else if (btnType === 'remove') {
      $.confirm({
        title: 'Are you sure?',
        content: `<p>You're removing the fruit <strong>${fruit.title}</strong></p>`
      }).then(() => {
        fruits = fruits.filter(f => f.id !== id);
        render();
      }).catch(() => {

      });
    }
  }
})
