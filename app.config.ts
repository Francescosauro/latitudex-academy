export default defineAppConfig({
  info: {
    domain: "https://latitudex.academy",
    tel: "+393405831663",
    mail: "info.latitudex@gmail.com",
    address: "via dell’industria 23/A. 35129, Padova",
    iva: "05555820280",
    calendly: "#",
    facebook: "https://www.facebook.com/latitudex/",
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
      purchaseUrl: '#',
      price: "00,00"
    },
    {
      id: "blsd",
      cover: "/copertina-corso-blsd.png",
      title: "Corso BLS-D certificato",
      description: "",
      link: "/corso-primo-soccorso-e-blsd",
      isActive: true,
      purchaseUrl: '#',
      price: "00,00"
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
        data: "Da definire",
        destinatari: "Gruppo B e C"
      }
    },
    {
      title: "Corso Addetti Primo Soccorso per Aziende",
      description: "Primo Soccorso Aziendale secondo Decreto Ministeriale 388/03, rivolto alle aziende rientranti nel Gruppo A.",
      data: {
        durata: "16 ore",
        data: "Da definire",
        destinatari: "Gruppo A"
      }
    },
    {
      title: "Corso BLSD Retraining per Addetti Utilizzo Defibrillatore (DAE)",
      description: "Il corso BLSD (Basic Life Support & Defibrillation) è un corso certificativo finalizzato all’addestramento dei partecipanti alla rianimazione cardiopolmonare e utilizzo del Defibrillatore Automatico Esterno.",
      data: {
        durata: "4 ore",
        data: "Da definire",
        destinatari: "Per tutti"
      }
    },
    {
      title: "Corso Aggiornamento Primo Soccorso",
      description: "Primo Soccorso Aziendale secondo Decreto Ministeriale 388/03, rivolto alle aziende rientranti nel Gruppo A.",
      data: {
        durata: "6 ore",
        data: "Da definire",
        destinatari: "Gruppo A"
      }
    },
    {
      title: "Corso Aggiornamento Primo Soccorso",
      description: "Primo Soccorso Aziendale secondo Decreto Ministeriale 388/03, rivolto alle aziende rientranti nei Gruppi B e C.",
      data: {
        durata: "4 ore",
        data: "Da definire",
        destinatari: "Gruppo B e C"
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
        "Istruttrice BLS-D qualificata",
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
        "Istruttore BLS-D qualificato",
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
      cover: "/recensione-1.jpg",
      title: "«Mi ha consentito di salvare la vita alla persona che amo»",
      description: "Quattro mesi fa ho fatto il corso di rianimazione. Mio marito sabato scorso ha avuto un arresto cardiaco e, facendo tesoro di quello che avevo imparato, quel sabato mattina gli ho salvato la vita. L’ambulanza ha impiegato oltre venti minuti per arrivare... sarebbe morto o comunque avrebbe riportato gravi danni cerebrali. Ora é ricoverato e in via di miglioramento. Quindi vorrei ringraziarvi per questa iniziativa che ho colto quasi per gioco e che invece mi ha consentito di salvare la vita alla persona che amo.",
      from: "Whatsapp",
      by: "Ilaria"
    },
    {
      cover: "/recensione-2.jpg",
      title: "«Ho evitato che mio figlio soffocasse!»",
      description: "È successo tutto molto velocemente. Eravamo a tavola e ho visto Giacomo che ha iniziato a diventare viola. Inizialmente mi ha preso il panico ma poi mi sono ricordata le manovre di disostruzione che mi avevate insegnato, allora l’ho preso in braccio e ho eseguito meccanicamente il protocollo di disostruzione. Non ho parole per esprimervi la mia gratitudine per avermi dato gli strumenti per agire e salvare mio figlio.",
      from: "Instagram",
      by: "Andrea"
    },
    {
      cover: "/recensione-3.jpg",
      title: "«Quando ti capita, non puoi rimanere a guardare, vuoi agire!»",
      description: "Durante una passeggiata in montagna un componente del gruppo è scivolato dal sentiero in una zona per niente comoda e non riusciva più ad alzarsi. Non ho potuto fare molto dal punto di vista sanitario (abbiamo scoperta dopo che si era rotto il femore), se non gestire al meglio l’intervento, dalla chiamata dei soccorsi, al riscaldare il mio amico (avevo portato il telo termico per la prima volta), allo stargli vicino, al localizzarsi nel migliore dei modi (eravamo partiti ormai da 3 ore). E questo grazie ad aver seguito queste video lezioni.",
      from: "Whatsapp",
      by: "Simona"
    },
    {
      cover: "/recensione-4.jpg",
      title: "«Ho apprezzato tanto il taglio pratico di questo video corso!»",
      description: "Avevo frequentato un corso di primo soccorso in azienda, mi era piaciuto ma sinceramente aveva un taglio eccessivamente teorico. Seguendo questo corso, invece, ho trovato la parte pratica molto interessante e utile veramente in ogni occasione della vita.",
      from: "TikTok",
      by: "Francesco"
    },
    {
      cover: "/recensione-5.jpg",
      title: "«Ora sono in grado di riconoscere tempestivamente i segni d’allarme!»",
      description: "Qualche mese fa un mio collega ha iniziato a star male ma tutti, compreso lui, stavamo sottovalutando la situazione. Avendo fatto il corso da poco, mi sono ricordato, di alcuni sintomi importanti da valutare e alla fine ho preferito chiamare il 118. Il mio collega stava avendo un infarto, ma per fortuna è stato preso in tempo! Tanti segni e sintomi prima non li capivo o li ignoravo perché non ero in grado di riconoscerli.",
      from: "Instagram",
      by: "Giuseppe"
    },
    {
      cover: "/recensione-6.jpg",
      title: "«Ho avuto tanta paura ma sapevo cosa fare»",
      description: "Stavo rientrando a casa quando ho sentito urlare dai garage del mio condominio. C’era un mio condomino che si era tagliato parte del braccio con un ferro e stava già perdendo molto sangue. Sono riuscito a tamponare la ferita nel migliore dei modi, farlo stendere e chiamare immediatamente i soccorsi che, anche grazie al mio intervento, l’hanno salvato. Per fortuna non mi è mai capitato di dover intervenire, però ho voluto frequentare lo stesso il corso per sentirmi più sicura in caso dovessi averne necessità.",
      from: "Facebook",
      by: "Michele"
    },
    {
      cover: "/recensione-7.jpg",
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
      header: "Quanto dura il corso online?",
      body: "Il Primo Soccorso BLS è diviso in 35 mini video che corrispondono a 35 singole lezioni della durata di circa 3/5 minuti ciascuna. Puoi interrompere il video quante volte vuoi e riprenderlo in qualunque momento."
    },
    {
      header: "Cosa contiene il video corso di Primo Soccorso BLS?",
      body: "Il Corso di Primo Soccorso BLS segue un programma completo di lezioni teoriche e dimostrazioni pratiche simulate su persone reali per insegnarti ad affrontare tutte le più comuni situazioni di emergenza. Potrai rivedere le lezioni quante volte vorrai, e acquisire totale fiducia nelle manovre da eseguire. Più di 35 lezioni sempre disponibili per te online. Troverai tanti esempi di situazioni realmente accadute, che renderanno ancora più efficace l’apprendimento."
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
          title: "Primo soccorso - titolo - 1",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "Primo soccorso - titolo - 2",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "Primo soccorso - titolo - 3",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "Primo soccorso - titolo - 4",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "Primo soccorso - titolo - 5",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "Primo soccorso - titolo - 6",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
    ],
    blsd: [
      {
        header: {
          title: "BLSD - titolo - 1",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "BLSD - titolo - 2",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "BLSD - titolo - 3",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "BLSD - titolo - 4",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "BLSD - titolo - 5",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
      {
        header: {
          title: "BLSD - titolo - 6",
          time: "4 lezioni - X min",
        },
        body: [
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
          {
            title: 'Capitolo',
            time: '05:00 min'
          },
        ]
      },
    ],
  },
  comics: [
    {
      header: "Tanto poi non ho il coraggio di farlo",
      body: "La paura nasce dal non essere sicuri su cosa fare, se invece ci viene insegnato in maniera semplice e chiara le manovre, l'essere sicuri di sé è l'arma per vincere il panico"
    },
    {
      header: "Ho paura di peggiorare la situazione",
      body: "In quel momento un semplice massaggio può salvare la vita della persona, puoi solo fare bene, anche se il massaggio non è perfetto, anche se poco avrà efficacia"
    },
    {
      header: "Se poi non so cosa fare",
      body: "Se a star male è un tuo parente, desidererei agire in qualunque modo e se impari dei protocolli semplici e chiari, saprai sempre come agire. La semplicità è la migliore arma per agire in situazioni di stress"
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
      body: "Chiunque dovrebbe imparare le basi del primo soccorso: sono manovre così semplici ma così fondamentali che TUTTI dovrebbero imparare a fare. Ognuno di noi, se dovesse capitare di andare in arresto cardiaco, vorrebbe che qualcuno almeno provasse a salvargli la vita"
    },
    {
      header: "Come posso imparare da un video corso",
      body: "Nulla è complesso se qualcuno ti spiega la giusta tecnica e il perché di ogni azione. Il Video corso ti permetterà di avere una visione completa grazie all'ausilio della tecnologia, su ogni dettaglio importante"
    },
    {
      header: "Adesso non è il momento giusto",
      body: "Non rimandare, non ci sarà mai il momento perfetto e ricorda che il miglior chirurgo e tu, fuori dall'ospedale, avete le stesse armi per agire: le mani."
    },
    {
      header: "Non sono portato per questo",
      body: "Questa frase non basterebbe a pulirti la coscienza se ad avere bisogno è un tuo famigliare... provaci e vedrai che è alla portata di tutti"
    },
  ]
})
