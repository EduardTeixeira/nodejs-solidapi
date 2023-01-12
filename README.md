# nodejs-solidapi
Conceito de SOLID, utilizando projeto simples de NodeJs.

Ao realizar o request através do PostMan, o sistema vai verificar se existe algum outro usuário já criado com o mesmo email,
caso não exista será armazenado o usuário e enviado um email de sucesso através do MailTrap, caso exista esse email criado então
será disparada um erro pela aplicação.
