# rome
a system for build front end pages

toolkit:
1. favicon制作 [比特虫](https://www.bitbug.net/)
2. turbo monorepo工具 [turbo](https://turborepo.org/)


todo:
1. 将已有项目集成进turborepo，梳理构建流程
2. 代码质量控制流程，husky eslint prettier git-cz
3. ui视图 storybook 规范化文档TypeDoc 查重 jscpd
4. ci/cd

模块
1. rome_template_factory:
模板工厂，维护组件和模块的仓库，拖拽生成模板
react-dnd
事件流配置，imove bpmn.js antvX6

2. rome_configuration_center
配置中心，拉模板，拉组件，拉产品信息，结合生成当前页面流程
// adapter
// h5预览

3. rome_product_h5
// 组件开发，独立发布
// 渲染器，读配置递归渲染