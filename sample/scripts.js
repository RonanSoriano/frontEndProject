let details_form = document.getElementsByClassName("details-form")[0];
let order_list = document.getElementsByClassName("order-list")[0];

window.onscroll = () => {
    let scrollTop = window.scrollY;
    let viewPortHeight = window.innerHeight;
    let contentHeight = details_form.getBoundingClientRect().height;

    if (scrollTop >= contentHeight - viewPortHeight){
        details_form.style.position = "fixed";
    }
    else{
        details_form.style.position = "";
    }
}
