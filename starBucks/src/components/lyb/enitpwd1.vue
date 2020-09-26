<template>
	<div class="box">
		<div class="box-1">
			<van-field v-model="password" type="password" name="密码" label="请输入密码" :rules="[{ required: true, message: '请填写密码' }]" />
		</div>
		<div class="box-1">
			<van-field v-model="password1" type="password" name="密码" label="再次输入密码" :rules="[{ required: true, message: '请填写密码' }]" />

		</div>
		<div class="box-2">
			<van-button round block type="info" native-type="submit" @click="fun1">
				提交
			</van-button>
		</div>
	</div>
</template>

<script>
	import {
		Toast
	} from 'vant';
	import axios from "axios";
	import {
		Form
	} from 'vant';
	export default {
		name: "enit1",
		data() {
			return {
				password: "",
				password1: ""
			}

		},
		methods: {
			fun1() {
				let pwd = /^[a-z0-9_-]{6,18}$/;
				if (pwd.test(this.password)) {
					if (this.password == this.password1) {
						let params = new URLSearchParams();
						params.append("password", this.password);
						axios({
							url: "/api/user/alterpwd/",
							method: "post",
							data: params
						}).then(res => {
							if (res.data.code == 0) {
								Toast({
									message: '重置成功',
									position: 'top',
								});
							 this.$router.push("menbers");
							}
							else {
								Toast({
									message: '密码修改失败',
									position: 'top',
								});
							}
						})
					} 
					
					else {
						Toast({
							message: '两次密码不一致',
							position: 'top',
						});

					}}
		
		else {
			Toast({
				message: '密码格式不正确',
				position: 'top',
			});
		
		}
	}}
	}
	
</script>

<style scoped="scoped">
	.box {
		width: 100%;
		height: 5.3rem;
		padding: 0.32rem;
		box-sizing: border-box;
		background-color: #FAFAFA;
	}

	.box-1 {
		width: 100%;
		height: 0.5rem;
		/* border: 1px solid black; */
	}

	.box-1 span {
		display: block;
		width: 25%;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.06rem;
		text-align: right;
		float: left;
	}

	.box-1 input {
		width: 70%;
		height: 0.3rem;
		float: left;
	}

	.box-2 {
		margin-top: 1rem;
	}
</style>
