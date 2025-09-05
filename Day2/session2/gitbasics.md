

# create new folder*************************
mkdir web-playground
cd web-playground

# Git repo initialize************************
git init

# Global config (add all repo)****************
git config --global user.name "your name"
git config --global user.email "your mail"

# Specific repo साठी (add only one repo)**************
git config user.name "your name"
git config user.email "your email"

# convert default branch to main branch***************
git config init.defaultBranch main

# Readme file maker command***********************
echo "# Web Playground" > README.md

# Basic ignore file******************
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

# Stage $ Commit******************
git add .
git commit -m "feat: initial project setup with README and .gitignore"

# Commit Convention README मध्ये Add करणे

echo -e "\n## Commit Convention\nWe follow [Conventional Commits](https://www.conventionalcommits.org/)" >> README.md

git add README.md
git commit -m "docs: add commit convention to README"

# for restoring files
git restore <filename>

# GitHub repo link 
git remote add origin https://github.com/<username>/web-playground.git

# branch rename  main
git branch -M main
 # git ignore 
 this said dont track the files
 # Create file
nano .gitignore
