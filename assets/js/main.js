

const youtubeApi = {

    key: 'AIzaSyB3iBYk0fikYe3NSGjpc6rsaB00VQPgrVc',  // latest : AIzaSyD90EVw0dSMdBFwR3RFtStQGWUMyMJsxx4
    baseUrl:"https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="
}



const searchInputbox=document.getElementById('home__search-input');


searchInputbox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){ 

    
    console.log(searchInputbox.value)
    getChannelName(searchInputbox.value)
    }

    
    
});


function getChannelName(name){
    
  

    console.log('Getting Api')

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&type=channel&key=${youtubeApi.key}`)
    .then(name => {
        return name.json()
    }).then(showChannelName);


    

    
}





function showChannelName(name){

   
      

      if(name.items.length <= 1){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: '<b><i>The Channel List unable to update. </i></b> Not able to find the Channel, please try some other search'
        })

      }else{
        var offsets = document.getElementById("search").offsetTop
       
        window.scroll(0,offsets);


        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: '<b><i>The Channel List got updated. </i></b>'
        })

       

    
 
        console.log(name)
        let channel1 = document.querySelector('.channel__number1')
        let channel2 = document.querySelector('.channel__number2')
        let channel3 = document.querySelector('.channel__number3')
        let channel4 = document.querySelector('.channel__number4')
        let channel5 = document.querySelector('.channel__number5')
        let channel6 = document.querySelector('.channel__number6')

        
        channel1.innerHTML = `<a href = "#analyze" class = "analytic"> <img src="${name.items[0].snippet.thumbnails.high.url}" alt= "" class="popular__img">
        
                                    <div class="popular__data">
                                    <h2 class="popular__price">
                                        ${name.items[0].snippet.channelTitle}

                                    </h2>

                                    <h3 class="popular__title">Youtube Channel ID <span class = "channelcreaterid1">${name.items[0].snippet.channelId}</span></h3>
                                        <p class="popular__description">
                                            ${name.items[0].snippet.description}
                                        </p>
                                    

                                        </div>
                                        
                                        <a href = "#analyze" class= "seemore-link"><button class = "button button__seemore" id="channelcreater1">See More</button></a></a>`


        
        
        channel2.innerHTML = `<a href = "#analyze" class = "analytic"><img src="${name.items[1].snippet.thumbnails.high.url}" alt= "" class="popular__img">
        
                                    <div class="popular__data">
                                    <h2 class="popular__price">
                                        ${name.items[1].snippet.channelTitle}

                                    </h2>

                                    <h3 class="popular__title">Youtube Channel ID : <span class = "channelcreaterid2">${name.items[1].snippet.channelId}</span></h3>
                                        <p class="popular__description">
                                            ${name.items[1].snippet.description}
                                        </p>
                                    

                                        </div>
                                        
                                        <a href = "#analyze" class= "seemore-link"><button class = "button button__seemore channelcreater2">See More</button></a></a>`


        



        channel3.innerHTML = `<a href = "#analyze" class = "analytic"><img src="${name.items[2].snippet.thumbnails.high.url}" alt= "" class="popular__img">
        
                                    <div class="popular__data">
                                    <h2 class="popular__price">
                                    ${name.items[2].snippet.channelTitle}

                                    </h2>

                                    <h3 class="popular__title">Youtube Channel ID : <span class = "channelcreaterid3">${name.items[2].snippet.channelId}</span></h3>
                                    <p class="popular__description">
                                    ${name.items[2].snippet.description}
                                    </p>


                                    </div>
        
                                    <a href = "#analyze" class= "seemore-link"><button class = "button button__seemore channelcreater3">See More</button></a></a>`

        channel4.innerHTML = `<a href = "#analyze" class = "analytic"><img src="${name.items[3].snippet.thumbnails.high.url}" alt= "" class="popular__img">
        
                                    <div class="popular__data">
                                    <h2 class="popular__price">
                                    ${name.items[3].snippet.channelTitle}

                                    </h2>

                                    <h3 class="popular__title">Youtube Channel ID : <span class = "channelcreaterid4">${name.items[3].snippet.channelId}</span></h3>
                                    <p class="popular__description">
                                    ${name.items[3].snippet.description}
                                    </p>


                                    </div>
        
                                    <a href = "#analyze" class= "seemore-link"><button class = "button button__seemore channelcreater4">See More</button></a></a>`

        channel5.innerHTML = `<a href = "#analyze" class = "analytic"><img src="${name.items[4].snippet.thumbnails.high.url}" alt= "" class="popular__img">
        
                                    <div class="popular__data">
                                    <h2 class="popular__price">
                                    ${name.items[4].snippet.channelTitle}

                                    </h2>

                                    <h3 class="popular__title">Youtube Channel ID : <span class = "channelcreaterid5">${name.items[4].snippet.channelId}</span></h3>
                                    <p class="popular__description">
                                    ${name.items[4].snippet.description}
                                    </p>


                                    </div>
        
                                    <a href = "#analyze" class= "seemore-link"><button class = "button button__seemore channelcreater5">See More</button></a></a>`

        channel6.innerHTML = `<a href = "#analyze" class = "analytic"><img src="${name.items[5].snippet.thumbnails.high.url}" alt= "" class="popular__img">
        
                                    <div class="popular__data">
                                    <h2 class="popular__price">
                                    ${name.items[5].snippet.channelTitle}

                                    </h2>

                                    <h3 class="popular__title">Youtube Channel ID : <span class = "channelcreaterid6">${name.items[5].snippet.channelId}</span></h3>
                                    <p class="popular__description">
                                    ${name.items[5].snippet.description}
                                    </p>


                                    </div>
        
                                    <a href = "#analyze" class= "seemore-link"><button class = "button button__seemore channelcreater6">See More</button></a></a>`

                                    
}
}



const youtuber1 = document.querySelector('.channel__number1');
youtuber1.addEventListener('click', () => {

 
  var offs = document.getElementById("search1").offsetTop
       
  window.scroll(0,offs);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Now Go Down and see your selected Channel to see Details'
  })
  
  
    let data = document.querySelector('.channelcreaterid1')
    console.log(data.innerText)
    
    getChannelReport(data.innerText)
})


const youtuber2 = document.querySelector('.channel__number2');
youtuber2.addEventListener('click', () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Now Go Down and see your selected Channel to see Details'
  })

    let data = document.querySelector('.channelcreaterid2')
    console.log(data.innerText)
    
    getChannelReport(data.innerText)
})

const youtuber3 = document.querySelector('.channel__number3');
youtuber3.addEventListener('click', () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Now Go Down and see your selected Channel to see Details'
  })

    let data = document.querySelector('.channelcreaterid3')
    console.log(data.innerText)
    
    getChannelReport(data.innerText)
})

const youtuber4 = document.querySelector('.channel__number4');
youtuber4.addEventListener('click', () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Now Go Down and see your selected Channel to see Details'
  })
    let data = document.querySelector('.channelcreaterid4')
    console.log(data.innerText)
    
    getChannelReport(data.innerText)
})

const youtuber5 = document.querySelector('.channel__number5');
youtuber5.addEventListener('click', () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Now Go Down and see your selected Channel to see Details'
  })
    let data = document.querySelector('.channelcreaterid5')
    console.log(data.innerText)
    
    getChannelReport(data.innerText)
})

const youtuber6 = document.querySelector('.channel__number5');
youtuber6.addEventListener('click', () => {

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Now Go Down and see your selected Channel to see Details'
  })
    let data = document.querySelector('.channelcreaterid6')
    console.log(data.innerText)
    
    getChannelReport(data.innerText)
})





function getChannelReport(data) {
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data}&key=${youtubeApi.key}`)
    .then(data => {
        return data.json();

        

    }).then(showChannelReport);
}

