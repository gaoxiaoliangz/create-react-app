# ✨ @gxl/react-scripts ✨

This is a fork of [Create React App](https://github.com/facebookincubator/create-react-app). Added features includes:

- [styled-jsx](https://github.com/zeit/styled-jsx) support
- scss support
- css modules support (filename ends with `.module.css` or `.module.scss` will have css modules enabled)
- css source map support in development
- added config.js to support customizing webpack and webpack dev server
- alias `@` -> `src`

You can create your react project using

```
create-react-app app_name --scripts-version=@gxl/react-scripts
```

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

## Changelog

1.1.8
- scss support
- @ alias
- css/scss source map

1.2.0
- css modules(*.module.(s)css)
- update readme
- update template code using css modules

1.3.5
- add config.js to customize webpack and dev server

1.3.8
- merge react-scripts 1.1.5

1.4.2
- add babel-plugin-react-css-modules
- template uses styleName

1.4.3
- remove babel-plugin-react-css-modules
- add styled jsx
- update template to use styled jsx
- update readme

1.4.4
- add util function `injectBabelPlugin`, `injectModuleRule` and `injectWebpackPlugin`
- add react-hot-loader

1.4.6
- fixed an issue with `output.path`
