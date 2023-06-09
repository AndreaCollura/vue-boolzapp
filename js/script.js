/* 
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

Consigli utili:
Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
Per gestire le date, può essere utile la libreria Luxon
La struttura dell’array dei contatti potrebbe avere questa forma:


 */




import Picker from './emoji-picker.js';

const dt = luxon.DateTime;

const {createApp} = Vue;

createApp({
    data(){
        return {
            contacts: [
                {
                    id:1,
                    name: 'Michele',
                    avatar: '/img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:6,
                    name: 'Claudia',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:7,
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:8,
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            currentId: 0,
            inputMess:'',
            searchName: '',
            typing: 'Online',
            showEmoji: false
            

            
        
        }
    },
    methods:{
        idSelector(id){
            this.currentId = id - 1 ;
            // console.log(currentId);
            
        },
        addMessage(currentId){
            

            const newMessage = {
            
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                message: this.inputMess,
                status: 'sent'
            };

            if ((this.inputMess) != '')this.contacts[currentId].messages.push(newMessage);
            
            this.inputMess = '';
            this.showEmoji = false;



            this.newAnswerGen(currentId);
            

        },


        onSelectEmoji(emoji){
            this.inputMess += emoji.i;
        },


        searchResult() {

            console.log(this.searchName);

            this.contacts.forEach((contact) => {
                if(!contact.name.toLowerCase().includes(this.searchName.toLowerCase())){
                    contact.visible = false;
                } else {
                    contact.visible = true;
                }
            })
            
        
        },


        

        

        newAnswerGen(currentId){

            this.typing = 'Sta scrivendo...';

            setTimeout(() => {
                this.typing = 'Online';
                const newAnswer = {
        
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                message: 'OK',
                status: 'received'
            };

            console.log(this.contacts[currentId].messages);
            // console.log(this.contacts);
            this.contacts[currentId].messages.push(newAnswer);
            
            setTimeout(()=>{
                this.typing = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS);
            },4000);

            }, 3000)
        },
    },
    computed: {

        
        
        
    },
}).component('Picker', Picker).mount('#app');



























// console.log(this.filteredContacts);




            // if(this.newMessage === ''){
            //     // this.error= true

            //     console.log('elem non valido');
            //     return 
            // } 
            
        //     const newProduct = {
        //         date: '10/01/2020 15:30:55',
        //         message: 'input',
        //         status: 'sent'
        //     }
        //     if ((this.message) != '') this.contacts[currentId].messages.push(newProduct)
            
        //     // this.error = false
        //     this.newMessage = '';
        // }







    /*    searchResult() {
            let tempContacts = this.contacts.name
            console.log(tempContacts);
            
            
        
        },

 */




        // searchResult() {
        //     let tempContacts = this.contacts.name
        //     console.log(tempContacts);
        //     if (this.searchName != '' && this.searchName) {
        //         tempContacts = this.tempContacts.filter((contact) => {
        //         return contact.name.toUpperCase().includes(this.searchContacts.toUpperCase())
        //         })
                
        //     }
        //     return tempContacts
            
        // }




    /*     filteredContacts: function(currentId){

            console.log(this.searchName);

            this.searchName.toUpperCase();
            
            return this.contacts.filter((contact) => {
                return contact.name.match(this.searchName)
            });
        
        } */