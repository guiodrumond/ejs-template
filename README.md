# ejs-template (Embedded JavaScript)

## Objetivos
- Criar um projeto simples usando EJS (Embedded JavaScript).
- O projeto deve trazer as funcionalidades básicas do EJS:
  - Passar variáveis para dinamizar o conteúdo das views
  - Usar loops para renderizar conteúdo dinâmico
  - Usar include para montar views usando partials

## Screenshot
![image](https://user-images.githubusercontent.com/87048670/232037939-271e3386-1ce4-4849-91f7-61cb86eb866c.png)

![image](https://user-images.githubusercontent.com/87048670/232037995-f98ee0f6-568b-42c0-8150-b12e8c638104.png)

![image](https://user-images.githubusercontent.com/87048670/232038051-347246b5-9de7-44da-ac8a-5aea0506bfa5.png)

## Descobertas
1. O uso de variáveis
~~~
app.get("/", (req, res) => {
    res.render("index", {
        título: "Página inicial",
        links: links
    })
});
~~~
Na view chamamos essa variável usando <%=
~~~
    <title>
        <%= título %>
    </title>
~~~

2. Usar loops (forEach)
~~~
      <div class="equipe">
        <% membros.forEach((membro) => { %>
        <div class="equipeMembro">
          <img src=https://randomuser.me/api/portraits/<%= membro.gênero %>/<%= membro.foto %>.jpg>
          <h2><%= membro.nome %></h2>
          <p class="equipeMembroFunção"><%= membro.função %></p>
          <p><%= membro.descrição %></p>
        </div>
        <% }) %>
      </div>
~~~

3. Usar laços usando for
~~~
      <ul>
        <% for (var i=0; i< prêmios.length; i++) { %>
        <li> <%= prêmios[i] %> </li>
        <% } %>
      </ul>
~~~

## Próximos passos
- Esse projeto não tem nenhum exemplo de uso de condicional. Precisamos implementar
- Para aprimorar o uso de SSR vai ser legal refazer esse projeto usando PUG
