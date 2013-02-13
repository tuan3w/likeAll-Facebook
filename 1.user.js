// ==UserScript==
// @name			Facebook LikeAll
// @namespace		http://userscripts.org/scripts/
// @version			0.1.0
// @description		Like| Unlike all
// @author			Newvalue
// @icon			http://anvinhco.vn/skins/basic/customer/images/icons/icon_facebook.png
// @include			http://www.facebook.com/*
// @include			https://www.facebook.com/*
// @exclude			http://developers.facebook.com/*
// @exclude			https://developers.facebook.com/*
// Copyright (c) 2013 by NewValue
// ==/UserScript==

function delayClick(btn, timeout,end){
		timeout *=timeout * 90 + (Math.random() * 30 | 0);
		setTimeout(function (){
			btn.click();
			if (end)
				alert('Đã like xong :)');
		},timeout);
};

body = document.body;
if(body != null) {
	// ==Profile==
	div = document.createElement("div");
	div.setAttribute('id','like1');
	div.style.position = "fixed";
	div.style.display = "block";
	div.style.width = "125px"; 
	div.style.opacity = 1.00;
	div.style.bottom = "+82px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#CCD3E3";
	div.style.border = "1px solid #555";
	div.style.padding = "2px";
	div.innerHTML = "<div style='background-color: #2E5392; color: #FFFFFF; border: 1px solid #333333;'><center><a style='color: #FFFFFF;' <a href='http://www.facebook.com/newvalue' title='Click to See TuanZendF's Profile on Facebook'> TuanZendF's Profile </a></div>"
	div2 = document.createElement("div");
	div2.setAttribute('id','spoiler');
	div2.style.position = "fixed";
    div2.style.width = "125px";
	div2.style.opacity = 0.90;
	div2.style.bottom = "+22px";
	div2.style.left = "+6px";
	div2.style.backgroundColor = "#CCD3E3";
	div2.style.border = "1px solid #555";
	div2.style.padding = "2px";
	div2.innerHTML = "<div style='background-color: #2E5392; color: #FFFFFF; border: 1px solid #333333;'><a style='color: #FFFFFF;' onclick='spoiler()' title='Click to hide LikeAll'>&laquo;&nbsp;</a>&nbsp;<span style='color: #FFFFFF;' >| &nbsp; &nbsp; LikeAll 0.0.1</span></div>"
	
	body.appendChild(div);
	body.appendChild(div2);
	
	
	unsafeWindow.spoiler = function() {
		for(var i=1;i<=3;i++) {
			var x=document.getElementById('like'+i);
			if (x.style.display=="none") {
			x.style.display="block";
			div2.style.width = "125px";
			div2.innerHTML ="<div style='background-color: #2E5392; color: #FFFFFF; border: 1px solid #333333;'><a style='color: #FFFFFF;' onclick='spoiler()' title='Click to hide LikeAll'>&laquo;&nbsp;</a>&nbsp;<span style='color: #FFFFFF;' >| &nbsp; &nbsp; LikeAll 0.0.1</span></div>"
			}
			else {
				x.style.display="none";
				div2.style.width = "40px";
				div2.innerHTML = "<a onclick='spoiler()' title='Click to show LikeAll'>&raquo;Show</a>"
			}
		}
	};

	// ==Like All==
	div = document.createElement("div");
	div.setAttribute('id','like2');
	div.style.position = "fixed";
	div.style.display = "block";
	div.style.width = "125px"; 
	div.style.opacity = 0.90;
	div.style.bottom = "+62px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "1px solid #94a3c4";
	div.style.padding = "2px";
	div.innerHTML = "<img src='http://th1162.photobucket.com/albums/q521/chiffoniercouture/th_facebook-like-icon.jpg' width='16' height='14' align='absmiddle' />&nbsp;&nbsp;<a href='#' onclick='javascript:likeAll();return false;'>Like All</a>"
	
	body.appendChild(div);
	

	unsafeWindow.likeAll = function(){
		var total = 0;
		var likeBtns = document.getElementsByClassName('UFILikeLink');
		for (var i=0; i< likeBtns.length; i++)
			if (likeBtns[i].textContent == 'Thích'){
				if ( i< likeBtns.length-1)
					delayClick(likeBtns[i], i);
				else
					delayClick(likeBtns[i],i,true); //end

				//likeBtn[i].click();
				total ++;
			}
		//log
		alert("Thích: " + total);
	};

	// ==Unlike All button==
	div = document.createElement("div");
	div.setAttribute('id','like3');
	div.style.position = "fixed";
	div.style.display = "block";
	div.style.width = "125px"; 
	div.style.opacity = 0.90;
	div.style.bottom = "+42px";
	div.style.left = "+6px";
	div.style.backgroundColor = "#eceff5";
	div.style.border = "1px solid #94a3c4";
	div.style.padding = "2px";
	div.innerHTML = "<img src='http://img.informer.com/icons/png/32/3877/3877655.png' width='16' height='14' align='absmiddle' />&nbsp;&nbsp;<a href='#' onclick='javascript:unLikeAll();return false;'>Unlike All</a>"
	
	body.appendChild(div);

	//unlike
	unsafeWindow.unLikeAll = function(){
		//alert('unlike')
		var total = 0;
		var likeBtns = document.getElementsByClassName('UFILikeLink');
		for (var i=0; i< likeBtns.length; i++)
			if (likeBtns[i].textContent == 'Bỏ thích'){
				if ( i< likeBtns.length-1)
					delayClick(likeBtns[i], i);
				else
					delayClick(likeBtns[i],i,true); //end
				//likeBtn[i].click();
				total ++;
			}

		//log
		alert("Bỏ thích: " + total);
	};
}

