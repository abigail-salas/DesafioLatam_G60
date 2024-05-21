## Comando BASICOS

- `cd` : Manda al directorio principal
- `cd ruta` : Manda al directorio hijo
- `cd ..` : Vuelve un directorio atrás

- `ls` : Da una lista de todas las carpetas dentro de ese directorio
- `ls -a` : Da una lista de todas las carpetas OCULTAS dentro de ese directorio

- `pwd` : Muestra el directorio actual

- `mkdir nombre` : Crea una carpeta

- `touch nombreArchivo` : Crea un nuevo archivo

## Configurar Git por primera vez

Primero crear un usuario en github y luego trabajaremos con ese usuario

1. `git config --global user.name nombreDeUsuarioDeGITHUB`

2. `git config --global user.email suEmailDeGitHub@mail.com`

Si todo está bien, lo controlamos con el comando:

`git config --list`

> ↑↑↑ Devuelve una lista con su configuracion de usuario

`git config user.name`

> ↑↑↑ Devuelve tu nombre de usuario

## Inicializar un nuevo Repositorio con comandos que tira github

```
echo "# DesafioLatam_G60" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/abigail-salas/DesafioLatam_G60.git
git push -u origin main
```

> ↑↑↑ Serie de comandos que tira gitHub a la hora de crear un nuevo repositorio

1. `echo "# DesafioLatam_G60" >> README.md` (OPCIONAL)

   > Crea un archivo nuevo README.md

2. `git init` (SE UTILIZA 1 SOLA VEZ) (**OBLIGATORIO**)

   > Inicializa el nuevo repositorio

3. `git add .`

   > Selecciona todos los archivos dentro del directorio

   3. (VARIANTE OPCIONAL) `git add README.md` [README.md es un ejemplo de un archivo, puede ser index.html]
      > Selecciona SOLO el archivo escrito

4. `git commit -m "first commit"`

   > Guarda los cambios realizados, mediante la seleccion anterior. Lo que está entre comillas, es un comentario que va a hacer referencia al cambio realizado

5. `git branch -M main` (SE UTILIZA 1 SOLA VEZ) (**OBLIGATORIO**)

   > Crea una una rama nueva y la pone por default en el repositorio

6. `git remote add origin https://github.com/abigail-salas/DesafioLatam_G60.git` (SE UTILIZA 1 SOLA VEZ) (**OBLIGATORIO**)

   > Enlaza nuestro directorio con el REPOSITORIO de github, LA URL es de su PROPIO repositorio

7. `git push -u origin main`

   > Subir todos los cambios realizados

## Inicializan un repositorio nuevo con comandos propios

1. `git init` (SE UTILIZA 1 SOLA VEZ) (**OBLIGATORIO**)

   > Inicializa el nuevo repositorio

2. `git branch -M main` (SE UTILIZA 1 SOLA VEZ) (**OBLIGATORIO**)

   > Crea una una rama nueva y la pone por default en el repositorio

3. `git remote add origin https://github.com/abigail-salas/DesafioLatam_G60.git` (SE UTILIZA 1 SOLA VEZ) (**OBLIGATORIO**)

   > Enlaza nuestro directorio con el REPOSITORIO de github, LA URL es de su PROPIO repositorio

## Guardar cambios y subirlos al Repo

Cada vez que se realice un cambio SIGNIFICATIVO, vamos a realizar los siguientes comandos.

1. `git add .`

2. `git commit -m "comentario de referencia"`

3. `git push origin main`

## Otros comandos de git

Para saber como está el estado del proyecto, ponemos el siguiente comando

- `git status`

  > Devuelve si hay modificaciones en el repo o nuevos archivos/carpetas creadas

Para ver el historial de los commits

- `git log`

  > Devuelve todos los commits realizados con fecha, hora y otros datos

Traer un repositorio a los directorios

- `git clone URL`

  > Desde la url te va a hacer una copia del repo clonado, puede ser uno propio o forkeado de otro usuario
