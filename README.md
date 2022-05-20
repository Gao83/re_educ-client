# Re_educ 

Re_educ is a web application designed to make available to users a wide range of courses taught by professionals from various fields of knowledge. The basic idea is that users with a professional role can register interactive courses that are available to all those interested. It is the professionals themselves who decide the value of the course, thus generating a wide academic offer that allows users the most convenient choice.

## Getting Started 🚀

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

-Fork this repo, clone it & install all dependencies

$ git clone 
$ npm install
$ npm start

## Routes


# CLIENTs
 |        URL                 |                 DESCRIPTION                     |
|-----------------------------|-------------------------------------------------|
|          /                  | Pagina de inicio                                |
|    /perfil                  |  Perfil estudiante                              |
| /perfil/editar/:id          |  Editar perfil estudiante (POP UP)              |
| /portal-profesor            |  Perfil profesor                                |
| /portal-profesor/editar/:id |  Editar perfil profesor                         |
|    /cursos                  |  Lista de cursos                                |
| /cursos/:categoria          |  Lista de cursos                                |
| /cursos/:search             |  Lista de cursos por botón de búsqueda          |
|    /cursos/:title           |  Detalle de curso                               |       
|   /sobre-nosotros           |  Sobre nosotros/as                              |
|   /contacto                 |  Contacto                                       |
|      /iniciar-sesion        |  Login                                          |
|   /registro                 |  Registro (POP UP)                              |
|     /carrito                |  Lista de cursos que hay en el  carrito         |
| /carrito/checkout           |  Pagar los cursos elegidos                      |
| /acceder/:id                |  Acceso/visualización del curso                 |

## By ROL TEACHER

| METHOD |        URL       |                 DESCRIPTION                     |
|--------|------------------|-------------------------------------------------|
|        | /portal-profesor/crear-curso      |  Crear un curso


# DIRECTORY STRUCTURE


## Home
````

├── components
│   │── Navigation
│   │   │── Navigation.jsx
│   │   └── Navigation.css
│   │── CategoryNavbar                              //Para categorías de los cursos
│   │   │── CategoryNavbar.jsx
│   │   └── CategoryNavbar.css
│   │── Footer
│   │   │── Footer.jsx
│   │   └── Footer.css
│   │── Hero
│   │   │── Hero.jsx
│   │   └── Hero.css
│   │── Carrousel                                    //Mostrar cursos random
│   │   │── Carrousel.jsx
│   │   └── Carrousel.css
│   │── CardsCourseSmall                                //Cards para todo los cursos y todo de todoy de todo
│   │   │── CardsCourseSmall.jsx
│   │   └── CardsCourseSmall.css
│   │── Spiner                                    
│   │   │── Spiner.jsx
│   │   └── Spiner.css
````

## About us
````
│   │── BodyDetails                         
│   │   │── BodyDetails.jsx
│   │   └── BodyDetails.css
````
## Contact
````
│   │── BodyDetails                         
│   │   │── BodyDetails.jsx
│   │   └── BodyDetails.css
````

## Courses 
````
│   │── CarrouselCoursesPopulars                         
│   │   │── CarrouselCoursesPopulars.jsx
│   │   └── CarrouselCoursesPopulars.css
│   │── CarrouselRatingTeachers
│   │   │── CarrouselRatingTeachers.jsx            
│   │   └── CarrouselRatingTeachers.css
│   │── CardsTeachers                                 
│   │   │── CardsTeachers.jsx
│   │   └── CardsTeachers.css
│   │── CardsCourseBig                                      //Cards para lista de cursos (clickables)
│   │   │── CardsCourseBig.jsx
│   │   └── CardsCourseBig.css
│   │── Filter
│   │   │── Filter.jsx
│   │   └── Filter.css

````

## Courses Details
````
│   │── HeroDetails                         
│   │   │── HeroDetails.jsx
│   │   └── HeroDetails.css
│   │── PaymentCard                        
│   │   │── PaymentCard.jsx
│   │   └── PaymentCard.css
│   │── CourseBody                        
│   │   │── CourseBody.jsx
│   │   └── CourseBody.css
│   │── RatingCard                        
│   │   │── RatingCard.jsx
│   │   └── RatingCard.css
│   │── Comments                        
│   │   │── Comments.jsx
│   │   └── Comments.css
````
## Student Profile 
````
│   │── BodyDetails                         
│   │   │── BodyDetails.jsx
│   │   └── BodyDetails.css
│   │── CardsCourseSmall                                   //Cards para todo los cursos y todo de todoy de todo
│   │   │── CardsCourseSmall.jsx
│   │   └── CardsCourseSmall.css
                     
````
## Teacher Profile 
````
│   │── BodyDetails                         
│   │   │── BodyDetails.jsx
│   │   └── BodyDetails.css
│   │── CardsCourseSmall                                   //Cards para todo los cursos y todo de todoy de todo
│   │   │── CardsCourseSmall.jsx
│   │   └── CardsCourseSmall.css
│   │── RatingCard                        
│   │   │── RatingCard.jsx
│   │   └── RatingCard.css
│   │── Comments                        
│   │   │── Comments.jsx
│   │   └── Comments.css
````
## Student Profile Edit
````
│   │── Form                                    
│   │   │── Form.jsx
│   │   └── Form.css
````
## Teacher Profile Edit
````
│   │── Form                                    
│   │   │── Form.jsx
│   │   └── Form.css
````
## Teacher Profile Create Course
````
│   │── Form                                    
│   │   │── Form.jsx
│   │   └── Form.css

````
## Cart Empty                           //renderizado condicional
````
│   │── CartBodyEmpty                                    
│   │   │── CartBodyEmpty.jsx
│   │   └── ForCartBodyEmpty.css
````
## Cart 
````
│   │── CardsCourseSmall                                   
│   │   │── CardsCourseSmall.jsx
│   │   └── CardsCourseSmall.css
│   │── Payment                                    
│   │   │── Payment.jsx
│   │   └── Payment.css
````
## Cart Checkout
````
│   │── PaymentForm                                 
│   │   │── PaymentForm.jsx
│   │   └── PaymentForm.css
│   │── SendPayment                                    
│   │   │── SendPayment.jsx
│   │   └── SendPayment.css
````

## Course Acces
````

│   │── Content                        
│   │   │── Content.jsx
│   │   └── Content.css
│   │── RatingCard                        
│   │   │── RatingCard.jsx
│   │   └── RatingCard.css
│   │── Comments                        
│   │   │── Comments.jsx
│   │   └── Comments.css

````

## Sign up
````

│   │── Form                                    
│   │   │── Form.jsx
│   │   └── Form.css
````

## Login
````

│   │── Form                                    
│   │   │── Form.jsx
│   │   └── Form.css

````

