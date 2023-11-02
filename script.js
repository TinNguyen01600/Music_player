const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    songs: [
        {
            name: 'Written In The Stars',
            singer: 'Westlife',
            path: './songs/written-in-the-stars.mp3',
            image: 'https://th.bing.com/th/id/OIP.yNUlb_FdywZVbgRPp4kIPwHaLN?w=115&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7'
        },
        {
            name: 'As Long As You Love Me',
            singer: 'Backstreet Boys',
            path: './songs/as-long-as-u-love-me.mp3',
            image: 'https://th.bing.com/th/id/OIP.Y1ZdcGrDqJymGM4Vql0wZQHaD4?w=333&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7'
        },
        {
            name: 'You Raise Me Up',
            singer: 'Westlife',
            path: './songs/You_Raise_Me_Up.mp3',
            image: 'https://th.bing.com/th/id/OIP.-RJnBdRWYfEnBzVY4Rqa2wHaFj?w=186&h=140&c=7&r=0&o=5&dpr=1.7&pid=1.7'
        },
        {
            name: 'Stay Here',
            singer: 'AL Bei',
            path: './songs/stay-here-albei.mp3',
            image: 'https://th.bing.com/th/id/OIP.5fWU_IZb0ScVVEurkrw0kgHaFj?w=207&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7'
        },
        {
            name: 'Nights Like This',
            singer: 'Beat Mekanik',
            path: './songs/Nights-Like-This-Beat-Mekanik.mp3',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEZJ7YeZIhcSV2tm6hFzlsTdILOz-pBQLoA&usqp=CAU'
        },
        {
            name: 'Unknown Man',
            singer: 'FJ Blues',
            path: './songs/Unknonw-man-FJ-blues.mp3',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7D4hXg5XA07tOPuhu7pvE7tMMFPNSudZrvw&usqp=CAU'
        },
        {
            name: 'Yesterday Once More',
            singer: 'The Carpenters',
            path: './songs/yesterday-once-more.mp3',
            image: 'https://cdn.kobo.com/book-images/e9f40969-4800-42ae-ba19-3f9d5859e577/1200/1200/False/yesterday-once-more-the-carpenters-reader.jpg'
        },
        {
            name: 'Top Of The World',
            singer: 'The Carpenters',
            path: './songs/top-of-the-world.mp3',
            image: 'https://phiendichvien.com/images/kienthuc/dichthuatgiaitri/top_2.jpg'
        }
    ],
}