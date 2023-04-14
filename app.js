const express = require("express");

const path = require("path");

const app = express();

app.set("views", `${__dirname}`);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));

const links = [
    { href: "/", texto: "Home" },
    { href: "/sobre", texto: "Sobre" },
    { href: "/equipe", texto: "Equipe" },
    { href: "/contato", texto: "Contato" },
    { href: "/login", texto: "Login" },
]

const textosSobre = [
    { título: "Sobre nós", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde delectus possimus voluptates eum neque reprehenderit praesentium harum voluptatum, illum expedita soluta magnam molestias incidunt at dolorem mollitia nulla aliquam aspernatur nobis? Tenetur voluptate excepturi ad ipsa repellendus voluptates in quibusdam. Obcaecati accusamus eaque voluptas eius placeat, dolore, asperiores tempore iste dolorem id enim neque voluptatibus tempora quas laborum pariatur, sunt similique praesentium eligendi. Quos cupiditate facere cum quam tempore ab doloremque consequatur non animi hic." },
    { título: "O que fazemos aqui", texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque fugiat quis consequatur nobis amet, illum laboriosam ea nam est? Inventore corrupti omnis, alias dolores ipsum eligendi aut consequuntur harum. Distinctio, tempora at iste dicta commodi rem excepturi sunt sed, aliquid perspiciatis veniam illo ducimus repudiandae soluta maxime provident voluptates fugiat neque labore! Voluptate, iusto consequatur corrupti ipsum laudantium eum id tempora, obcaecati modi doloremque eaque repudiandae suscipit accusantium aut culpa ullam debitis corporis ab incidunt perferendis dignissimos quasi aspernatur! Tenetur?" },
    { título: "Nossos diferenciais", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet ipsa ea neque, facere minus repudiandae odio doloribus ipsum deleniti beatae ab et temporibus, repellendus consequatur voluptates nihil exercitationem voluptatibus." }
]

const prêmios = [
    "Prêmio nacional",
    "Certificado muito famoso",
    "Certificado inventado",
    "Prêmio de reconhecimento",
    "Prêmio internacional",
]

const membrosDaEquipe = [
    { nome: "Marea Morisson", função: "Diretor", gênero: "men", foto: 67, descrição: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatibus obcaecati nemo esse nulla quasi incidunt vel, sint illum consectetur minima voluptate, perferendis quo corrupti cum asperiores, facilis praesentium repudiandae!" },
    { nome: "Samira Santinis", função: "Consultora", gênero: "women", foto: 34, descrição: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quidem. Numquam, aspernatur. Officia id rerum unde dicta fuga quos laudantium, quod eum quae inventore! Inventore ipsa reprehenderit placeat magni quo!" },
    { nome: "Joshua Jojovich", função: "Designer", gênero: "men", foto: 15, descrição: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati, suscipit laboriosam ea commodi ipsam quaerat perspiciatis inventore saepe quasi voluptas voluptates ullam dolorem magni veritatis consequuntur dolorum eum voluptatem." },
    { nome: "Marie Bernard", função: "Designer", gênero: "women", foto: 55, descrição: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi id, eaque odio voluptates placeat quod quidem veritatis itaque accusamus expedita dignissimos enim totam sunt adipisci impedit repellat fugiat ex. Amet." },
]

const contatos = [
    { tipo: "telefone", contato: "(11) 98877-6655"},
    { tipo: "telefone", contato: "(11) 98877-6655"},
    { tipo: "email", contato: "contato@nossaempresa.com"},
    { tipo: "endereço", contato: "Rua Guarariba, 2000. São Paulo - SP"},
    { tipo: "endereço", contato: "Avenida São Girondino, 555. Rio de Janeiro - RJ"},
]

app.get("/", (req, res) => {
    res.render("index", {
        título: "Página inicial",
        links: links
    })
});

app.get("/sobre", (req, res) => {
    res.render("sobre", {
        título: "Conheça nossa empresa",
        links: links,
        textosSobre: textosSobre,
        prêmios: prêmios
    })
})

app.get("/equipe", (req, res) => {
    res.render("equipe", {
        título: "Nossa equipe",
        links: links,
        membros: membrosDaEquipe
    })
});

app.get("/contato", (req, res) => {
    res.render("contato", {
        título: "Entre em contato",
        links: links,
        contatos: contatos
    })
});

app.get("/login", (req, res) => {
    res.render("login", {
        título: "Página de login",
        links: links
    })
});

app.listen(8000, () => console.log("Servidor rodando!"));