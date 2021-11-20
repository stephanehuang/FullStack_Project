# FullStack_Project
Une application pour administrer le TODO list ( BDD pour les utilisateurs et todo objets ; interface de login et interface principal pour voir et modifier la liste)



### Install Manually:

```
Node.js
Python 3.x
Docker
```



### Frameworks:

```
Frontend: React.js
Backend: Fastapi
```



### Installation 

#### Fastapi
```
pip install "fastapi[all]"
```
#### React.js
```
npm install
```


### Run
#### backend
```
cd Projet_ex1/backend
uvicorn main:app --reload
```
#### frontend
```
cd Projet_ex1/frontend
npm start
```



### Report

Au début, on a fait une web application simple pour tester(Projet_test) qui marche bien avec une partie formulaire de todolist. Mais après avoir ajouté des fonctionnalité de sign in et sign up, on a rencontré un bug que la todo-liste ne peut pas afficher dans la page d'accueil. On pense que cela peut-être un problème avec  <Router> ou la connection entre frontend et backend, parce que nos backend et frontend peuvent bien fonctionne séparément.
