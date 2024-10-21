export default defineAppConfig({
    info: {
        domain: "https://latitudex.academy",
        tel: "+393405831663",
        mail: "info.latitudex@gmail.com",
        address: "Via Mortise 140, PD - 35129",
        iva: "05555820280",
        calendly: "#",
        facebook: "https://www.facebook.com/people/LatitudeX-Academy/61552087392728/",
        tiktok: "https://www.tiktok.com/@latitudex__academy",
        instagram: "https://www.instagram.com/latitudex__academy/",
        cookieBanner: {
            desc: 'Utilizziamo cookie di terze parti per analizzare, in modo anonimo, come viene usato il sito.',
            acceptButton: 'Accetta',
            refuseButton: 'Rifiuta',
            modalDesc: 'Utilizziamo Google Analytics per analizzare il traffico in modo anonimo, mettendo due cookie nel tuo browser: <code>_ga</code> e <code>_ga_[analytics-id]</code>. Dandoci il consenso miglioreremo il servizio senza invadere la tua privacy.'
        }
    },
    corsiOnLine: [
        {
            id: "primo-soccorso",
            cover: "/copertina-corso-di-primo-soccorso.png",
            title: "Corso di primo soccorso",
            description: "",
            link: "/corso-primo-soccorso-e-blsd",
            isActive: true,
            purchaseUrl: 'https://esmerise.com/latitude-x-academy/register?p=3595',
            price: "49.50"
        },
        {
            id: "blsd",
            cover: "/copertina-corso-blsd.png",
            title: "Corso di BLS-D",
            description: "",
            link: "/corso-primo-soccorso-e-blsd",
            isActive: true,
            purchaseUrl: 'https://esmerise.com/latitude-x-academy/register?p=3596',
            price: "29.50"
        },
        {
            id: "pediatrico",
            cover: "/copertina-corso-di-primo-soccorso-pediatrico.png",
            title: "Corso di soccorso pediatrico",
            description: "In programma",
            link: "#",
            isActive: false,
            purchaseUrl: '#',
            price: "00,00"
        },
        {
            id: "aziendale",
            cover: "/copertina-corso-di-primo-soccorso-aziendale.png",
            title: "Primo Soccorso Aziendale",
            description: "In programma",
            link: "#",
            isActive: false,
            purchaseUrl: '#',
            price: "00,00"
        },
        {
            id: "outdoor",
            cover: "/copertina-corso-di-primo-soccorso-outdoor.png",
            title: "Primo Soccorso Outdoor",
            description: "In programma",
            link: "#",
            isActive: false,
            purchaseUrl: '#',
            price: "00,00"
        },
    ],
    corsiInPresenza: [

        {
            title: "Corso Addetti Primo Soccorso per Aziende",
            description: "Primo Soccorso Aziendale secondo Decreto Ministeriale 388/03, rivolto alle aziende rientranti nei Gruppi B e C.",
            data: {
                durata: "12 ore",
                data: "Su richiesta",
                destinatari: "Gruppo B e C"
            }
        },
        {
            title: "Corso Addetti Primo Soccorso per Aziende",
            description: "Primo Soccorso Aziendale secondo Decreto Ministeriale 388/03, rivolto alle aziende rientranti nel Gruppo A.",
            data: {
                durata: "16 ore",
                data: "Su richiesta",
                destinatari: "Gruppo A"
            }
        },
        {
            title: "Corso BLSD per Addetti Utilizzo Defibrillatore (DAE)",
            description: "Il corso BLSD (Basic Life Support & Defibrillation) è un corso certificativo finalizzato all’addestramento dei partecipanti alla rianimazione cardiopolmonare e utilizzo del Defibrillatore Automatico Esterno.",
            data: {
                durata: "5 ore",
                data: "Su richiesta",
                destinatari: "Per tutti"
            }
        },
        {
            title: "Corso Aggiornamento Primo Soccorso",
            description: "Primo Soccorso Aziendale secondo Decreto Ministeriale 388/03, rivolto alle aziende rientranti nel Gruppo A.",
            data: {
                durata: "6 ore",
                data: "Su richiesta",
                destinatari: "Gruppo A"
            }
        },
        {
            title: "Corso Aggiornamento Primo Soccorso",
            description: "Primo Soccorso Aziendale secondo Decreto Ministeriale 388/03, rivolto alle aziende rientranti nei Gruppi B e C.",
            data: {
                durata: "4 ore",
                data: "Su richiesta",
                destinatari: "Gruppo B e C"
            }
        },
        {
            title: "Corso BLS-D Retraining",
            description: "Il Retraining BLS-D è il corso di aggiornamento obbligatorio con cadenza biennale per ripassare il protocollo e mantenere alta la capacità di intervento.",
            data: {
                durata: "3 ore",
                data: "Su richiesta",
                destinatari: "Per tutti"
            }
        },
        {
            title: "Corso di Primo Soccorso Outdoor",
            description: "Il corso insegna come fronteggiare le principali emergenze mediche che possono capitare in ambiente outdoor.",
            data: {
                durata: "8 ore",
                data: "Su richiesta",
                destinatari: "Per tutti"
            }
        },
    ],
    teachers: {
        giulia: {
            picture: "/giulia-gabani.jpg",
            fullName: "Giulia Gabani",
            points: [
                "Medico Chirurgo abilitato",
                "Formazione specifica in Medicina Generale",
                "Docente titolare dei corsi di formazione e aggiornamento di Primo Soccorso aziendale",
                "Formatrice in ambito di approccio e gestione delle emergenze sanitarie",
                "Istruttrice BLS-D certificata",
                "Soccorritrice in ambulanza per la Croce Rossa Italiana - SUEM 118",
            ],
            bio: "Padovana itinerante dal 1996. Cresciuta sotto il segno dell’Ariete, forse la causa del mio spirito dinamico e l’innata perseveranza nel raggiungere gli obiettivi. Appassionata dello Sport in tutte le sue forme e della Natura. Entusiasta e positiva per propria imposizione e personale missione. Laurea Magistrale - con Lode - in Medicina e Chirurgia presso l’Università patavina. Dopo la l’abilitazione alla professione di medico-chirurgo, ho iniziato ad occuparmi di formazione, ottenendo il ruolo di docente titolare dei corsi di Primo Soccorso aziendale. Attualmente sono medico formatore di dipendenti di diverse aziende, avvalendomi di metodiche sia pratiche che teoriche e mettendo a disposizione la mia esperienza come Soccorritrice nelle ambulanze della Croce Rossa Italiana e per il SUEM 118 di Padova. Dalla maggiore età non mi sono più fermata: ho intrapreso diversi viaggi e investito il mio tempo in esperienze che mi formassero dalla mente allo spirito. Chi mi conosce ha ricordi di me solo in movimento, seduta forse solo per mangiare, perché va sottolineato che lo studio della Scienza dell’Alimentazione è una mia grande passione. Insegnante di Yoga per convinto valore, sciatrice per amore. Negli ultimi anni la mia vita ha subito molti cambiamenti. È iniziato un percorso di approccio professionale a diverse discipline legate al mondo dell’Outdoor tra cui alpinismo, canyoning e arrampicata sportiva, ma soprattutto ho conosciuto Francesco. Insieme perseguiamo l’obiettivo di arricchire con sfide, emozioni ed esperienze il viaggio più importante in assoluto, la Vita. Orgogliosa content creator e video maker per passione ed esperienza: sono la creatrice di tutti i video del Canale Youtube di Latitude-X, attraverso i quali esprimo la mia creatività e immortalo le cascate di emozioni racchiuse in ogni singola avventura e sfida vissute. Assemblo e creo minuti di video fatti di storie, immagini e secondi vissuti che diano valore al dono più grande: il nostro tempo."
        },
        francesco: {
            picture: "/francesco-maria-sauro.jpg",
            fullName: "Francesco Maria Sauro",
            points: [
                "Operatore del Soccorso Alpino e Speleologico del Veneto (CNSAS)",
                "Co-docente tecnico dei corsi di formazione di Primo Soccorso aziendale",
                "Istruttore BLS-D certificato",
                "Soccorritore in ambulanza per la Croce Rossa Italiana - SUEM 118",
            ],
            bio: "A 3 anni mio padre mi portò sul Becco di Filadonna in Vigolana. Però non ne lo zaino. Me la feci tutta a piedi, 1000 metri di dislivello. Ebbi la febbre per una settimana. Lì nacque l’amore per la montagna. A 4 anni, tanto ero alto, già non riuscivo a muovermi negli Optimist e seguivo sempre e solo la mia rotta, tra le imprecazioni degli istruttori. Lì nacque l’amore per il mare. Poi di onde, sentieri e pareti ne sono passate in questi anni. La Natura mi ha offerto e mi ha insegnato tanto. Sono diventato skipper appena ho potuto e poi Logistic Coordinator per Miles Beyond – società specializzata nel supporto tecnico e logistico in luoghi estremi. Dal 2017 sono il Logistic Coordinator dei training CAVES e PANGAEA dell’Agenzia Spaziale Europea e ho avuto la fortuna di partecipare in spedizioni in varie parti del Mondo, dalla Groenlandia al Messico, dal Venezuela al Perù, dalle Dolomiti alla Sardegna. Da (ormai troppi) anni mi dedico ai trekking, al free-climbing, all’alpinismo e scialpinismo. Ultimamente – e solo grazie a Giulia – cerco di portare nelle case degli italiani (cit. ☺) un po’ di queste esperienze. Dal 2011 sono soccorritore nelle ambulanze della Croce Rossa di Padova, con all'attivo più di 5.000 interventi di soccorso e sono istruttore di BLS-D e co-docente tecnico nei corsi di BLS. Dal 2019 sono operatore del CNSAS - Corpo Nazionale del Soccorso Alpino e Speleologico. Sono guida associata AssoGuide e skipper."
        },
        luca: {
            picture: "/luca-carenzo.jpg",
            fullName: "Luca Carenzo",
            points: [
                "Medico Chirurgo abilitato",
                "Specializzato in Anestesia e Rianimazione",
                "Formatore e istruttore di simulazione avanzata in ambito di Trauma Critical Care e Disaster Medicine",
                "Diploma Europeo in Terapia Intensiva ed esperienza lavorativa di elisoccorso presso la London’s Air Ambulance",
            ],
            bio: "Luca Carenzo, medico chirurgo, dopo la specializzazione in Anestesia e Rianimazione ha lavorato con Medici Senza Frontiere in aree a basse risorse e di conflitto e ha successivamente completato la Trauma Critical Care fellowship presso il Royal London Hospital di Londra. Ha inoltre conseguito il master di secondo livello European Master in Disaster Medicine e successivamente il Diploma Europeo in Terapia Intensiva, ha infine acquisito esperienza di elisoccorso lavorando per la London’s Air Ambulance. Attualmente si occupa di terapia intensiva generale ed emergenza presso l’Ospedale Humanitas di Milano. Dal 2012 ad oggi ha frequentato, prima come partecipante e successivamente come faculty, gli eventi formativi di World Extreme Medicine, presentando regolarmente ai congressi della società. Si interessa inoltre di formazione ed educazione, istruttore di simulazione avanzata, ha co-fondato nel 2015 SIMCUP evento nazionale di formazione in simulazione per medici specializzandi."
        }
    },
    recensioni: [
        {
            cover: "/recensione-b-1.jpg",
            title: "«Mi ha consentito di salvare la vita alla persona che amo»",
            description: "Quattro mesi fa ho fatto il corso di rianimazione. Mio marito sabato scorso ha avuto un arresto cardiaco e, facendo tesoro di quello che avevo imparato, quel sabato mattina gli ho salvato la vita. L’ambulanza ha impiegato oltre venti minuti per arrivare... sarebbe morto o comunque avrebbe riportato gravi danni cerebrali. Ora é ricoverato e in via di miglioramento. Quindi vorrei ringraziarvi per questa iniziativa che ho colto quasi per gioco e che invece mi ha consentito di salvare la vita alla persona che amo.",
            from: "Whatsapp",
            by: "Ilaria"
        },
        {
            cover: "/recensione-b-2.jpg",
            title: "«Ho evitato che mio figlio soffocasse!»",
            description: "È successo tutto molto velocemente. Eravamo a tavola e ho visto Giacomo che ha iniziato a diventare viola. Inizialmente mi ha preso il panico ma poi mi sono ricordata le manovre di disostruzione che mi avevate insegnato, allora l’ho preso in braccio e ho eseguito meccanicamente il protocollo di disostruzione. Non ho parole per esprimervi la mia gratitudine per avermi dato gli strumenti per agire e salvare mio figlio.",
            from: "Instagram",
            by: "Andrea"
        },
        {
            cover: "/recensione-b-3.jpg",
            title: "«Quando ti capita, non puoi rimanere a guardare, vuoi agire!»",
            description: "Durante una passeggiata in montagna un componente del gruppo è scivolato dal sentiero in una zona per niente comoda e non riusciva più ad alzarsi. Non ho potuto fare molto dal punto di vista sanitario (abbiamo scoperta dopo che si era rotto il femore), se non gestire al meglio l’intervento, dalla chiamata dei soccorsi, al riscaldare il mio amico (avevo portato il telo termico per la prima volta), allo stargli vicino, al localizzarsi nel migliore dei modi (eravamo partiti ormai da 3 ore). E questo grazie ad aver seguito queste video lezioni.",
            from: "Whatsapp",
            by: "Simona"
        },
        {
            cover: "/recensione-b-4.jpg",
            title: "«Ho apprezzato tanto il taglio pratico di questo video corso!»",
            description: "Avevo frequentato un corso di primo soccorso in azienda, mi era piaciuto ma sinceramente aveva un taglio eccessivamente teorico. Seguendo questo corso, invece, ho trovato la parte pratica molto interessante e utile veramente in ogni occasione della vita.",
            from: "TikTok",
            by: "Francesco"
        },
        {
            cover: "/recensione-b-5.jpg",
            title: "«Ora sono in grado di riconoscere tempestivamente i segni d’allarme!»",
            description: "Qualche mese fa un mio collega ha iniziato a star male ma tutti, compreso lui, stavamo sottovalutando la situazione. Avendo fatto il corso da poco, mi sono ricordato, di alcuni sintomi importanti da valutare e alla fine ho preferito chiamare il 118. Il mio collega stava avendo un infarto, ma per fortuna è stato preso in tempo! Tanti segni e sintomi prima non li capivo o li ignoravo perché non ero in grado di riconoscerli.",
            from: "Instagram",
            by: "Giuseppe"
        },
        {
            cover: "/recensione-b-6.jpg",
            title: "«Ho avuto tanta paura ma sapevo cosa fare»",
            description: "Stavo rientrando a casa quando ho sentito urlare dai garage del mio condominio. C’era un mio condomino che si era tagliato parte del braccio con un ferro e stava già perdendo molto sangue. Sono riuscito a tamponare la ferita nel migliore dei modi, farlo stendere e chiamare immediatamente i soccorsi che, anche grazie al mio intervento, l’hanno salvato. Per fortuna non mi è mai capitato di dover intervenire, però ho voluto frequentare lo stesso il corso per sentirmi più sicura in caso dovessi averne necessità.",
            from: "Facebook",
            by: "Michele"
        },
        {
            cover: "/recensione-b-7.jpg",
            title: "«Quello che ho imparato posso applicarlo in ogni situazione»",
            description: "Durante una passeggiata in montagna un componente del gruppo è scivolato dal sentiero in una zona per niente comoda e non riusciva più ad alzarsi. Non ho potuto fare molto dal punto di vista sanitario (abbiamo scoperta dopo che si era rotto il femore), se non gestire al meglio l’intervento, dalla chiamata dei soccorsi, al riscaldare il mio amico (avevo portato il telo termico per la prima volta), allo stargli vicino, al localizzarsi nel migliore dei modi (eravamo partiti ormai da 3 ore). E questo grazie ad aver seguito queste video lezioni.",
            from: "Whatsapp",
            by: "Martina"
        },
    ],
    sponsor: [
        // {
        //   name: "Alpamayo",
        //   src: "logo-grupo-alpamayo-tours.jpg"
        // },
        {
            name: "Assoguide",
            src: "assoguidelogo.jpg"
        },
        {
            name: "Unipd",
            src: "unipd.png"
        },
        {
            name: "Right Driving",
            src: "right-driving.jpg"
        },
        {
            name: "EAT Freedom",
            src: "EAT.png"
        },
        {
            name: "Tortugavan",
            src: "tortugavan.png"
        },
        {
            name: "Staff P&P",
            src: "staffpep.jpg"
        },
        // {
        //   name: "Alpamayo",
        //   src: "alpamayo.png"
        // },
        {
            name: "Atena",
            src: "atena.jpeg"
        },
        // {
        //   name: "Consilia",
        //   src: "consilia.png"
        // },
        {
            name: "DNA Formazione",
            src: "dna-formazione.png"
        },
        {
            name: "Forema",
            src: "forema.png"
        },
        {
            name: "Gomi",
            src: "gomi.jpeg"
        },
        {
            name: "HeS",
            src: "HeS.png"
        },
        {
            name: "Igeam",
            src: "Igeam-logo-audiosafety.png"
        },
        {
            name: "Omnia",
            src: "omnia.jpeg"
        },
        {
            name: "Sinergika",
            src: "sinergika.png"
        },
        {
            name: "Sappi",
            src: "sappi.jpeg"
        },
        {
            name: "Re engineering",
            src: "re-engineering.jpeg"
        },
        {
            name: "Time to time",
            src: "time-to-time.jpeg"
        },
        {
            name: "Dal Bon",
            src: "dalbon.png"
        },
        {
            name: "Ranstad",
            src: "ranstad.jpg"
        },
        {
            name: "Proevo",
            src: "proevo.jpg"
        },
    ],
    faq: [
        // {
        //   header: "Quando saranno disponibili i video corsi?",
        //   body: "I video corsi saranno disponibili da Febbraio 2024. Se sei interessato, prenota il tuo Corso online qui https://latitudex.academy/corso-primo-soccorso-e-blsd, senza impegno e gratuitamente, verrai avvisato appena saranno disponibili per te!"
        // },
        {
            header: "Come posso imparare a salvare la vita con questa guida online?",
            body: "Nel Video Corso troverai più di 35 video-lezioni che tratteranno tutti i temi fondamentali del primo soccorso. Seguirai un percorso completo che ti insegnerà da zero tutte le manovre essenziali per prestare un efficace primo soccorso. Lezioni interattive e ricche di esempi pratici ti aspettano. Pronto a diventare un soccorritore?"
        },
        {
            header: "Quante volte posso guardare i video?",
            body: "Una volta acquistato il Video CORSO potrai ri-guardarlo quante volte vorrai. Sarà tuo per sempre. Non dimenticare che sul sito di Latitude-X Academy continueranno ad essere pubblicati nuovi corsi aggiornati e altri approfondimenti. Dopo il primo acquisto entrerai a far parte della Community di Latitude-x Academy!"
        },
        {
            header: "Quanto dura il Corso online?",
            body: "Il Primo Soccorso BLS è diviso in 31 mini video che corrispondono a 31 singole lezioni della durata di circa 3/5 minuti ciascuna. Puoi interrompere il video quante volte vuoi e riprenderlo in qualunque momento."
        },
        {
            header: "Cosa contiene il video corso di Primo Soccorso BLS?",
            body: "Il Corso di Primo Soccorso BLS segue un programma completo di lezioni teoriche e dimostrazioni pratiche simulate su persone reali per insegnarti ad affrontare tutte le più comuni situazioni di emergenza. Potrai rivedere le lezioni quante volte vorrai e acquisire totale fiducia nelle manovre da eseguire. Più di 30 lezioni sempre disponibili per te online. Troverai tanti esempi di situazioni realmente accadute, che renderanno ancora più efficace l’apprendimento."
        },
        {
            header: "Verranno pubblicati altri video?",
            body: "Sono in programmazione altri tre VIDEO Corsi online: il primo soccorso per Aziende, il primo soccorso per ambienti Outdoor e il primo soccorso Pediatrico. Sul sito di Latitude-x Academy trovi maggiori informazioni, ma sei hai qualche domanda non esitare a contattarci."
        },
        {
            header: "Il corso BLSD per l’utilizzo del Defibrillatore, rilascia un attestato valido per legge?",
            body: "Dipende! Il corso è strutturato affinché tu acquisisca tutte le competenze necessarie per utilizzare in maniera corretta il DAE, dato che, in caso di necessità, il suo utilizzo è consentito per legge a CHIUNQUE, anche non in possesso di alcun certificato. Quindi puoi acquistare il corso semplicemente per tua cultura personale, con la consapevolezza che, se dovesse servire, hai le competenze per utilizzare il DAE. Tuttavia, il corso online, NON è da solo sufficiente al rilascio dell’attestato all’utilizzo del Defibrillatore Automatico Esterno, essendo richiesta, per questo, anche una parte in presenza. Nel momento in cui acquisterai il corso di BLSD, se ne hai necessità, potrai richiedere il rilascio dell’attestato (che sarà emesso da un Ente di Formazione nostro partner accreditato presso il 118) per l’utilizzo del DAE, valido ai fini di legge. In questo caso, dovrai scegliere un luogo e una data tra quelle proposte nel nostro calendario, per effettuare la parte in presenza."
        },
        {
            header: "Posso vederli da qualsiasi dispositivo?",
            body: "Tutte le video-lezioni si troveranno su un’unica piattaforma semplice da usare. Tutti i video sono registrati e potrai vederli in differita dove e quando vuoi dal tuo PC/tablet/smartphone senza limitazioni."
        },
        {
            header: "Posso passare da un argomento all’altro?",
            body: "Ogni video-lezione all’interno di un Corso è indipendente dalle altre e questo ti consentirà di scegliere con che ordine seguire le lezioni o se riguardare una lezione specifica che scelti tu. Tuttavia ti consigliamo, la prima volta che seguirai il Corso, di seguire l’ordine che abbiamo dato noi alle lezioni"
        },
        {
            header: "Il pagamento è una volta o è un abbonamento?",
            body: "L'acquisto di ogni video-corso è singolo. Una volta acquistato il CORSO potrai rivederlo quante volte vorrai. Sarà tuo per sempre."
        },
        {
            header: "Posso vedere i corsi anche se non ho internet?",
            body: "Tutti i video sono registrati e potrai vederli in differita dove e quando vuoi dal tuo PC o tablet o smartphone senza limitazioni. Solamente l'accesso alla piattaforma richiede connessione internet."
        },
    ],
    coursesContent: {
        primoSoccorso: [
            {
                header: {
                    title: "DOCENTI",
                    time: "",
                }
            }, {
                header: {
                    title: "PROGRAMMA",
                    time: "",
                }
            }, {
                header: {
                    title: "PRIMO SOCCORSO; EMERGENZA-URGENZA",
                    time: "",
                }
            }, {
                header: {
                    title: "CATENA DELLA SOPRAVVIVENZA",
                    time: "",
                }
            }, {
                header: {
                    title: "BLS-RCP TEORIA",
                    time: "",
                }
            }, {
                header: {
                    title: "ACRONIMO PAS",
                    time: "",
                }
            }, {
                header: {
                    title: "CENNI PENALI",
                    time: "",
                }
            }, {
                header: {
                    title: "AUTOPROTEZIONE",
                    time: "",
                }
            }, {
                header: {
                    title: "CHIAMATA AL 112/118",
                    time: "",
                }
            }, {
                header: {
                    title: "LOGISTICA DELL’INTERVENTO",
                    time: "",
                }
            }, {
                header: {
                    title: "GESTIONE DEL PAZIENTE E DELLA SCENA",
                    time: "",
                }
            }, {
                header: {
                    title: "VALUTAZIONE PRIMARIA",
                    time: "",
                }
            }, {
                header: {
                    title: "VALUTAZIONE SAMPLE",
                    time: "",
                }
            }, {
                header: {
                    title: "BLS HANDS ONLY",
                    time: "",
                }
            }, {
                header: {
                    title: "BLS HANDS ONLY PARTE DUE",
                    time: "",
                }
            }, {
                header: {
                    title: "BLS RCP 30:2",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. BLS PZ TRAUMATIZZATO",
                    time: "",
                }
            }, {
                header: {
                    title: "PLS",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. SINCOPE",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. DOLORE TORACICO",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. DIFFICOLTA’ RESPIRATORIA",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. DISTURBO NEUROLOGICO",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. CRISI CONVULSIVA",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. ALLERGIA",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. TRAUMA CRANICO",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. TRAUMA ARTO",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. EMERROGIA ESTERNA",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. FERITE",
                    time: "",
                }
            }, {
                header: {
                    title: " P.O. USTIONI",
                    time: "",
                }
            }, {
                header: {
                    title: "P.O. ANNEGAMENTO",
                    time: "",
                }
            }, {
                header: {
                    title: "POSIZIONE ANTI SHOCK",
                    time: "",
                }
            }, {
                header: {
                    title: "MANOVRE DI DISOSTRUZIONE",
                    time: "",
                }
            }, {
                header: {
                    title: "KIT PRIMO SOCCORSO DOMESTICO",
                    time: "",
                }
            }, {
                header: {
                    title: "CONCLUSIONI",
                    time: "",
                }
            }, {
                header: {
                    title: "RINGRAZIAMENTI",
                    time: "",
                }
            },
        ],
        blsd: [
            {
                header: {
                    title: "Introduzione",
                    time: "",
                },

            },
            {
                header: {
                    title: "L’arresto cardiaco",
                    time: "",
                },

            },
            {
                header: {
                    title: "IL DEFIBRILLATORE AUTOMATICO ESTERNO (DAE) -TEORIA",
                    time: "",
                },
            },
            {
                header: {
                    title: "CENNI NORMATIVi",
                    time: "",
                },
            },
            {
                header: {
                    title: "VALUTAZIONE DELLA SICUREZZA DELLA SCENA",
                    time: "",
                },
            },
            {
                header: {
                    title: "SISTEMA D’EMERGENZA DEL 112/118",
                    time: "",
                },
            },
            {
                header: {
                    title: "LA CHIAMATA AI SOCCORSI",
                    time: "",
                },
            },
            {
                header: {
                    title: "IL MASSAGGIO CARDIACO - TECNICA",
                    time: "",
                },
            },
            {
                header: {
                    title: "FUNZIONAMENTO DEL DAE",
                    time: "",
                },
            },
            {
                header: {
                    title: "IL DAE - UTILIZZO",
                    time: "",
                },
            },
            {
                header: {
                    title: "I DIVERSI MESSAGGI DEL DAE",
                    time: "",
                },
            },
            {
                header: {
                    title: "PROTOCOLLO OPERATIVO BLSD A 2 SOCCORRITORi",
                    time: "",
                },
            },
            {
                header: {
                    title: "ESEMPIO PRATICO P.O. BLSD",
                    time: "",
                },
            },
            {
                header: {
                    title: "PROTOCOLLO OPERATIVO BLSD A 1 SOCCORRITORE",
                    time: "",
                },
            },
            {
                header: {
                    title: "LA POSIZIONE LATERALE DI SICUREZZA (PLS)",
                    time: "",
                },
            },
            {
                header: {
                    title: "LA MANOVRA DI DISOSTRUZIONE NEL PAZIENTE ADULTO",
                    time: "",
                },
            },
            {
                header: {
                    title: "LA MANOVRA DI DISOSTRUZIONE NEL PAZIENTE PEDIATRICO",
                    time: "",
                },
            },
            {
                header: {
                    title: "RCP SUL PAZIENTE PEDIATRICO - BAMBINO",
                    time: "",
                },
            },
            {
                header: {
                    title: "RCP SUL PAZIENTE PEDIATRICO - NEONATO",
                    time: "",
                },
            },
            {
                header: {
                    title: "conclusioni",
                    time: "",
                },
            },
        ],
    },
    comics: [
        {
            header: "Tanto poi non ho il coraggio di farlo",
            body: "La paura nasce quando non si sa cosa fare. Quando, invece, ci vengono insegnate in maniera semplice e chiara le manovre, l’essere preparati è l’arma per vincere il panico"
        },
        {
            header: "Ho paura di peggiorare la situazione",
            body: "In quel momento una semplice manovra può salvare una vita. Anche se il massaggio non è perfetto, puoi solo provare a migliorare quella situazione"
        },
        {
            header: "Se poi non so cosa fare",
            body: "Nel corso della tua vita potrai trovarti ad affrontare una situazione di emergenza. Sapere cosa fare è fondamentale. Imparare è semplice. Perché non provarci?"
        },
        {
            header: "È troppo difficile per me",
            body: "Sono manovre che CHIUNQUE può imparare a fare, persino alcuni cani vengono addestrati a fare il massaggio cardiaco. Se loro possono, anche tu devi"
        },
        /*{
          header: "Tanto a me non capita",
          body: "Ogni giorno ci sono XXX (dati) i numeri sono chiari, ogni giorno leggiamo di notizie di malori o soffocamenti e di situazioni in cui i Soccorsi avanzati arrivano troppo tardi"
        },*/
        {
            header: "Adesso non ho tempo",
            body: "Ognuno di noi, se dovesse andare in arresto cardiaco, spererebbe di avere al suo fianco qualcuno che provi a salvargli la vita. Quel qualcuno è una persona che ha dedicato almeno una piccola parte del suo tempo per formarsi e imparare. Fallo anche te"
        },
        {
            header: "Come posso imparare da un video corso",
            body: "Nulla è complesso se qualcuno ti spiega la giusta tecnica e il perché di ogni azione. Il Video corso ti permetterà di avere una visione completa grazie all'ausilio della tecnologia, su ogni dettaglio importante"
        },
        {
            header: "Adesso non è il momento giusto",
            body: "Non rimandare, non ci sarà mai il momento perfetto, ma ci sarà il momento in cui dovrai agire. E ricorda che in caso di emergenza, sulla strada, il miglior chirurgo e te avete le stesse armi: le mani"
        },
        {
            header: "Non sono portato per questo",
            body: "Forse nessuno lo è, ma non può essere una scusa o un ostacolo all’apprendimento di semplici manovre che possono salvare una vita, di un estraneo o di una persona a te cara"
        },
    ]
})
