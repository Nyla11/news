# news

# 📰 学院文章展示小程序

基于 UniApp 新闻列表示例改造，实现展示信工学院官方公众号文章的功能。

## ✨ 功能特色

- 📝 使用本地 `posts.json` 文件替代远程新闻 API
- 🖼️ 列表页展示文章标题、发布时间和封面图片
- 📄 详情页支持 HTML 富文本内容展示
- 🏷️ 页面保留原始 UI 设计，上面添加 "孙晗宁" 标识
- 💡 原官方示例代码以注释形式保留，便于学习参考

## 📂 项目结构

```
.
├── news/                    # 小程序页面目录
│   ├── list.vue            # 文章列表页
│   └── detail.vue          # 文章详情页
├── 1.png                   # 文章1封面图
├── 2.png                   # 文章2封面图
├── 3.png                   # 文章3封面图
├── 4.png                   # 文章4封面图
├── 5.png                   # 文章5封面图
├── 6.png                   # 文章6封面图
├── posts.json              # 文章数据文件
└── README.md
```

## 🔄 主要改造内容

### ✅ 数据源改造
**原API地址：**
```javascript
https://unidemo.dcloud.net.cn/api/news
```

**替换为本地JSON文件：**
```javascript
posts.json
```

**实际访问地址：**
```javascript
https://raw.githubusercontent.com/Nyla11/school-data/main/posts.json
```

### ✅ 图片资源处理
封面图片使用仓库根目录下的PNG文件，例如：
```javascript
https://raw.githubusercontent.com/Nyla11/school-data/main/1.png
```

所有图片URL已预先配置在 `posts.json` 文件中。

### ✅ 代码兼容性
- 保留原始API调用代码（注释形式）
- 维持原有UI界面风格
- 确保功能完整性和稳定性

## 🚀 使用说明

1. 克隆或下载本项目到本地
2. 使用 HbuilderX 打开项目
3. 配置小程序AppID
4. 运行到微信开发者工具

## 📝 数据格式

`posts.json` 文件包含文章数据，格式如下：
```json
{
  "data": [
    {
      "id": 1,
      "title": "文章标题",
      "created_at": "2024-01-01",
      "cover": "https://raw.githubusercontent.com/Nyla11/school-data/main/1.png",
      "content": "<p>文章HTML内容</p>"
    }
  ]
}
```
