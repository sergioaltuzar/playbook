const twitter = {
    user: "sergio_altuzar",
    trendingtopic: "batman",
    notificaciones: 45,
    hastag: "#launchx",
    likes: 2343,
    rt: 3553,
    messages: 122,
    ubicacion: "Chiapas",
    guardados: 345,
    listas: 43,

   
    getperfil: function(){
      return `perfil de ${this.user}`
    },
    getTopicoshastag: function(){
        return `Trending:  ${this.trendingtopic} | Hastag: ${this.hastag}`
      },

      getlikesrt: function(){
        return `Likes: ${this.likes} Rt: ${this.rt}`
      },
    getUbica: function(){
        return `Es de: ${this.ubicacion} `
      }
   }

   console.log("Este es el perfil de : "+twitter.getperfil());
   console.log("Mis tendencias:  "+twitter.getTopicoshastag());
   console.log(twitter.getlikesrt());
   console.log(twitter.getUbica());



   const facebook = {
    user: "Sergio Altuzat",
    edad: 35,
    post: 2000,
    likes: 10023,
    comment: 10234,
    messages: 278,
    ubicacion: "Chiapas",
   
    getperfil: function(){
      return `perfil de ${this.user} edad: ${this.edad}`
    },
    getpost: function(){
        return `Publicacion es :  ${this.post}`
      },

      getlikes: function(){
        return `Likes: ${this.likes} `
      },
    getUbica: function(){
        return `Es de: ${this.ubicacion} `
      }
   }

   console.log("Estas en Facebook en : "+facebook.getperfil());
   console.log("Su "+facebook.getpost());
   console.log(facebook.getlikes());
   console.log(facebook.getUbica());