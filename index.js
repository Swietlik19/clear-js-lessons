const fruits = [
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
      console.log('Primary btn clicked');
      myModal.close();
    }},
    {text: 'Cancel', type: 'danger', handler() {
      console.log('Danger btn clicked');
      myModal.close();
    }}
  ]
});
