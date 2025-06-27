# BrightAid – Donation Platform  
**Built: Jan – Apr 2025**

BrightAid is a donation platform that connects international students with sponsors through a 1:1 giving model. Designed for transparency and scalability, the platform’s backend was built using **ASP.NET Core** and deployed serverlessly with **AWS Elastic Beanstalk** and **ECS Fargate**.

---

## 🔧 Technologies Used

- **ASP.NET Core**
- **C#**
- **DynamoDB**
- **AWS Elastic Beanstalk**
- **ECS Fargate**
- **AWS ECR**
- **Google Apigee (API Gateway)**
- **AutoMapper**
- **RESTful API**
- **Docker**
- **WPF (Windows Presentation Foundation)**

---

## Architecture & Features

- Built following the **Repository Pattern** for clean data/logic separation.
- Data stored in **DynamoDB**, structured for scalable access.
- Two domain-specific **Controllers** supported by DTOs and AutoMapper.
- Containerized with **Docker** and pushed to **AWS ECR** for deployment.
- A **WPF desktop client** was developed to validate full API interaction.

---

## Project Collaboration

This was a **pair programming** project developed by  
**Voltaire A. Rono** and **Kevin Jenkins**  
for the **API Engineering and Cloud Computing** course  
under **Professor Julio Vinicius A. de Carvalho** at **Centennial College**.

---

## Deployment

- Backend deployed using **Elastic Beanstalk + ECS Fargate**
- Docker images managed through **AWS ECR**

---