function showChannelReport(data){
    console.log(data)
    let Thumbnail = document.querySelector('.value__img')
    Thumbnail.innerHTML = `
                            <img src="${data.items[0].snippet.thumbnails.high.url}" alt="">`

    let createrTitle = document.querySelector('.creater__title');
    createrTitle.innerHTML = `<em>${data.items[0].snippet.title}</em>`

    let createrDescription = document.querySelector('.creater__description');
    createrDescription.innerHTML = `
                                    <h1>Channel Description  </h1>
                                    ${data.items[0].snippet.description}`

    let subscriber = document.querySelector('.subscriber__count')
    subscriber.innerHTML = `Net Subscribers of ${data.items[0].snippet.title} `

    let subscriberNumber = document.querySelector('.subscriber__count-number')
    let scount = data.items[0].statistics.subscriberCount
    if( scount> 1000 && scount<1000000){
        scount= scount/1000+'K'
    }else if(scount>1000000 && scount<10000000000){
        scount= (scount/1000000).toFixed(2)+'M'
    }else if(scount>1000000000){
      vcount=(scount/1000000000).toFixed(2) + 'B'
  }
    subscriberNumber.innerHTML = `${scount} ( ${data.items[0].statistics.subscriberCount} Subscribers)`

    let videocount = document.querySelector('.video__count')
    videocount.innerHTML = `Total Videos ${data.items[0].snippet.title} Have `

    let videocountNumber = document.querySelector('.video__count-number')
    videocountNumber.innerHTML = `  ${data.items[0].statistics.videoCount} Videos`


    let viewcount = document.querySelector('.views__count')
    viewcount.innerHTML = ` Net Number of Views Recived By ${data.items[0].snippet.title} `

    let viewcountNumber = document.querySelector('.views__count-number')
    let vcount = data.items[0].statistics.viewCount
    if(vcount>1000 && vcount<1000000){
        vcount=vcount/1000 + 'K'
    }else if(vcount>1000000 && vcount<1000000000){
        vcount=(vcount/1000000).toFixed(2) + 'M'
    }else if(vcount>1000000000){
        vcount=(vcount/1000000000).toFixed(2) + 'B'
    }
    viewcountNumber.innerHTML = `${vcount} ( ${data.items[0].statistics.viewCount} Views)`

    let createrdetails = document.querySelector('.creater__details')
    createrdetails.innerHTML = ` See some more Details about ${data.items[0].snippet.title}`
    let createrdetailsCode = document.querySelector('.creater__details-code')
    let state = data.items[0].snippet.country
    if(state == 'undefined'){
      state = 'Not Found'

    }
    createrdetailsCode.innerHTML =`Channel Id : <em> ${data.items[0].id}</em> <br>
                                    Channel Time of Creating : <em> ${window.moment(data.items[0].snippet.publishedAt).format('DD MMM YYYY')}</em> <br>
                                  Channel Published Country : <em> ${state}</em> `





}


