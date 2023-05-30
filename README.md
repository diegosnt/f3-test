# f3-test

## notas:

1) crear repo github 
  f3-test
  
2) crear proyecto react, local (minsmo nombre repo github)
```
 npm  create  vite@latest  f3-test  --  --template  react
```

3) instalar dependencias
```
 cd f3-test
 npm i
```
4) abriri vcode
```
  code .
```
5) reemplazar gitignore
 https://www.toptal.com/developers/gitignore/api/visualstudiocode,node,react

6) iniciar app
 npm run dev
 http://localhost:5173/
 
7) asociar repo local y github
```
 echo "# f3-test" >> README.md
 git init
 git add .
 git commit -m "se crear el proyecto"
 git remote add origin git@github.com:diegosnt/f3-test.git
 git push -u origin main
 ```