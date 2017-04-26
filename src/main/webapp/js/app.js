var metadata = [ {
	"endPoint" : "https://www.qc.cn/exnms/",
	"accountName" : "UEC-金马",
	"accessKey" : "12E683B6FAEB47F383156C16FF81CFDE",
	"authKey" : "ECD7CFDB7B7649EB9F40A1F1466FD4A6"
},{
	"endPoint" : "https://sp-relay2.sp.beta.relay2.net.cn/exnms/",
	"accountName" : "Demo",
	"accessKey" : "4270C19138C0427895DDF83E6F4004AD",
	"authKey" : "8D247189C5114B9F9645C889C08D9F21"
},{
	"endPoint" : "https://sp-relay2.sp.beta.relay2.net.cn/exnms/",
	"accountName" : "龙宝汽车",
	"accessKey" : "6CC5D4F6F57141CD8F0D9ABA25E6F742",
	"authKey" : "57B24B51E9D5426691A9ED7496874642"
} ];
var data = [ {
	"route" : "/GetClientCounts",
	"name" : "GetClientCounts",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client counts within account"
}, {
	"route" : "/GetClientCountsByWlan",
	"name" : "GetClientCountsByWlan",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idWlan",
		"clazz" : "int",
		"desc" : "Param name is idWlan, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client counts by WLAN"
}, {
	"route" : "/GetClientCountsByMd",
	"name" : "GetClientCountsByMd",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idMd",
		"clazz" : "int",
		"desc" : "Param name is idMd, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client counts by mobility domain"
}, {
	"route" : "/GetClientCountsByVenue",
	"name" : "GetClientCountsByVenue",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idVne",
		"clazz" : "int",
		"desc" : "Param name is idVne, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client counts by venue"
}, {
	"route" : "/GetClientCountsByTag",
	"name" : "GetClientCountsByTag",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idTag",
		"clazz" : "int",
		"desc" : "Param name is idTag, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client counts by tag"
}, {
	"route" : "/GetClientCountsByRfBand",
	"name" : "GetClientCountsByRfBand",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "radio",
		"clazz" : "int",
		"desc" : "Param name is radio, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client counts by RF band"
}, {
	"route" : "/GetClientCountsByAp",
	"name" : "GetClientCountsByAp",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "apMac",
		"clazz" : "String",
		"desc" : "Param name is apMac, type is String"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client counts by AP"
}, {
	"route" : "/GetBandwidthUsage",
	"name" : "GetBandwidthUsage",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Bandwidth usage within account"
}, {
	"route" : "/GetBandwidthUsageByWlan",
	"name" : "GetBandwidthUsageByWlan",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idWlan",
		"clazz" : "int",
		"desc" : "Param name is idWlan, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Bandwidth usage by WLAN"
}, {
	"route" : "/GetBandwidthUsageByTag",
	"name" : "GetBandwidthUsageByTag",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idTag",
		"clazz" : "int",
		"desc" : "Param name is idTag, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Bandwidth usage by tag"
}, {
	"route" : "/GetBandwidthUsageByRfBand",
	"name" : "GetBandwidthUsageByRfBand",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "radio",
		"clazz" : "int",
		"desc" : "Param name is radio, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Bandwidth usage by RF band"
}, {
	"route" : "/GetBandwidthUsageByAp",
	"name" : "GetBandwidthUsageByAp",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "apMac",
		"clazz" : "String",
		"desc" : "Param name is apMac, type is String"
	} ],
	"httpMethod" : "POST",
	"desc" : "Bandwidth usage by AP"
}, {
	"route" : "/GetDataUsage",
	"name" : "GetDataUsage",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Data usage within account"
}, {
	"route" : "/GetDataUsageByWlan",
	"name" : "GetDataUsageByWlan",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idWlan",
		"clazz" : "int",
		"desc" : "Param name is idWlan, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Data usage by WLAN"
}, {
	"route" : "/GetDataUsageByTag",
	"name" : "GetDataUsageByTag",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idTag",
		"clazz" : "int",
		"desc" : "Param name is idTag, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Data usage by tag"
}, {
	"route" : "/GetDataUsageByRfBand",
	"name" : "GetDataUsageByRfBand",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "radio",
		"clazz" : "int",
		"desc" : "Param name is radio, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Data usage by RF band"
}, {
	"route" : "/GetDataUsageByAp",
	"name" : "GetDataUsageByAp",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "apMac",
		"clazz" : "String",
		"desc" : "Param name is apMac, type is String"
	} ],
	"httpMethod" : "POST",
	"desc" : "Data usage by AP"
}, {
	"route" : "/GetClientAvgDwellTime",
	"name" : "GetClientAvgDwellTime",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client average dwell time within account"
}, {
	"route" : "/GetClientAvgDwellTimeByTag",
	"name" : "GetClientAvgDwellTimeByTag",
	"paramElements" : [ {
		"name" : "timeFrame",
		"clazz" : "int",
		"desc" : "Param name is timeFrame, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	}, {
		"name" : "idTag",
		"clazz" : "int",
		"desc" : "Param name is idTag, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Client average dwell time by tag"
}, {
	"route" : "/GetTopWlansByClientCounts",
	"name" : "GetTopWlansByClientCounts",
	"paramElements" : [ {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top WLANs by client counts"
}, {
	"route" : "/GetTopApsByClientCounts",
	"name" : "GetTopApsByClientCounts",
	"paramElements" : [ {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top APs by client counts"
}, {
	"route" : "/GetTopTagsByClientCounts",
	"name" : "GetTopTagsByClientCounts",
	"paramElements" : [ {
		"name" : "countType",
		"clazz" : "int",
		"desc" : "Param name is countType, type is int"
	}, {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top tags by client counts"
}, {
	"route" : "/GetTopWlansByBandwidthUsage",
	"name" : "GetTopWlansByBandwidthUsage",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top WLANs by bandwidth usage"
}, {
	"route" : "/GetTopApsByBandwidthUsage",
	"name" : "GetTopApsByBandwidthUsage",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top APs by bandwidth usage"
}, {
	"route" : "/GetTopTagsByBandwidthUsage",
	"name" : "GetTopTagsByBandwidthUsage",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top tags by bandwidth usage"
}, {
	"route" : "/GetTopWlansByDataUsage",
	"name" : "GetTopWlansByDataUsage",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top WLANs by data usage"
}, {
	"route" : "/GetTopApsByDataUsage",
	"name" : "GetTopApsByDataUsage",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top APs by data usage"
}, {
	"route" : "/GetTopTagsByDataUsage",
	"name" : "GetTopTagsByDataUsage",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top tags by data usage"
}, {
	"route" : "/GetTopWlansByClientAvgDwellTime",
	"name" : "GetTopWlansByClientAvgDwellTime",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top WLANs by client average dwell time"
}, {
	"route" : "/GetTopApsByClientAvgDwellTime",
	"name" : "GetTopApsByClientAvgDwellTime",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top APs by client average dwell time"
}, {
	"route" : "/GetTopTagsByClientAvgDwellTime",
	"name" : "GetTopTagsByClientAvgDwellTime",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top tags by client average dwell time"
}, {
	"route" : "/GetTopClientsByDwellTime",
	"name" : "GetTopClientsByDwellTime",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "limit",
		"clazz" : "int",
		"desc" : "Param name is limit, type is int"
	}, {
		"name" : "reversed",
		"clazz" : "boolean",
		"desc" : "Param name is reversed, type is boolean"
	} ],
	"httpMethod" : "POST",
	"desc" : "Top clients by dwell time"
}, {
	"route" : "/GetHighDataUsageClients",
	"name" : "GetHighDataUsageClients",
	"paramElements" : [ {
		"name" : "aggrMetric",
		"clazz" : "int",
		"desc" : "Param name is aggrMetric, type is int"
	}, {
		"name" : "baseTs",
		"clazz" : "int",
		"desc" : "Param name is baseTs, type is int"
	}, {
		"name" : "usageLimit",
		"clazz" : "int",
		"desc" : "Param name is usageLimit, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "High data usage clients hourly"
}, {
	"route" : "/GetConnectedClientsInTimeRange",
	"name" : "GetConnectedClientsInTimeRange",
	"paramElements" : [ {
		"name" : "sts",
		"clazz" : "int",
		"desc" : "Param name is sts, type is int"
	}, {
		"name" : "ets",
		"clazz" : "int",
		"desc" : "Param name is ets, type is int"
	} ],
	"httpMethod" : "POST",
	"desc" : "connected client list for specified time range"
}

];