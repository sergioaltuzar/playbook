const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   const issue = {
       title: "semana 2",
       repositoryNameAssociated: "notAssigned",
       status: "Open",
       numberOfComments: "289",
       labels: ["Finish", "Semana-2", "Live-2"],
       author: "carlogilmar",
       dateCreated: "2022-04-12",
       lastUpdate: "2022-04-14",
       getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`
       },
       getGeneralInfo: function(){
        return `This status issue ${this.status}, numer of comments ${this.numComments}`
       }        
   }
   console.log("Autor y Titulo: " + issue.getTitleAndAuthor());
   console.log("Información general: " + issue.getGeneralInfo());
   console.log("Fecha de creación del issue: " + issue.dateCreated);

   const pullRequest = {
       title: "Default",
       branchName: "segundo",
       dateCreated: "2022-04-12",
       status: "Open",
       repositoryNameAssociated: "MissionNodeJS",
       getStatus: function(){
        return `Status ${this.status} Fecha de Creación ${this.dateCreated}`
       },
       getTitleAndBranch: function(){
        return `Title ${this.title}, Branch Name ${this.branchName}`
       },
   }
   console.log("Title and Branch Name: " + pullRequest.getTitleAndBranch());
   console.log("Status and Date Created: " + pullRequest.getStatus());
   console.log("Repository Name: " + pullRequest.repositoryNameAssociated);