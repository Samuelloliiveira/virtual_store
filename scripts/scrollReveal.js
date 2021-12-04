const scrollReveal = ScrollReveal({
  
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
  
  })
  
  scrollReveal.reveal(`
    .card, #search, #info div, 
    #text-suggest, #arrow-svg,
    #closeOrder, .cart `
    , {interval: 100}
  )
  