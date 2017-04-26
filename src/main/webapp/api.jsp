<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NEC REST API Test Console</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/uikit/2.25.0/css/uikit.css"/>
    <link rel="stylesheet" href="http://cdn.bootcss.com/uikit/2.25.0/css/components/notify.css"/>
	<link href="http://cdn.bootcss.com/twitter-bootstrap/2.2.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://cdn.bootcss.com/twitter-bootstrap/2.2.2/css/bootstrap-responsive.min.css" rel="stylesheet">
	<link href="http://cdn.bootcss.com/smalot-bootstrap-datetimepicker/2.4.4/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
	<link href="css/app.css" rel="stylesheet">
    <script src="http://cdn.bootcss.com/jquery/3.0.0/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/uikit/2.25.0/js/uikit.js"></script>
    <script src="http://cdn.bootcss.com/uikit/2.25.0/js/components/notify.js"></script>
    <script src="http://cdn.bootcss.com/jquery/3.0.0/jquery.min.js"></script>
	<script src="http://cdn.bootcss.com/twitter-bootstrap/2.2.2/bootstrap.min.js"></script>
	<script src="http://cdn.bootcss.com/smalot-bootstrap-datetimepicker/2.4.4/js/bootstrap-datetimepicker.min.js"></script>
    <script src="http://cdn.bootcss.com/vue/1.0.26/vue.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <link href="image/favicon.ico" rel="icon" type="image/x-icon" />
</head>
<body>
<h1>NEC REST API 接口测试页面</h1>
<div class="container-fluid">
<div class="row-fluid">
<div class="span2">
	<select id="accountElement">
		<option value="0">UEC-金马</option>
		<option value="1">杭州 Office</option>
		<option value="2">龙宝汽车</option>
		<option value="3">Lexus</option>
	</select>
</div>
<div class="span10">
    <div class="uk-grid">
        <div id="container" class="uk-width-10-10">
            <div class="uk-panel uk-panel-box method-area" v-for="methodInfo in methodInfos">
                <h3 class="uk-panel-title">Method:</h3>
                <div id="methodElement" class="uk-panel uk-panel-box">
                    <div class="uk-panel-title method-title" onclick="toggleElement($('#toggle-{{methodInfo.name}}'))">
                        <span class="uk-icon-cog"></span>
                        <span class="uk-badge">{{methodInfo.httpMethod}}</span>
                        <span class="uk-h3">{{methodInfo.name}}</span>
                    </div>
                    <div>{{methodInfo.desc}}</div>
                    <div id="toggle-{{methodInfo.name}}" class="uk-hidden">
                        <hr/>
                        <div><span class="uk-icon-anchor"/> <strong> Invok URL: </strong></div>
                        <div class="uk-alert">
                            {{methodInfo.route}}
                        </div>
                        <div><h5>
                            <span class="uk-icon-bars"> <strong> Parameter introduce</strong>
                        </h5></div>
                        <table class="uk-table">
                            <thead>
                            <tr>
                                <th>Param Name</th>
                                <th>Param Type</th>
                                <th>Param Desc</th>
                                <th>Try Param</th>
                            </tr>
                            </thead>
                            <tbody v-for="paramElement in methodInfo.paramElements">
                            <tr class="uk-alert-{{ $index%2==0 ? 'success' : 'warning' }}">
                                <td>{{paramElement.name}}</td>
                                <td>{{paramElement.clazz}}</td>
                                <td>{{paramElement.desc}}</td>
                                <td v-if="paramElement.name == 'timeFrame'">
									<select id="{{methodInfo.name}}-{{paramElement.name}}"placeholder="{{paramElement.name}}">
									  <option value ="1">Last 60 Minutes</option>
									  <option value ="2">Last 24 Hours</option>
									  <option value="3">Last 7 Days</option>
									  <option value="4">Last 30 Days</option>
									  <option value="9">User Specified</option>
									</select>
                                </td>
								<td v-if="paramElement.name == 'countType'">
									<select id="{{methodInfo.name}}-{{paramElement.name}}"placeholder="{{paramElement.name}}">
									  <option value ="1">New Unique Connected Client Count</option>
									  <option value ="2">Unique Connected Client Count</option>
									  <option value="3">Connected Request Count</option>
									  <option value="4">Not Connected Client Count</option>
									  <option value="5">New Unqiue Visitor Count</option>
									  <option value="6">Unique Visitor Count</option>
									</select>
                                </td>
								<td v-if="paramElement.name == 'aggrMetric'">
									<select id="{{methodInfo.name}}-{{paramElement.name}}"placeholder="{{paramElement.name}}">
									  <option value ="1">Aggregated of 5 Minutes Data</option>
									  <option value ="2">Aggregated of Hourly Data</option>
									  <option value="3">Aggregated of Daily Data</option>
									  <option value="4">Aggregated of Weekly Data</option>
									  <option value="5">Aggregated of Monthly Data</option>
									</select>
                                </td>
								<td v-if="paramElement.name == 'reversed'">
									<input type="checkbox" id="{{methodInfo.name}}-{{paramElement.name}}"placeholder="{{paramElement.name}}">
                                </td>
								<td v-if="paramElement.name == 'sts' || paramElement.name == 'ets' || paramElement.name == 'baseTs'">
									<input size="16" readonly class="form_datetime" type="text" id="{{methodInfo.name}}-{{paramElement.name}}"placeholder="{{paramElement.name}}">
                                </td>
								<td v-if="paramElement.name == 'idWlan' || paramElement.name == 'idMd'
									|| paramElement.name == 'idVne' || paramElement.name == 'idTag'
									|| paramElement.name == 'radio' || paramElement.name == 'apMac'
									|| paramElement.name == 'limit' || paramElement.name == 'usageLimit'">
									<input type="text" id="{{methodInfo.name}}-{{paramElement.name}}"placeholder="{{paramElement.name}}">
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colspan="4" class="uk-text-right">
                                    <input class="uk-button uk-button-primary" type="button"
                                           onclick="tryMethod({{ $index }}, event)" value="Try">
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                        <div><span class="uk-icon-sitemap"/> <strong> Request data: </strong></div>
                        <div class="uk-alert" id="req-{{methodInfo.name}}"> request data output here...
                        </div>
                        <div><span class="uk-icon-sitemap"/> <strong> Response data: </strong></div>
                        <div class="uk-alert" id="resp-{{methodInfo.name}}"> response data output here...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<a class="btn btn-large icon-top" href="#"><i class="icon-arrow-up">&nbsp;</i></a>
