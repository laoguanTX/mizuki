// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 0,
		title: "老官童鞋gogo的笔记本",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=1876949312&s=640",
		desc: "这是我的原始站点。两端内容同步更新",
		siteurl: "https://www.laoguantx.top",
		tags: ["Blog"],
	},
	{
		id: 1,
		title: "浙大强基工力2402",
		imgurl: "https://laoguantx.top/class/班徽.png",
		desc: "浙江大学强基工程力学2402站点，内有丰富学习资源",
		siteurl: "https://www.zjuen.top",
		tags: ["Blog"],
	},
	{
		id: 2,
		title: "michaelliunsky的blog",
		imgurl: "https://blog.mkliu.top/logo.jpg",
		desc: "Unlimited progress!",
		siteurl: "https://blog.mkliu.top/",
		tags: ["Blog"],
	},
	{
		id: 3,
		title: "bbb-lsy07",
		imgurl: "https://images.6uu.us/20250511114301488.JPG",
		desc: "科技激荡人文，洞见智慧本真。",
		siteurl: "https://blog.6uu.us/",
		tags: ["Blog"],
	},
	{
		id: 4,
		title: "南方嘉木",
		imgurl: "https://blog.cancin.cn/img/avatar.webp",
		desc: "不畏将来，不念过往。",
		siteurl: "https://blog.cancin.cn/",
		tags: ["Blog"],
	},
	{
		id: 5,
		title: "Anyeの小站",
		imgurl: "https://www.anye.xyz/upload/Anye-logo-white.webp",
		desc: "Always Nurturing Your Enthusiasm",
		siteurl: "https://www.anye.xyz/links",
		tags: ["Blog"],
	},
	{
		id: 6,
		title: "我的飛鳥集",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2357307393&s=640",
		desc: "心无褶皱，行至春光",
		siteurl: "https://fmcf.cc",
		tags: ["Blog"],
	},
	{
		id: 7,
		title: "异数",
		imgurl: "https://www.yishu.pro/img/logo.jpg",
		desc: "笔落惊风雨，诗成泣鬼神。",
		siteurl: "https://www.yishu.pro/",
		tags: ["Blog"],
	},
	{
		id: 8,
		title: "礼印外盒",
		imgurl: "https://liyinwaihe.com/wp-content/uploads/2025/11/cropped-lywh.png",
		desc: "繁星",
		siteurl: "https://liyinwaihe.com/",
		tags: ["Blog"],
	},
	{
		id: 9,
		title: "青竹小轩",
		imgurl: "https://cdn.hueoo.com/halo/7F8A7FBA-8BD3-4014-8F02-773A1B153548.ico",
		desc: "记录生活碎片，书写独家记忆。",
		siteurl: "https://hueoo.com",
		tags: ["Blog"],
	},
	{
		id: 10,
		title: "Troy's Blog🌞",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2287361636&s=4",
		desc: "总结是为了遇见更好的自己！",
		siteurl: "https://blog.yudog.cn",
		tags: ["Blog"],
	},
	{
		id: 11,
		title: "极客日记",
		imgurl: "https://halo.cos.explorexd.com/halo/jack.jpeg",
		desc: "莫愁前路无知己，天下谁人不识君。",
		siteurl: "https://www.explorexd.com",
		tags: ["Blog"],
	},
	{
		id: 12,
		title: "博客联盟",
		imgurl: "https://boke.love/favicon.ico",
		desc: "博客联盟！",
		siteurl: "https://boke.love/",
		tags: ["Blog"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
