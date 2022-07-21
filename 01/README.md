![](https://i.imgur.com/xG74tOh.png)

# Exercício 01

## Purificação

Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

a) DADO CORROMPIDO

- [ ] \*Canis %lupus )familiaris
- [ ] Felis) silvestris \*catus&
- [ ] $Ailuropoda@ melanoleuca!

b) DADO PURIFICADO

- [ ] Canis lupus familiaris
- [ ] Felis silvestris catus
- [ ] Ailuropoda melanoleuca

```javascript=
Input Format

A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&*().
```

```javascript=
Sample Input 0

*Canis %lupus )familiaris
```

```javascript=
Output Format

A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&*().
```

```javascript=
Sample Output 0

Canis lupus familiaris
```

```javascript=
function solucao(stringCorrompida) {
	// seu codigo aqui
}
```

Neste caso seu código deveria imprimir **Canis lupus familiaris**. Lembre-se de testar seu código para outras variações de entrada.

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de classe` `nodeJS`
