<script setup lang="ts"></script>

<template>
	<div>
		<BuiHeading :level="1">Heading</BuiHeading>
		<BuiHeading :level="2">Heading</BuiHeading>
		<BuiHeading :level="3">Heading</BuiHeading>
		<BuiText tag="p">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
			ratione vel fugiat atque repellendus! Architecto labore eligendi optio
			veniam.
		</BuiText>
		<BuiText sub-p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
			ratione vel fugiat atque repellendus! Architecto labore eligendi optio
			veniam.
		</BuiText>
		<BuiArticle prose-h1 prose-h2 prose-h3 prose-p>
			<h1>Heading</h1>
			<h2>Heading</h2>
			<h3>Heading</h3>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
				praesentium rem accusantium, libero qui cumque!
			</p>
		</BuiArticle>
	</div>
</template>

<style scoped></style>
