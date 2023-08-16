### setups
``` bash
npm init -y
git init

pnpm add -D typescript @types/node 
```

- @types/node  for console, document, ... objects

### configuration
- add .gitignore file
- add tsconfig.json
  link: [https://github.com/tsconfig/bases/blob/main/bases/node-lts.json]
- add script
```bash
"scripts": {
  "dev": "tsc -w",
  "link-cli": "yarn --global unlink hd-cli  && yarn --global link hd-cli && chmod +x ./dist/index.js"}
```
- add dist folder
```
- create dist folder
- add  "outDir": "dist" in tsconfig file
- add 'dist' in gitignore file
```
- add cli program
```bash
"bin": { "hd-cli": "./dist/index.js" }
```

## run the command in global
```
pnpm add commander  

```

- Example 1
```bash
hd-cli --help
Usage: hd-cli [options] <string>

Arguments:
  string      string to log

Options:
  -h, --help  display help for command
```

- Example 2
```bash
hd-cli git:(main) ✗ hd-cli world 
Hello world

```