# ✨ @gxl/react-scripts ✨

This is a fork of [react-scripts](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts). Added features includes:

- css source map support in development
- added config.js to support customizing webpack and webpack dev server
- alias `@` -> `src`
- added `injectBabelPlugin`, `injectModuleRule` & `injectWebpackPlugin` util functions to conveniently modify webpack config
- added support for [react scoped css](https://github.com/gaoxiaoliangz/react-scoped-css)

You can create your new react project using

```
create-react-app app_name --scripts-version=@gxl/react-scripts
```

or use in an existing create-react-app project (which hasn't been ejected yet)

```
npm install @gxl/react-scripts --save-dev
npm remove react-scripts
```
