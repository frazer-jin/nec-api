var metadata = [ {
	"endPoint" : "http://trunk-mysql-01.mgmt.dev.relay2.cn:8836/dpi-dsas/query/"
} ];
var data = [ {
	"route" : "/topAppAccess",
	"name" : "topAppAccess",
	"paramElements" : [ {
		"name" : "type",
		"clazz" : "int",
		"desc" : "1: device, 2: vip group, 3: ALL"
	}, {
		"name" : "id",
		"clazz" : "int",
		"desc" : "device or vip group id. assign id = 0, if type is 3"
	}, {
		"name" : "peroid",
		"clazz" : "int",
		"desc" : "1: 当前小时, 2：当天, 3： 本周, 4： 本月"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top 10 Application be accessed for specified scopes."
}, {
	"route" : "/topWebAccess",
	"name" : "topWebAccess",
	"paramElements" : [ {
		"name" : "type",
		"clazz" : "int",
		"desc" : "1: device, 2: vip group, 3: ALL"
	}, {
		"name" : "id",
		"clazz" : "int",
		"desc" : "device or vip group id. assign id = 0, if type is 3"
	}, {
		"name" : "peroid",
		"clazz" : "int",
		"desc" : "1: 当前小时, 2：当天, 3： 本周, 4： 本月"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top 10 Website be accessed for specified scopes."
}, {
	"route" : "/topAppTraffic",
	"name" : "topAppTraffic",
	"paramElements" : [ {
		"name" : "type",
		"clazz" : "int",
		"desc" : "1: device, 2: vip group, 3: ALL"
	}, {
		"name" : "id",
		"clazz" : "int",
		"desc" : "device or vip group id. assign id = 0, if type is 3"
	}, {
		"name" : "peroid",
		"clazz" : "int",
		"desc" : "1: 当前小时, 2：当天, 3： 本周, 4： 本月"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top 10 Application with most traffic for specified scopes."
}, {
	"route" : "/userDetail",
	"name" : "userDetail",
	"paramElements" : [ {
		"name" : "mac",
		"clazz" : "string",
		"desc" : "mac adddress {format: ab:cd:ef:00:11:22}"
	}, {
		"name" : "startTime",
		"clazz" : "date",
		"desc" : "data range start time"
	}, {
		"name" : "endTime",
		"clazz" : "date",
		"desc" : "data range end time"
	}, {
		"name" : "start",
		"clazz" : "int",
		"desc" : "record start position, default is 0"
	}, {
		"name" : "pageSize",
		"clazz" : "int",
		"desc" : "record size per page"
	} ],
	"httpMethod" : "POST",
	"desc" : "user detail data for specified range."
}

];