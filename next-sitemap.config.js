/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.NEXT_PUBLIC_URL // Update with your site URL if needed

module.exports = {
	siteUrl: SITE_URL,
	generateRobotsTxt: true,
	exclude: [
		'/submission',
		'/dashboard/posts/published',
		'/dashboard/posts/draft',
		'/dashboard/posts/pending',
		'/dashboard/posts/trash',
		'/dashboard/posts/schedule',
		'/dashboard/edit-profile/general',
		'/dashboard/edit-profile/profile',
		'/dashboard/edit-profile/password',
		'/dashboard/edit-profile/socials',
		'/ncmaz_for_ncmazfc_preview_blocks',
		'/preview',
		'/reset-password',
		'/readinglist',
		'/dashboard',
		'/dashboard/edit-profile',
		'/dashboard/posts',
		'/wordpress-sitemap.xml', // Keep this to exclude the WordPress sitemap itself
	],
	robotsTxtOptions: {
		additionalSitemaps: [`${SITE_URL}/wordpress-sitemap.xml`],
	},
	// transform: async (config, path) => {
	// 	// Get the current date and time in the format m/d/Y g:i a
	// 	const currentDate = new Date()
	// 	//const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours() % 12 || 12}:${currentDate.getMinutes().toString().padStart(2, '0')} ${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`
	// 	const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()} ${currentDate.getHours() % 12 || 12}:${currentDate.getMinutes().toString().padStart(2, '0')} ${currentDate.getHours() >= 12 ? 'PM' : 'AM'}`;

	// 	// Define paths to assign low priority
	// 	const lowPriorityPaths = ['/contact', '/login', '/sign-up'] // Check paths without the trailing slashes
	// 	const isLowPriority = lowPriorityPaths.includes(path.replace(/\/$/, '')) // Remove trailing slash before checking
	// 	const isHomePage = path === '/'

	// 	// Set the change frequency based on the page type
	// 	let changefreq = 'daily' // Default to daily
	// 	if (isHomePage) {
	// 		changefreq = 'always' // Home page changes always
	// 	} else if (isLowPriority) {
	// 		changefreq = 'monthly' // Low-priority pages change less often
	// 	}

	// 	const priority = isLowPriority ? 0.1 : 1.0 // Low priority for specific pages

	// 	console.log('Transforming:', path, {
	// 		priority,
	// 		changefreq,
	// 		lastmod: formattedDate,
	// 	})

	// 	return {
	// 		loc: `${SITE_URL}${path}`, // Ensure loc URL is correct
	// 		lastmod: formattedDate, // Formatted date as m/d/Y g:i a
	// 		priority: priority, // Set priority
	// 		changefreq: changefreq, // Set change frequency
	// 	}
	// },
	transform: async (config, path) => {
		// Lấy ngày giờ hiện tại
		const currentDate = new Date();
		
		// Định dạng ngày theo chuẩn ISO 8601: YYYY-MM-DD
		const formattedDate = currentDate.toISOString().split('T')[0]; // Lấy phần ngày (YYYY-MM-DD)
	  
		// Định nghĩa các đường dẫn với độ ưu tiên thấp
		const lowPriorityPaths = ['/contact', '/login', '/sign-up']; // Kiểm tra các đường dẫn không có dấu gạch chéo cuối
		const isLowPriority = lowPriorityPaths.includes(path.replace(/\/$/, '')); // Xóa dấu gạch chéo cuối khi kiểm tra
		const isHomePage = path === '/';
	  
		// Cài đặt tần suất thay đổi dựa trên loại trang
		let changefreq = 'daily'; // Mặc định là daily
		if (isHomePage) {
		  changefreq = 'always'; // Trang chủ thay đổi liên tục
		} else if (isLowPriority) {
		  changefreq = 'monthly'; // Các trang có độ ưu tiên thấp thay đổi ít hơn
		}
	  
		const priority = isLowPriority ? 0.1 : 1.0; // Đặt độ ưu tiên thấp cho các trang cụ thể
	  
		console.log('Transforming:', path, {
		  priority,
		  changefreq,
		  lastmod: formattedDate,
		});
	  
		return {
		  loc: `${SITE_URL}${path}`, // Đảm bảo URL là chính xác
		  lastmod: formattedDate, // Ngày theo định dạng ISO 8601
		  priority: priority, // Độ ưu tiên
		  changefreq: changefreq, // Tần suất thay đổi
		};
	  },
}
