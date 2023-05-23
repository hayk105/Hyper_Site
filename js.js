$("#nothing_search").hide()
function getQueryParams() {
  const queryParams = window.location.search.slice(1);
  const paramArray = queryParams.split('&');
  const params = {};
  paramArray.forEach(param => {
    const [key, value] = param.split('=');
    if (key && value) {
      if (params[key]) {
        if (Array.isArray(params[key])) {
          params[key].push(value);
        } else {
          params[key] = [params[key], value];
        }
      } else {
        params[key] = value;
      }
    }
  });

  return params;
}
const query = getQueryParams();
var search2 = ``
function search(type, find, callback) {
  $.ajax({
    type: 'POST',
    data: {
      type: type.toLowerCase()=="all"?1:type,
      find: find.toLowerCase()=="all"?1:find,
      type_get: 'search',
    },
    url: 'http://localhost/Hyper_site/data.php',
    success: function(result) {
      if (result !== '0') {
        var arrayStrings = result.split("][");
        var arrays = arrayStrings.map(function(arrayString) {
          var trimmedString = arrayString.replace(/\[|\]/g, '');
          return trimmedString.split(", ");
        });
        callback(arrays);
      } else {
        callback([]);
      }
    },
  });
}
var search2;
if (Object.keys(query).length != 0) {
  search(query.type, query.find, function(result) {
    search2=""
    for (var i = 0; i < result.length; i++) {
      search2 += `<article>
       <div class="product-card__wrapper">
         <img src="${result[i][1]}" alt="" class="img_article">
          <span class="price">${result[i][2]}</span>
          <span class="name_product">${result[i][0]}</span>
          <span class="name_autor">${result[i][3].replaceAll("_", " ")}</span>
          <button>В корзину</button>
        </div>
    </article>`
    }
    if (query.find!=undefined){
      $("#main_section").hide();
      $("#find").show();
    }

    if (search2=='') {
      $("#nothing_search").show()
      $("#text_nothing_search").html(`No results were found for &laquo;${query.find}&raquo;`)
      $("#text_small_nothing_search").html("Try to search differently or shorten the query")
    }
    else{
      $("#rec").html(search2)
    }
  });
}



for (var i3 = 0; i3 < 3; i3++) {
	var number = 0
	var variable = i3==0?men_data:i3==1?women_data:kids_data
	for (var i = 0; i < 3; i++) {
		$($(".data")[i3]).children("ul").append(`<li><ul id="li_${i3}_${i}"></ul></li`)
		for (var i2 = 0; i2 < variable.length/3; i2++) {
			variable[number]!=undefined?$(`#li_${i3}_${i}`).append(`<li>${variable[number]}</li>`):'';
			number++
		}
	}
}


$("header nav ul li div ul li ul li").click(function(){
	window.open('index.html' + `?find=${$(this)[0].innerText.toLowerCase()}&type=${$(this).parents()[4].id}`, "_self")
})