package com.relay2.api;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.relay2.rest.Relay2RestClient;

public class DpiServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	private Logger logger = LoggerFactory.getLogger(DpiServlet.class);
	
	private static final Relay2RestClient client = Relay2RestClient.getInstance();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			requestApi(req, resp);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}

	private static final List<String> excluded = Arrays.asList("endPoint","route","startTime", "endTime");
	private static final List<String> tsFields = Arrays.asList("startTime", "endTime");
	private static SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	
	private void requestApi(HttpServletRequest req, HttpServletResponse resp) throws IOException, ParseException {
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("application/json; charset=UTF-8");
		logger.info("request queryString: " + req.getQueryString());
		
		String endPoint = req.getParameter("endPoint").trim();
		String action = req.getParameter("route").substring(1).trim();
		
		RequestBuilder builder = client.createRequestBuilder(endPoint, action);
		
		Enumeration<String> parameterNames = req.getParameterNames();
		while(parameterNames.hasMoreElements()){
			String param = parameterNames.nextElement();
			if(tsFields.contains(param)){
				String val = req.getParameter(param);
				long time = sdf.parse(val).getTime() - 8 * 3600_000;
				builder.addParameter(param, String.valueOf(time));
			}
			if(excluded.contains(param)){
				continue;
			}
			builder.addParameter(param, req.getParameter(param));
		}
		logger.info("URI: " + builder.getUri().toString() + ", parameters: " + builder.getParameters());
		try {
			HttpUriRequest request = builder.build();
			String result = client.postRequest(request);
			resp.getWriter().print(result);
		} catch (Exception e) {
			e.printStackTrace();
			resp.getWriter().println("{\"error\" : \"call api error.\"}");
		}
		
	}
}
