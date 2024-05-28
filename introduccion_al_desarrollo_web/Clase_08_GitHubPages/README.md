git branch:
Este comando se utiliza para ver la lista de ramas existentes en el repositorio local. Si se utiliza sin argumentos, muestra todas las ramas y resalta la rama actual con un asterisco. Ejemplo: git branch

git branch <nombre_rama>:
Este comando se utiliza para crear una nueva rama a partir de la rama actual. La nueva rama es idéntica a la rama actual y contiene todos los cambios y archivos en ese punto. Ejemplo: git branch feature-x

git checkout <nombre_rama>:
Este comando se utiliza para cambiar a una rama diferente. Al cambiar de rama, Git actualiza el contenido del directorio de trabajo para reflejar la rama seleccionada. Ejemplo: git checkout feature-x

git checkout -b <nombre_rama>:
Este comando es una combinación de los comandos git branch y git checkout. Se utiliza para crear una nueva rama y cambiar a ella en un solo comando. Ejemplo: git checkout -b feature-x

git merge <nombre_rama>:
Este comando se utiliza para fusionar una rama con la rama actual. Git combinará los cambios de la rama especificada en la rama actual. Ejemplo: git merge feature-x

git branch -d <nombre_rama>:
Este comando se utiliza para eliminar una rama existente que ya ha sido fusionada en la rama actual. Git no permite eliminar una rama que no ha sido fusionada, ya que esto podría resultar en la pérdida de trabajo. Ejemplo: git branch -d feature-x

git branch -D <nombre_rama>:
Este comando se utiliza para forzar la eliminación de una rama, incluso si los cambios de la rama no se han fusionado. Este comando se utiliza con precaución, ya que puede provocar la pérdida de trabajo. Ejemplo: git branch -D feature-x

git log --graph --oneline --decorate --all:
Este comando muestra una vista gráfica del historial de cambios del repositorio, incluyendo todas las ramas. Cada rama se muestra como una línea separada, lo que facilita la visualización de cómo se han fusionado las ramas a lo largo del tiempo. Ejemplo: git log --graph --oneline --decorate --all