import marked from 'marked'
import blog from '@/api/blog'

export default {
	data() {
		return {
			blogData: null
		}
	},

	computed: {
		markdown() {
			return marked(this.blogData.content)
		}
	},

	created() {
		const blogId = this.$route.params.blogId
		blog.getDetail({ blogId }).then(res => {
			this.blogData = res.data
		})
	}
}