const form = document.querySelector('#searchForm')
// form.addEventListener('submit', async function (e) {
//     e.preventDefault()
//     const searchValue = form.elements.search.value
//     const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchValue}`)

//     createImage(res.data)
//     form.elements.search.value = ''
// })
const createImage = (data) => {
    deleteOldRes()
    for (const show of data) {
        if (!show.show.image) continue
        const img = document.createElement('img')
        img.src = show.show.image.medium
        document.querySelector('#container').append(img)
    }
}

const deleteOldRes = () => {
    const imgs = document.querySelectorAll('img')
    if (!imgs) return
    for (const img of imgs) {
        document.querySelector('#container').removeChild(img)
    }
}

form.addEventListener('submit', async function (ev) {
    ev.preventDefault()
    const searchValue = form.elements.search.value
    const config = { params: { q: searchValue }, headers: { Accept: 'application/json' } }
    await axios.get(`http://api.tvmaze.com/search/shows`, config)
        .then((result) => {
            const data = result.data
            createImage(data)
            form.elements.search.value = ''
        }).catch((err) => {
            console.log(err)
        });
})

form.addEventListener('input', async function (ev) {
    ev.preventDefault()
    try {
        const searchValue = form.elements.search.value
        const config = { params: { q: searchValue } }
        const res = await axios.get('http://api.tvmaze.com/search/shows', config)
        const datas = await res.data
        createImage(datas)
    } catch (error) {
        console.log(error)
    }

})