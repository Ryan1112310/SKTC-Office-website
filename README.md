<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SKTC 紹凱動能科技 Office Website

SKTC 紹凱動能科技官方網站專案。本專案使用 React + TypeScript + Vite 建置。

## ⭐ 功能特色

- **極速開發體驗**：使用 Vite 作為建置工具
- **型別安全**：全專案採用 TypeScript
- **自動化部署**：整合 GitHub Actions 自動部署至 GitHub Pages

## 🚀 快速開始

請確認您的環境已安裝 [Node.js](https://nodejs.org/) (建議 v18 以上)。

### 1. 安裝套件

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```
啟動後請瀏覽 `http://localhost:3000` (或終端機顯示的網址)。

### 3. 建置生產版本

```bash
npm run build
```
建置後的檔案將位於 `dist` 資料夾中。

## 📦 部署 (Deployment)

本專案已設定 **GitHub Actions**。當您推送程式碼至 `main` 分支時，系統會自動建置並部署至 **GitHub Pages**。

### 設定步驟：
1. 進入 GitHub Repository 的 **Settings**。
2. 點選左側 **Pages**。
3. 在 **Build and deployment** > **Source** 選擇 **GitHub Actions**。
4. 之後每次 push 到 `main` 即會自動更新網站。

## 📂 專案結構

- `src/` - 原始碼
- `.github/workflows/` - CI/CD 設定檔
- `dist/` - 建置產物 (被 .gitignore 忽略)
