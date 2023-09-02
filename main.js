image=["https://tse2.mm.bing.net/th?id=OIP.vZyxmRX49cOJ1D4XOPlPCQHaFS&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP._Bdpo6pwfxwKvA6JKPfD0wHaDt&pid=Api&P=0&h=180","https://tse4.mm.bing.net/th?id=OIP.9UFW2W3QQ28MReGyk0sUNAHaHa&pid=Api&P=0&h=180", "https://tse2.explicit.bing.net/th?id=OIP.Vha0de765WpXJr0JdkkGGwHaLH&pid=Api&P=0&h=180"];
nomes=["joão pe de feijao", "geraldete","cassio", "regina"];
i=0;
function trocar(){
    i++
    numero=3
    if(i>numero){
        i=0;
    }
    img=image[i];
nombre=nomes[i];
document.getElementById("membrosimage").src=img;
document.getElementById("membrosdafamilia").innerHTML=nombre;
}

