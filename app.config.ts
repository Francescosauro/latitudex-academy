export default defineAppConfig({
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
      cover: '/copertina-corso-pediatrico.png',
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
    }
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
  ]
})
