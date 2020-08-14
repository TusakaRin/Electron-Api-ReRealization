# Electron API Realization

- This repository set nodeIntegration to false and try to realize all the function mentioned in repository electron-api-demos

## File Structure

- project dir/
    - frontend/
        - index.js
        - index_style.css
    - sections/
        - windowModal.html  // The window modal to be shown.
    - main.js
    - index.html
    - package.json

# Electron Api 实现（关闭nodeIntegration）

- 本仓库目的是重新实现electron官方的demo api程序([Electron Demo Api](https://github.com/electron/electron-api-demos))，但与官方仓库不同的是关闭了nodeIntegration选项，而是用preload.js实现

