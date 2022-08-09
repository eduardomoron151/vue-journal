
export default () => ({
    isLoading : true,
    entries : [
        {
            id : new Date().getTime(), // 1234515431
            date : new Date().toDateString(), // Sat 23, julio 2022
            text : 'alsdm aksdj alskdj askj dalsk dalskjdas kjdlaksjdasdk jasl kdjas ldkasjd askdjalskjda as dkjasldja dakjs dkjasalskdjals asd jkals',
            picture : null, // https:www.image.com
        },
        {
            id : new Date().getTime() + 1000, // 1234515431
            date : new Date().toDateString(), // Sat 23, julio 2022
            text : 'askdjalskjda as dkjasldja dakjs dkjasalskdjals asd jkalsalsdm aksdj aa as dkjasldja dakjs dkjasalskdjals asd jkals',
            picture : null, // https:www.image.com
        },
        {
            id : new Date().getTime() + 3000, // 1234515431
            date : new Date().toDateString(), // Sat 23, julio 2022
            text : 'askdjalskjda as dkjasldja dakjs dkjasalskdjals asd jkalsalsdm aksdj aa as dkjasldja dakjs dkjasalskdjals asd jkals',
            picture : null, // https:www.image.com
        },
    ]  
})