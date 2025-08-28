# App de Geração de Contratos e Portfolio de Psicóloga

## Portfolio
- O sistema possui uma página de portfolio para a psicóloga.
- A página de portfolio contém as seguintes seções:
    - **Hero:** Apresentação da psicóloga com botão para agendar uma conversa.
    - **Especialidades:** Detalhes sobre a formação, experiência e abordagem terapêutica.
    - **Depoimentos:** Depoimentos de clientes.
    - **Perguntas Frequentes (FAQ):** Seção de perguntas e respostas.
- A página de portfolio possui um botão flutuante para acessar o gerador de contratos.

## App de Geração de Contratos
### Requisitos
- O template do contrato é definido no arquivo `template.html`.
- Os campos do contrato estão definidos no arquivo `template.html`, em campos delimitados por `{{` e `}}`.
- O arquivo `template.html` contém seções que diferem caso o paciente seja menor de idade ou maior de idade. 
O sistema deve solicitar se o paciente é menor de idade ou maior de idade e gerar o contrato adequado.
- O sistema deve utilizar ícones font-awesome para a interface.
- O sistema deve utilizar o bootstrap para o estilo.
- O sistema deve possuir estilo responsivo.
- O sistema deve possuir tema claro e escuro, que  será alternado automaticamante de acordo com o tema do sistema operacional do usuário.
- O Sistema será hospedado no GitHub Pages, numa URL do tipo `https://<username>.github.io`.
- O sistema deve ser PWA (Progressive Web App), permitindo que o usuário instale o aplicativo no seu dispositivo móvel ou desktop.
- O sistema deve exportar o contrato gerado em PDF, utilizando a biblioteca `jsPDF`.
- O sistma deve armazenar valores selecionados pelo usuário no `localStorage`, para que o usuário não precise preencher os campos novamente ao acessar o sistema novamente.
