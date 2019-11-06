window.onload = () => {
    document.querySelector('#vid').play();
    const form = document.querySelector('#question');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const questions = form.ques.value
        const email = form.email.value
        alert('Cảm ơn câu hỏi của bạn!!!')
        console.log("Email: " + email + " Question: " + questions)
    });
    const searchBox = document.querySelector('#search');

    searchBox.addEventListener('submit', (event) => {
        event.preventDefault();
        const keySearch = searchBox.searchCar.value;

        if (keySearch == 'mazda' || keySearch == 'Mazda 6' || keySearch == 'Mazda 2' || keySearch == 'Mazda 3' || keySearch == 'Mazda cx3' || keySearch == 'Mazda cx5' || keySearch == 'Mazda cx8') {
            window.location.href = "./mazda.html"
        } else {
            if (keySearch == 'lamborghini' || keySearch == 'maserati') {
                alert('Xin lỗi bạn, chúng tôi đang cập nhật sản phẩm này!');
            } else {
                alert('Xin lỗi bạn, chúng tôi không có sản phẩm này!');
            }
        }
        console.log(keySearch)
    })



    document.querySelector('#vid').play();
};
