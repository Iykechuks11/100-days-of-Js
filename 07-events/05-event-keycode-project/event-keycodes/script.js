const key = document.querySelectorAll('.key');

// window.addEventListener('keydown', (e) => {
//   if (e.key === ' ') {
//     key[0].childNodes[0].textContent = e.code;
//     key[1].childNodes[0].textContent = e.keyCode;
//     key[2].childNodes[0].textContent = e.code;
//   } else {
//     key[0].childNodes[0].textContent = e.key;
//     key[1].childNodes[0].textContent = e.keyCode;
//     key[2].childNodes[0].textContent = e.code;
//   }
// });

// Method 2

function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    console.log(keyText, valueText);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);
