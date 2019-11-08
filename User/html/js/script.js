window.onload = () => {
    document.querySelector('#vid').play();
    const form = document.querySelector('#question');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const questions = form.ques.value;
        const email = form.email.value;
        const emailRegex = new RegExp(/^[a-zA-Z][a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/g);
        const quesRegex = new RegExp(/^\w+$/);
        
        if(emailRegex.test(email)){
            if(quesRegex.test(questions)){
                alert("Cảm ơn bạn đã gửi câu hỏi cho chúng tôi!")
            } else {
                alert("Vui lòng điền câu hỏi!")
            }
        }else{
            alert('Email không hợp lệ')
        }        
        console.log("Email: " + email + " Question: " + questions)
    });
    const searchBox = document.querySelector('#search');

    searchBox.addEventListener('submit', (event) => {
        event.preventDefault();
        const keySearch = searchBox.searchCar.value;

        if (keySearch == 'mazda' || keySearch == 'Mazda 6' || keySearch == 'Mazda 2' || keySearch == 'Mazda 3' || keySearch == 'Mazda cx3' || keySearch == 'Mazda cx5' || keySearch == 'Mazda cx8') {
            window.location.href = "./mazda.html"
        } else {
            if (keySearch == 'lamborghini') {
                window.location.href = "./Lamborghini.html"
            } else {
                alert('Xin lỗi bạn, chúng tôi chưa cập nhật sản phẩm này!');
            }
        }
        console.log(keySearch)
    })



    document.querySelector('#vid').play();
};
