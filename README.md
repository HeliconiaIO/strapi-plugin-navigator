<div align="center" width="150px">
  <img style="width: 150px; height: auto;" src="doc/logo-128.png" alt="Logo - Strapi Navigator" />
</div>

# Strapi Plugin Navigator
> A strapi plugin to traverse next and previous records on content manager.

![](doc/screen.jpg)

## How to Install

Copy the following code and run from your terminal

```
#yarn
yarn add strapi-plugin-navigator
```
```
#pnpm
pnpm add strapi-plugin-navigator
```
```
#npm
npm install strapi-plugin-navigator
```

The plugin should now be active and show the Next and Previous buttons.

## How to use
After activation of the Plugin, click the Next and Previous Buttons in the edit view.

## Troubleshooting
If the Next and Previous buttons does not show up, try adding the following attribute in the `config/plugins.js` file:

```
'navigator': true
```
Or if you do not have the plugins.js file yet, add the file with the following contents:
```
module.exports = () => ({
  'navigator': true,
});
```

## Issues

Please report any issues on [GitHub](https://github.com/heliconiaIO/strapi-plugin-navigator/issues/new).