function happy(){
  Swal.fire({
      title: '<strong><em>Thanking You</em></strong>',
      icon: 'Success',
      html:
        '<b>Keep Smiling It Suits You</b>', 
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: true,
      confirmButtonText:
        'Close'        
      
    })
}


const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header') 
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

var swiperPopular = new Swiper(".popular__container", {
    spaceBetween:42,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    // loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const accordionItems=document.querySelectorAll('.value__accordion-item')
accordionItems.forEach((item)=>{
      const accordionHeader=item.querySelector('.value__accordion-header')
      accordionHeader.addEventListener('click', ()=>{
        const openItem=document.querySelector('.accordion-open')
        toogleItem(item)

        if(openItem && openItem !== item){
          toogleItem(openItem)
        }

  })
})

const toogleItem=(item)=>{
  const accordionContent=item.querySelector('.value__accordion-content')
  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  }else{
    accordionContent.style.height=accordionContent.scrollHeight + `px`
    item.classList.add('accordion-open')

  }
  
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
      const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  // reset:true

})

sr.reveal(`.home__title, .popular__container, .footer__container`)
sr.reveal(`.home__description, .`, {delay:500})
sr.reveal(`.home__search, .home__description`, {delay:600})
sr.reveal(`.home__value`, {delay:700})
sr.reveal(`.home__images, .value__content, .subscribe__container`, {delay:900, origin:'bottom'})
sr.reveal(`.logo__img`,{interval:100})
sr.reveal(`.contact__content, .value__orbe, .value__accordion`,{origin:'left', delay:600})
sr.reveal(`.contact__images, .value__img`,{origin:'right', delay:600})


