window.onload = ()=>{
    const form = document.getElementById('form');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        alert("Chúng tôi sẽ phản hồi lại sớm nhất có thể!");
    });
};