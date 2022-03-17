<script setup>
import Title from '@/components/core/Title.vue';
import Text from '@/components/core/Text.vue';
import Img from '@/components/core/Img.vue';
</script>

<script>
export default {
	components: { Title, Text, Img }
}
</script>

<template>
	<div class="accordion" id="accordionAbout">
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#whatis">
					<Text>Qual a origem deste projeto?</Text>
				</button>
			</div>
			<div id="whatis" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>Este projeto foi desenvolvido para o Desafio de Desenvolvimento FrontEnd da BemPaggo! <a href="https://www.bempaggo.com.br/">https://www.bempaggo.com.br/</a></Text>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#whattec">
					<Text>Tecnologias utilizadas no projeto</Text>
				</button>
			</div>
			<div id="whattec" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>Utilizei o framework Vue.js para desenvolver boa parte do projeto, juntamente com a biblioteca Bootstrap para acelerar o desenvolvimento.</Text>
					<Text>Para gerenciar o projeto foi usado o NPM e também para gerenciamento de versão foi usado o GIT.</Text>
					<Text>Além de também utilizar o Jest para desenvolver os testes unitários.</Text>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#visualchanges">
					<Text>Mudanças visuais feitas em relação ao projeto inicial</Text>
				</button>
			</div>
			<div id="visualchanges" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>Em minha implementação, fiz adição de alguns itens a mais que não constavam no projeto inicial, são eles:</Text>
					<hr />
					<Text>Adição de imagem em cada produto.</Text>
					<Text>Adição de descrição em cada produto.</Text>
					<Text>Adição de preço em cada produto.</Text>
					<Text>Também foi adicionado uma tabela para visualização dos itens adicionados em sua compra.</Text>
					<Text>Quantidade de volumes da compra.</Text>
					<Text>Valor total a pagar.</Text>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tecimpl">
					<Text>Implementações técnicas do projeto</Text>
				</button>
			</div>
			<div id="tecimpl" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>As implementações técnicas foram as seguintes:</Text>
					<hr />
					<Text>A listagem dos produtos foi pensada para ser feita usando JSON. o que irá facilitar para popular a listagem de produtos por meio de uma API por exemplo.</Text>
					<Text>Segue abaixo um exemplo de JSON contendo dois produtos:</Text>
<pre><code>
[
	{
		"id": "1",
		"name": "React",
		"description": "Os mais famosos adesivos React estão aqui!",
		"imgUrl": "https://i.imgur.com/k9Jbo8J.png",
		"imgAlt": "Logo do React.",
		"price": 5.99
	},
	{
		"id": "2",
		"name": "Vue",
		"description": "Os melhores adesivos de Vue estão te esperando!",
		"imgUrl": "https://i.imgur.com/Sw9ZSur.png",
		"imgAlt": "Logo do Vue.",
		"price": 6.99
	}
]</code></pre>
					<hr />
					<Text>O projeto ja conta com as informações separadas para serem enviadas para a API que irá processar a compra quando o usuário clica em "Ir para checkout".</Text>
					<hr />
					<Text>Além dessas, também foi criado testes unitários para componentes utilizando o Jest, para que seja garantido a qualidade do código e experiência do usuário.</Text>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accordion-item {
	background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
	border-bottom: none !important;
}

.accordion-item:last-child {
	border-bottom: 1px solid rgba(0,0,0,.125) !important;
}

.accordion-button {
	background-color: #fff;
	padding: 25px !important;
	box-shadow: none;
}

.accordion-button:not(.collapsed) {
  border: 1px solid rgba(0,0,0,.125);
}

p {
  margin-bottom: 0px !important;
}

a {
	word-break: break-all;
}
</style>