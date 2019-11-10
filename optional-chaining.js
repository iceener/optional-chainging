const response = {
  user: {
    name: 'overment',
    email: 'adam@overment.com',
    phone: 'try again 🤨',
    address: undefined
  }
}

response.user; /*?*/
response.user?.name; /*?*/
response.user == null ? undefined : response.user; /*?*/

// ?.
// == null ? undefined : 

// Nullish Coalescing
// const street = response.user.address.street; /*?*/
// const street = response.user && response.user.address && response.user.address.street; /*?*/
const street = response.user?.address?.street ?? 'default address'; /*?*/

// Syntax
// obj?.prop ;      // optional static property access
// obj?.[expr];     // optional dynamic property access
// func?.(...args); // optional function or method call

const ui = {
  hello: null,
  // hello() {
  //   return 'Yo!'
  // }
}

ui.hello();
// ui.hello?.(); /*?*/