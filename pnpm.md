### 主空间新加npm包
``` bash
pnpm add @type/node  --workspace-root
pnpm -w add xxxx
--workspace-root |  -w  主工作空间 

```
### 子空间新加npm包
``` bash
pnpm -r --filter ./settings/vite add vite

./settings/vite 指向你的包
```

### 更新包版本
``` bash
pnpm -r update  更新所有包
```
