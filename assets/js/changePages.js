function changePages(id)
{
    $("#collapseNav").collapse('hide');
    let links = document.getElementsByClassName("link-navbar");
    for(let i=0; i<links.length; i++)
    {
        links[i].classList.remove("active");
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById(id).classList.add("active");
    $("#content").load(`./pages/${id}.html`);
}