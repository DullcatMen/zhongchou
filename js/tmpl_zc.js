function copy(origin){
	var result;
	if(typeof origin === "object"){
		if(origin instanceof Array){
			result = [];
			for(var i = 0, len = origin.length; i < len; i++){
				result[i] = copy(origin[i]);
			}
		}else{
			result = {};
			for(var i in origin){
				result[i] = copy(origin[i]);
			}
		}
	}else{
		result = origin;
	}
	return result;
}

$.ajax({
	type : "get",
	url : "http://www.ikindness.cn/api/test/getFund",
	success : function(data){
		var _data = copy(data.data);
		// _data.splice(8,_data.length);
		var newData_1f = _data.slice(0, 8);
		var newData_2f = _data.slice(8, 16);
		var newData_3f = _data.slice(16, 24);
		var newData_4f = _data.slice(24, 32);
		var newData_5f = _data.slice(32, 40);
		var newData_6f = _data.slice(40, 48);

		
		$(".good-box.f1 .good-list").append(template("tmpl1",{
			data : newData_1f.slice(0, 1),
		})).append(template("tmpl2",{
			data : newData_1f.slice(1, 8),
		}));

		$(".good-box.f2 .good-list").append(template("tmpl1",{
			data : newData_2f.slice(0, 1),
		})).append(template("tmpl2",{
			data : newData_2f.slice(1, 8),
		}));

		$(".good-box.f3 .good-list").append(template("tmpl1",{
			data : newData_3f.slice(0, 1),
		})).append(template("tmpl2",{
			data : newData_3f.slice(1, 8),
		}));

		$(".good-box.f4 .good-list").append(template("tmpl1",{
			data : newData_4f.slice(0, 1),
		})).append(template("tmpl2",{
			data : newData_4f.slice(1, 8),
		}));

		$(".good-box.f5 .good-list").append(template("tmpl1",{
			data : newData_5f.slice(0, 1),
		})).append(template("tmpl2",{
			data : newData_5f.slice(1, 8),
		}));

		$(".good-box.f6 .good-list").append(template("tmpl1",{
			data : newData_6f.slice(0, 1),
		})).append(template("tmpl2",{
			data : newData_6f.slice(1, 8),
		}));

		// $(".good-box.f2 .good-list").append(template("tmpl1",{
		// 	data : newData_2f.slice(0, 1),
		// })).append(template("tmpl2",{
		// 	data : newData_2f.slice(1, 8),
		// }));
	},
});