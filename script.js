setInterval(function(){
	var a = document.documentElement.scrollTop
	// console.log(a)

	if(a>=1200 && a<=1756){
		ea.classList.add("mek")
		eb.classList.add("erku")
		ec.classList.add("ereq")
		fa.classList.add("chors")
		fb.classList.add("hing")
		fc.classList.add("vec")
	}

	if(a>=2081 && a<=2606){
		box1a.classList.add("div1")
		box2a.classList.add("div2")
		box3a.classList.add("div3")
	}

	if(a >= 2800 && a <= 3255){
		box5a.classList.add("div4")
		box5b.classList.add("div5")
		box5c.classList.add("div6")
	}

	if(a >= 4581 && a <= 4736){
		box9a.classList.add("div7")
		box9b.classList.add("div8")
		box9c.classList.add("div9")
	}
})


