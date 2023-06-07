$("#filter_div>div").hide()
$("#search_img").click(function(){
  $("form").show()
  $("header nav").hide()
})
$("#img_filter").click(function(){
	$("#filter_div>div").show()
})
$("#search").click(function(){
  $("#filter_div>div").hide()
})
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
function search(text_php, callback) {
  $.ajax({
    type: 'POST',
    data: {
      text_php: text_php,
      type_get: 'search',
    },
    url: '/hyper_site/php/data.php',
    success: function(result) {
      if (result.trim() !== '') {
        var result2 = ((result.replaceAll(`"`, "`")).replaceAll("'", `"`)).replaceAll("][", ",")
        const objects = JSON.parse(result2);
        callback(objects);
      } else {
        callback([]);
      }
    },
  });
}
var search2;

if (Object.keys(query).length != 0) {
	if(Array.isArray(query.type)){
		if(query.type.length == 3){
      if(Array.isArray(query.filter)){
        var text_php = `SELECT \`data\` FROM \`data_hyper_site\` WHERE userName LIKE CONCAT('%', '${query.find}', '%') OR  data LIKE CONCAT('%', "'this_name':'${query.find}'", '%') OR  find LIKE CONCAT('%', "${query.find}", '%')`
      }
      else{
        if(query.filter == "name_product"){
          var text_php = `SELECT \`data\` FROM \`data_hyper_site\` WHERE data LIKE CONCAT('%', "'this_name':'${query.find}'", '%') OR  find LIKE CONCAT('%', "${query.find}", '%')`
        }
        else if(query.filter == "name_autor"){
          var text_php =  `SELECT \`data\` FROM \`data_hyper_site\` WHERE userName LIKE CONCAT('%', '${query.find}', '%') OR  find LIKE CONCAT('%', "${query.find}", '%')`
        }
        else{
          var text_php = `SELECT \`data\` FROM \`data_hyper_site\` WHERE find LIKE CONCAT('%', "${query.find}", '%')`
        }
      }
		}
		else{
      if(Array.isArray(query.type)){
        var text_php = `SELECT \`data\` FROM \`data_hyper_site\` WHERE (userName LIKE CONCAT('%', '${query.find}', '%') OR  data LIKE CONCAT('%', "this_name:'${query.find}'", '%') OR  find LIKE CONCAT('%', "${query.find}", '%')) AND (type='${query.type[0]}' OR type='${query.type[1]}')`
      }
		}
	}
	else{
    var text_php = `SELECT \`data\` FROM \`data_hyper_site\` WHERE (userName LIKE CONCAT('%', '${query.find}', '%') OR  data LIKE CONCAT('%', "this_name:'${query.find}'", '%') OR  find LIKE CONCAT('%', "${query.find}", '%')) AND (type='${query.type}')`
	}
  search(text_php, function(result) {
    search2=""
    for (var i = 0; i < result.length; i++) {
      search2 += `<article>
      <div>
      <div class="product-card__wrapper">
        <img src="${result[i].img}" alt="" class="img_article">
          <span class="price">${result[i].price}</span>
          <span class="name_product">${result[i].this_name}</span>
          <div>
            <span class="name_autor">X</span>
            <div class="rate_div">
              <span class="rate">★ ★ ★ ★ ★</span>
            </div>
            <div class="about">
              <p>dsaasdnjsdnkdasnjanjasjaskkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
            </div>
          </div>
          <button>В корзину</button>
      </div>
      </div>
    </article>`
    }
    if (query.find!=undefined){
      $("#main_section").hide();
      $("#find").show();
    }

    if (search2=='') {
      $("#nothing_search").show()
      $("#text_nothing_search").html(`No results were found for &laquo;${decodeURIComponent(query.find)}&raquo;`)
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
function hover(){
  console.log("d")
}