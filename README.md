#crear proyecto node
npm init -y

#iniciar un repositorio local en git
git init

#añadir archivos al repositorio y hacer commit
git add .



#ejecutar archivo app.js
npm run start

#configuracion inicial
git config --global user.name "jon"
git config --global user.email "jondelgado@gmail.com"

#verificar configuraciones de git

#configuracion informacion 
git config --list
git config user.name
git config user.email

…or push an existing repository from the command line
git remote add origin https://github.com/david-fugs/unit-testing.git
git branch -M main
git push -u origin main


#commit de los cambi

git add .
git commit -m "comentarioaqui"

git status para ver los status