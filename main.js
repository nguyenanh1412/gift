$(document).ready(
    function () {
        console.log("ready!");
    });

let logginInfo = 0
$('#loggin').click(() => {
    if ($('#pass').val() == 14121997) {
        $('.info').html('Ok rồi đấy')
        logginInfo = 1
        $('.toast').toast("show")
        $('.toast').toast({
            delay: 1000
        })
        $('.mh1').hide('3000')
        $('.mh2').removeClass('d-none')
        $('.mh2').show('3000')
        $('#pass').val("")
    } else {
        $('.info').html('Nhập cái méo gì vậy???')
        $('.toast').toast("show")
        $('#pass').val("")
    }
})
$('.gift').click(() => {
    $('.mh2').hide('3000')
    $('.mh3').removeClass('d-none')

})
$('.out').click(() => {
    $('.mh1').show('3000')
    $('.mh2').hide('3000')
})
var b = Math.floor(Math.random() * 13)+1

if (b == 0) {
    b = b + 1
}
let a = 0
$('.open').click(() => {
    $('.mh3').hide('3000')
    $('.mh4').removeClass('d-none')
    $('.dk').html(`Thả ${b} tim để mở quà`)
    $('modal').show()
    $('.num').html(a)
})
let c = [
    {
        content: "Bị Ny đấm 100 quả vì cái tội hay dỗi nè !!!!!!!!!! hihihi",
        link: "https://memehai.net/assets/images/20210802/meo-vang-bi-dam-vao-mat-khuon-mat-rat-phe.webp"
    },
    {
        content: "Bị Ny đấm 100 quả vì cái tội hay dỗi nè !!!!!!!!!! hihihi",
        link: "https://memehai.net/assets/images/20210802/meo-vang-bi-dam-vao-mat-khuon-mat-rat-phe.webp"
    },
    {
        content: "Ngoan nên được Ny dẫn đi ăn kem !!!!!! ngon ngon ngon ..",
        link: "https://res.cloudinary.com/teepublic/image/private/s--tiUMGQyQ--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1526426568/production/designs/2690304_0.jpg"
    },
    {
        content: "Sinh nhật được Ny tặng chiếc bánh kem to đùng !!!!!!!!! zê.....ê......ê.",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kfDNv_jBVOEYQL5_cfU2Qc0dpus_rCICQQ&usqp=CAU"
    },
    {
        content: "Tặng em một bông hồng. Vì e là duy nhất ....",
        link: "https://img.freepik.com/premium-photo/one-rose-background-white-tree_102583-960.jpg?w=2000"
    },
    {
        content: "Một cái hộp rỗng liu liu liu :P :P :P",
        link: "https://img-9gag-fun.9cache.com/photo/aMKGqvA_460s.jpg"
    },
    {
        content: "Đi ăn nướng thôi nào......",
        link: "https://emoi.vn/wp-content/uploads/2019/04/Anh-7.jpg"
    },
    {
        content: "Đi ún tà tưa thui ..... ",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXS1qG5PktPN-eJ89xQNQQmo22SGiW8K_AA&usqp=CAU"
    },
    {
        content: "Bị Ny đấm 100 quả vì cái tội hay dỗi nè !!!!!!!!!! hihihi",
        link: "https://memehai.net/assets/images/20210802/meo-vang-bi-dam-vao-mat-khuon-mat-rat-phe.webp"
    },
    {
        content: "Ngoan nên được Ny dẫn đi ăn kem !!!!!! ngon ngon ngon ..",
        link: "https://res.cloudinary.com/teepublic/image/private/s--tiUMGQyQ--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1526426568/production/designs/2690304_0.jpg"
    },
    {
        content: "Sinh nhật được Ny tặng chiếc bánh kem to đùng !!!!!!!!! zê.....ê......ê.",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kfDNv_jBVOEYQL5_cfU2Qc0dpus_rCICQQ&usqp=CAU"
    },
    {
        content: "Tặng em một bông hồng. Vì e là duy nhất ....",
        link: "https://img.freepik.com/premium-photo/one-rose-background-white-tree_102583-960.jpg?w=2000"
    },
    {
        content: "Một cái hộp rỗng liu liu liu :P :P :P",
        link: "https://img-9gag-fun.9cache.com/photo/aMKGqvA_460s.jpg"
    },
    {
        content: "Đi ăn nướng thôi nào......",
        link: "https://emoi.vn/wp-content/uploads/2019/04/Anh-7.jpg"
    },
    {
        content: "Đi ún tà tưa thui ..... ",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXS1qG5PktPN-eJ89xQNQQmo22SGiW8K_AA&usqp=CAU"
    },
    {
        content: "Bị Ny đấm 100 quả vì cái tội hay dỗi nè !!!!!!!!!! hihihi",
        link: "https://memehai.net/assets/images/20210802/meo-vang-bi-dam-vao-mat-khuon-mat-rat-phe.webp"
    },
    {
        content: "Ngoan nên được Ny dẫn đi ăn kem !!!!!! ngon ngon ngon ..",
        link: "https://res.cloudinary.com/teepublic/image/private/s--tiUMGQyQ--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1526426568/production/designs/2690304_0.jpg"
    },
    {
        content: "Sinh nhật được Ny tặng chiếc bánh kem to đùng !!!!!!!!! zê.....ê......ê.",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kfDNv_jBVOEYQL5_cfU2Qc0dpus_rCICQQ&usqp=CAU"
    },
    {
        content: "Tặng em một bông hồng. Vì e là duy nhất ....",
        link: "https://img.freepik.com/premium-photo/one-rose-background-white-tree_102583-960.jpg?w=2000"
    },
    {
        content: "Một cái hộp rỗng liu liu liu :P :P :P",
        link: "https://img-9gag-fun.9cache.com/photo/aMKGqvA_460s.jpg"
    },
    {
        content: "Đi ăn nướng thôi nào......",
        link: "https://emoi.vn/wp-content/uploads/2019/04/Anh-7.jpg"
    },
    {
        content: "Đi ún tà tưa thui ..... ",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXS1qG5PktPN-eJ89xQNQQmo22SGiW8K_AA&usqp=CAU"
    }
]
$('.like').click(() => {
    a++
    let d = Math.floor(Math.random() * 14)
    $('.num').html(a)
    if (a == b) {
        b = Math.floor(Math.random() * 13)+1
        a = 0
        $('.mh4').hide('3000')
        $('.mh4').addClass('d-none')
        $('.mh5').removeClass('d-none')
        $('.bg').html(`
                    <div class="card" style="width: 18rem;">
                        <img src=${c[b].link}
                            class="card-img-top gift-img" alt="...">
                        <div class="card-body">
                            <p class="card-text">${c[b].content}</p>
                        </div>
                    </div>
        `)
    }
})

$('.back').click(() => {
    $('.mh5').hide('3000')
    $('.mh5').addClass('d-none')
    $('.mh3').show('3000')

})