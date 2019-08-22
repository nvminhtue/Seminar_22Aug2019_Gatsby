##️⛳ Cài đặt cơ bản 
- Cài đặt gatsby cli
$npm install  -g gatsby-cli
- Tạo mới 1 project có tên là Family
$gatsby new Family
- Thêm vào plugins để trên transform JSON tạo thành api với sự giúp đỡ của GraphQL
$npm install --save gatsby-transformer-json

## 🎓 GatsbyJS là gì

- GatsbyJS là một Framework của ReactJS, là một static page generator. 
- GatsbyJS là một static page generator nhưng nó vẫn có thể tương tác vì bản chất nó vẫn được xây dựng trên ReactJS
- GatsbyJS giải quyết rất tốt vấn đề của ReactJS về SSR cũng như SEO thông qua plugins "gatsby-plugin-react-helmet", nó sẽ add tất cả các plugins, attributes mà bạn add vào components như là title, meta...rồi thêm vào static HTML page Gatsby build .
- GatsbyJS sử dụng nodeJS để generate developing environment nhưng bản chất của Gatsby là static page nên nodeJS không cần thiết ở server side.
- GastbyJS đổ data từ các file JSON, MakeDown... và dựa vào GraphQL để tạo thành api đổ dữ liệu lên static page.
- GatsbyJS là một PWA(Progressive Web App) có những thiết lập giúp trang được tạo ra có tốc độ truy xuất nhanh, một phần là nhờ dữ liệu tối ưu thông qua transform các file JSON, md...Ngoài ra còn ngăn chặn những nguy cơ về CMS(Content management system)

## 📂 So sánh cơ bản với NextJS

-Giống như NextJS, GatsbyJS cũng là 1 Framework tạo ra để khác phục điểm yếu về SSR cũng như SEO của ReactJS.
- GatsbyJS tương đối dễ học hơn so với NextJS.
- Khác biệt lớn nhất là GatsbyJS thường được dùng để tạo ra các static site trong khi NextJS là các dynamic sites.

## 💫 Deploy

- GatsbyJS kết hợp với Netlify tương đối dễ dàng và nhanh chóng. Đọc thêm ở https://www.gatsbyjs.org/docs/deploying-to-netlify/

<!-- AUTO-GENERATED-CONTENT:END -->
