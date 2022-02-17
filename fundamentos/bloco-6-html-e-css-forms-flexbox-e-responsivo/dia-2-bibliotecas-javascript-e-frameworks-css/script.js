

const validation = new JustValidate('#form');

validation
  .addField('#nome-completo', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Name is required',
    },
  ])

  .addField('#e-mail', [
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
  ])
  
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Date is required',
    },
  ])
  
  .addField('#cpf', [
    {
      rule: 'maxLength',
      value: 11,
    },
    {
      rule: 'required',
      errorMessage: 'CPF is required',
    },
  ])
  
  .addField('#endereco', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 200,
    },
    {
      rule: 'required',
      errorMessage: 'Adress is required',
    },
  ])
  
  .addField('#cidade', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 48,
    },
    {
      rule: 'required',
      errorMessage: 'City is required',
    },
  ])
  
  .addField('#estado', [
    {
      rule: 'required',
      errorMessage: 'State is required',
    },
  ]);

  const estados = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goías',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraíma',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins'
    ];
  
  const selectElement = document.getElementById('estado');
  
  function stateGenerate() {
    for (let i = 0; i < estados.length; i += 1) { 
    const createOption = document.createElement('option');
      createOption.innerText = estados[i];
      createOption.value = estados[i];
      selectElement.appendChild(createOption);
    }
  }
  window.onload(stateGenerate());
  