</body>
    <script language="JavaScript">
        function replaceAll(str, sptr, sptr1) {
            while (str.indexOf(sptr) >= 0) {
                str = str.replace(sptr, sptr1);
            }
            return str;
        }
        function toHtml(str){
            str = replaceAll(str,' ',"&nbsp;")
            str = replaceAll(str,"\n","<br/>")
            str = replaceAll(str,"\\n","<br/>")
            str = replaceAll(str,"\"","&quot;")
            return str;
        }
        $(function () {
            Vue.filter('formatJSON', function (value) {
                try {
                    eval("var obj = " + value);
                    var jsonStr = toHtml(JSON.stringify(obj, null, 4));
                    return jsonStr;
                } catch (e) {
                    return value;
                }
            });
			var vue = new Vue({
				el: '#container',
				data: {
					methodInfos: data
				},
				methods: {
					init: function(){
						$(".form_datetime").datetimepicker({format: 'yyyy-mm-dd hh:ii'});
					}
				}
			});
			vue.init();
        })
        /**
         * 页面折叠
         */
        function toggleElement(elem) {
            if ($(elem).attr('class') == 'uk-hidden') {
                $(elem).attr('class', '');
            } else {
                $(elem).attr('class', 'uk-hidden');
            }
        }
        /**
         * 测试 Restful 接口
         */
        function tryMethod(index, event){
        	var self = event.srcElement;
        	var metaData = metadata[$("#accountElement").val()];
        	if(null == metaData){
        		UIkit.notify("account配置有问题", {timeout: 2000,pos:'top-right'});
        		return;
        	}
        	var methodElement = data[index];
            if(null == methodElement){
        		UIkit.notify("API列表配置有问题", {timeout: 2000,pos:'top-right'});
        		return;
        	}
            var urlData = "api.action?route=" + encodeURI(methodElement.route) + "&";
        	for (var idx in metaData){
        		urlData += idx + "=" + encodeURI(metaData[idx]) + "&";
        	}
            
            for(idx in methodElement.paramElements){
            	var paramName = methodElement.paramElements[idx].name;
            	var paramVal = $("#"+methodElement.name+"-"+paramName).val();
            	if(paramVal){
	            	urlData += paramName + "=" + encodeURI(paramVal)+"&"
            	}
            }
            urlData = urlData.substr(0, urlData.length-1);
            
            var requestMsg="<div class='uk-panel uk-panel-box uk-panel-box-primary'>"+
                    "<h3 class='uk-panel-title'>Request:</h3>&nbsp;&nbsp;"+urlData+"</div>";
            self.disabled = true;
            $.ajax({
                url: urlData,
                method: "GET",
                success: function (data){
                    self.disabled = false;
                	var jsonStr = toHtml(JSON.stringify(data, null, 4));
                    $("#req-"+methodElement.name).empty().append(requestMsg);
                    $("#resp-"+methodElement.name).empty().append(jsonStr);
                },
                error: function(e) {
                    self.disabled = false;
                    var respText = e.responseText;
                    eval("var errMsgObj = " + respText);
                    var errTime = errMsgObj.errTime;
                    var errInfo = toHtml(errMsgObj.errMsg);
                    reqsponseNotify = "<div class='uk-panel uk-panel-box uk-panel-box-danger work-break'>" +
                                            "Error:<br> " +
                                            "<div class='uk-text-primary'>"+errTime+"</div>" +
                                            "<div class='uk-text-danger'> "+errInfo+"</div>"+
                                        "</div>";
                    UIkit.notify(reqsponseNotify, {timeout: 10000,pos:'top-right'});
                }
            })
        }
    </script>
</html>