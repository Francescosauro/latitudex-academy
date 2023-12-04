export default defineAppConfig({
  info: {
    domain: "https://latitudex.academy",
    tel: "+393405831663",
    mail: "info.latitudex@gmail.com",
    address: "via dell’industria 23/A. 35129, Padova",
    iva: '05555820280',
    calendly: '#',
    facebook: "https://www.facebook.com/latitudex/",
    tiktok: "https://www.tiktok.com/@latitudex__academy",
    instagram: "#"
  },
  corsiOnLine: [
    {
      cover: '/copertina-corso-di-primo-soccorso.png',
      title: 'Corso di primo soccorso',
      description: 'In uscita a gennaio 2024',
      link: '/corso-primo-soccorso',
      isActive: true
    },
    {
      cover: '/copertina-corso-blsd.png',
      title: 'Corso BLS-D certificato',
      description: 'In uscita a gennaio 2024',
      link: '/corso-primo-soccorso',
      isActive: true
    },
    {
      cover: '/copertina-corso-di-primo-soccorso-pediatrico.png',
      title: 'Corso di soccorso pediatrico',
      description: 'In programma',
      link: '#',
      isActive: false
    },
    {
      cover: '/copertina-corso-di-primo-soccorso-aziendale.png',
      title: 'Primo Soccorso Aziendale',
      description: 'In programma',
      link: '#',
      isActive: false
    },
    {
      cover: '/copertina-corso-di-primo-soccorso-outdoor.png',
      title: 'Primo Soccorso Outdoor',
      description: 'In programma',
      link: '#',
      isActive: false
    },
  ],
  corsiInPresenza: [
    {
      title: 'Corso Addetti Primo Soccorso per Aziende',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      data: {
        durata: '16 ore',
        data: 'Da definire',
        destinatari: 'Gruppo A'
      }
    },
    {
      title: 'Corso Addetti Primo Soccorso per Aziende',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      data: {
        durata: '12 ore',
        data: 'Da definire',
        destinatari: 'Gruppo B e C'
      }
    },
    {
      title: 'Corso BLSD Retraining  per Addetti Utilizzo Defibrillatore (DAE)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      data: {
        durata: '16 ore',
        data: 'Da definire',
        destinatari: 'Per tuttti'
      }
    },
    {
      title: 'Corso Aggiornamento Primo Soccorso',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      data: {
        durata: '6 ore',
        data: 'Da definire',
        destinatari: 'Gruppo A'
      }
    },
    {
      title: 'Corso Aggiornamento Primo Soccorso',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      data: {
        durata: '6 ore',
        data: 'Da definire',
        destinatari: 'Gruppo B e C'
      }
    },
  ],
  teachers: {
    giulia: {
      picture: '/giulia-gabani.jpg',
      fullName: 'Giulia Gabani',
      points: [
        "Medico Chirurgo abilitato. Laureata con il massimo dei voti presso l’Università degli Studi di Padova",
        "Docente titolare dei corsi di formazione e aggiornamento di Primo Soccorso aziendale e gestione delle emergenze sanitarie",
        "Discipline praticate: trekking, biking, arrampicata sportiva, alpinismo su roccia, canyoning e sci di fondo",
        "Istruttrice BLSD e Soccorritrice in ambulanza per la Croce Rossa Italiana - SUEM 118",
        "Content creator e video maker per passione ed esperienza.",
      ],
      bio: ''
    },
    francesco: {
      picture: '/francesco-maria-sauro.jpg',
      fullName: 'Francesco Maria Sauro',
      points: [
        "Logistic Coordinator and Managing Director per Miles Beyond.",
        "Logistic Coordinator corsi CAVES e PANGAEA dell'Agenzia Spaziale Europea",
        "Operatore del CNSAS (Corpo Nazionale del Soccorso Alpino e Speleologico)",
        "Guida associata AssoGuide e Skipper",
        "Istruttore BLSD e Soccorritore in ambulanza per la Croce Rossa Italiana - SUEM 118.",
    ],
      bio: ''
    },
    luca: {
      picture: '/luca-carenzo.jpg',
      fullName: 'Luca Carenzo',
      points: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
    ],
      bio: ''
    }
  },
  recensioni: [
    {
      cover: '/recensione-1.jpg',
      title: 'Mi ha consentito di salvare la vita alla persona che amo.»',
      description: 'Quattro mesi fa ho fatto il corso di rianimazione. Mio marito sabato scorso ha avuto un arresto cardiaco e, facendo tesoro di quello che avevo imparato, quel sabato mattina gli ho salvato la vita. L’ambulanza ha impiegato oltre venti minuti per arrivare... sarebbe morto o comunque avrebbe riportato gravi danni cerebrali. Ora é ricoverato e in via di miglioramento. Quindi vorrei ringraziarvi per questa iniziativa che ho colto quasi per gioco e che invece mi ha consentito di salvare la vita alla persona che amo.',
      from: 'Whatsapp',
      by: 'Ilaria'
    },
    {
      cover: '/recensione-2.jpg',
      title: '«Ho evitato che mio figlio soffocasse!»',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      from: 'Instagram',
      by: 'Nome Cognome'
    },
    {
      cover: '/recensione-3.jpg',
      title: '«Mi sento più forte accudendo mia madre»',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      from: 'Instagram',
      by: 'Nome Cognome'
    },
    {
      cover: '/recensione-4.jpg',
      title: '«Lorem ipsum dolo sit amet, consecteutur»',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      from: 'Instagram',
      by: 'Nome Cognome'
    },
    {
      cover: '/recensione-4.jpg',
      title: '«Lorem ipsum dolo sit amet, consecteutur»',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      from: 'Instagram',
      by: 'Nome Cognome'
    },
  ],
  sponsor: [
    {
      name: "Alpamayo",
      src: "logo-grupo-alpamayo-tours.jpg"
    },
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
    {
      name: "Alpamayo",
      src: "alpamayo.png"
    },

    {
      name: "Atena",
      src: "atena.jpeg"
    },
    {
      name: "Consilia",
      src: "consilia.png"
    },
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
  ],
  faq: [
    {
      header: 'Domanda',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      header: 'Domanda',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      header: 'Domanda',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      header: 'Domanda',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      header: 'Domanda',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      header: 'Domanda',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]
})
