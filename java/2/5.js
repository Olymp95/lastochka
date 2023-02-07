// var name = 'admin', text;

// if (name == 'admin') {
//   text = 'Hi admin';
// } else if (name == 'manager') {
//   text = 'Hello man';
// } else if (name == '') {
//   text = 'No login';
// } else {
//   text = '';
// }

var name = 'admin', text;

(name == 'admin') ?
text = 'Hi admin' :
(name == 'manager') ?
text = 'Hello man' :
(name == '') ?
text = 'No login' :
text = '';

alert(text);