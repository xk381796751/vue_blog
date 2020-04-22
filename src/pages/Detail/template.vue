<template>
	<div id="detail" v-if="blogData">
		<section class="user-info">
			<img :src="blogData.user.avatar" :alt="blogData.user.username" :title="blogData.user.username" class="avatar">
			<h3>{{blogData.title}}</h3>
			<p>
				<router-link :to="`/user/${blogData.user.id}`">{{blogData.user.username}}</router-link> 发布于 {{blogData.createdAt}}
			</p>
		</section>
		<section class="article" v-html="markdown"></section>
	</div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>