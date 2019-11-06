window.onload = ()=>{
    const form = document.querySelector('#question');

    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const questions = form.keyword.value
        alert('Cảm ơn câu hỏi của bạn!!!')
        console.log(questions)
    });
};
