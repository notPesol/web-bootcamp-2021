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

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('imgContainer')
        imgContainer.style.display = 'inline-block'
        const h2 = document.createElement('h2')
        if (show.show.rating.average) {
            h2.textContent = `Score: ${show.show.rating.average}`
        } else {
            h2.textContent = `Score: No data?`
        }
        const img = document.createElement('img')
        img.src = show.show.image.medium
        imgContainer.append(img, h2)
        document.querySelector('#container').append(imgContainer)
    }
}

const deleteOldRes = () => {
    const oldContainer = document.querySelectorAll('.imgContainer')
    if (!oldContainer) return
    for (const container of oldContainer) {
        document.querySelector('#container').removeChild(container)
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