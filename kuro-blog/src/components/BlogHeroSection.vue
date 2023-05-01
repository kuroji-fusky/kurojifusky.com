<script setup lang="ts">
import BlogItem from "./BlogItem.vue"
</script>

<template>
	<section class="">
		<div class="flex gap-8">
			<div class="flex flex-col w-[60%] gap-y-8">
				<BlogItem
					large
					title="Why I love BTS 💜"
					img="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/11/06/a08d1560-1f50-11eb-99d6-deeedd63f648_image_hires_151116.jpg"
				/>
				<BlogItem large title="A list of Seokjin's Dad Jokes" />
			</div>
			<div class="flex flex-col w-2/5 gap-y-5">
				<BlogItem
					title="Furries are amazing, and here's why"
					img="https://res.cloudinary.com/kuroji-fusky-s3/image/upload/v1679017987/fursonas/comms/MCM_headshot-comm.png"
				/>
				<BlogItem
					title="Making Uncle Roger proud of my cooking skills"
					img="https://i.imgflip.com/4akqi2.png"
				/>
				<BlogItem
					title="How I managed to make out with an otter"
					img="https://res.cloudinary.com/kuroji-fusky-s3/image/upload/v1676870465/projects/myfursona/stickers_ozzy/ozzy_shy.png"
				/>
			</div>
		</div>
	</section>
</template>
