# Session 1: VS Code Fundamentals + Extensions

## Tasks Completed
- Explored VS Code UI (Activity Bar, Side Bar, Editor, Panel, Status Bar)
- Used Command Palette (`Ctrl + Shift + P`) for quick access to commands
- Turned on Settings Sync (themes, extensions, keybindings, snippets, settings)
- Installed and reviewed essential extensions
- Configured Prettier as the default formatter
- Enabled `formatOnSave`

---

## Installed Extensions
1. **Prettier - Code Formatter**  
   - Opinionated code formatter  
   - Supports multiple languages (JS, TS, HTML, CSS, JSON, etc.)  
   - Configurable via `.prettierrc`  

2. **Live Server**  
   - Launches a local development server  
   - Auto-refreshes browser on file save  

3. **ESLint**  
   - Identifies and reports JavaScript/TypeScript code issues  
   - Enforces coding standards  
   - Can auto-fix some problems (`eslint --fix`)  

---

## VS Code Settings
A `.vscode/settings.json` file has been committed with Prettier configuration:

# json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
