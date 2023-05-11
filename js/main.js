const { createApp } = Vue

createApp({
        data() {
            return {
                search: "",
                messaggio: "",
                messaggioSuSchermo: [

                ],
                contatti: [
                    {
                        image: 'img/avatar_1.jpg',
                        nome: 'Michele',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00',
                    },
                    {
                        image: 'img/avatar_2.jpg',
                        nome: 'fabio',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00', 

                    },
                    {
                        image: 'img/avatar_3.jpg',
                        nome: 'Samuele',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00', 
                    },
                    {
                        image: 'img/avatar_4.jpg',
                        nome: 'Alessandro B.',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00', 
                    },
                    {
                        image: 'img/avatar_5.jpg',
                        nome: 'lessandro L.',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00', 
                    },
                    {
                        image: 'img/avatar_6.jpg',
                        nome: 'Claudia',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00', 
                    },
                    {
                        image: 'img/avatar_7.jpg',
                        nome: 'Federico',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00', 
                    },
                    {
                        image: 'img/avatar_8.jpg',
                        nome: 'Davide',
                        ultimoMessaggio: 'Ultimo messaggio inviato',
                        ultimoAccesso: '12:00', 
                    },
                ]
        }
    },
    methods: {
        testovuoto() {
            this.search = "";
            this.messaggio = "";
        },
        messaggioScritto() {
            let messaggio = this.messaggio
            this.messaggioSuSchermo.push(messaggio);
        }
    }
}).mount('#app')