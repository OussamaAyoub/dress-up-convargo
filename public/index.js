/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('table');
    const template = actors.map(actor => {
      return `
      <tr>
          <td>${actor.who}</td>
          <td>${actor.type}</td>
          <td>${actor.amount}</td>
      </tr>
      `;
    }).join('');
    div.innerHTML=`<tr>
                              <th>Who</th>
                              <th>Type</th>
                              <th>Amount</th>
                          </tr>`;
    div.innerHTML += template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML='';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();
