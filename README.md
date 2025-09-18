# mru-hacks-practice
## Preface
This is essentially a test repository to learn/iron out issues before mruHacks 2025
## TODO List:
- [ ] (Frontend/Backend?) Landing Page (when not logged in)
- [ ] (Frontend) Login Page
- [ ] (Frontend) Profile Page (when logged in)
- [ ] (Backend) User Authentication when logging in?
- [ ] add more

## Steps to Recreate Frontend Development Environment
### 1. Install Requirements
- Standard Installation
  - [Node.js](https://nodejs.org/en/download/) v20.19.5
  - [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
  - If not using Nix, skip to Step 2
- direnv and Flake Installation (mainly just for me)
  - Create flake.nix file
```bash
nix flake new -t github:nix-community/nix-direnv .
```
  - Set up direnv
```bash
echo "use flake" >> .envrc && direnv allow
```
  - Add nodejs_20 and yarn into pkgs
```nix
packages = [
  pkgs.nodejs_20
  pkgs.yarn
];
```
### 2. Run create-vite
```bash
yarn create vite
```
---