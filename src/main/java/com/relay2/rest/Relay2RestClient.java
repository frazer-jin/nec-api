package com.relay2.rest;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;

import org.apache.http.HttpEntity;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.http.ssl.SSLContexts;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Relay2RestClient {
	
	private Logger logger = LoggerFactory.getLogger(Relay2RestClient.class);

	private HttpClient httpClient = null;
	
	private static Relay2RestClient client = new Relay2RestClient();

	private Relay2RestClient() {
		init();
	}

	public static Relay2RestClient getInstance() {
		return client;
	}

	/**
	 * 初始化HTTP Client
	 */
	private void init() {
		try {
			
//			System.setProperty ("jsse.enableSNIExtension", "false");
			
			SSLContextBuilder builder = SSLContexts.custom();
			
			builder.loadTrustMaterial(null, new TrustStrategy() {
				@Override
				public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException {
					//System.out.println(authType);
					for(X509Certificate cert : chain){
						//System.out.println("===> " + cert.getSubjectDN().getName());
					}
					return true;
				}
			});
//			*/
			SSLContext sslContext = builder.build();
			
			SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext, new HostnameVerifier() {
				@Override
				public boolean verify(String s, SSLSession sslSession) {
					//System.out.println(">>>= " + s);
//					System.out.println(sslSession);
					return true;
				}
			});
//			*/
			
			//SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext);

			Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory> create()
					.register("http", PlainConnectionSocketFactory.getSocketFactory())
					.register("https", sslsf).build();

			PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
			httpClient = HttpClients.custom().setConnectionManager(cm).build();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 获取 authCode的算法
	 * 
	 * @param msgString 加密数据
	 * @param authKey 客户的Authentication Key
	 * 
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	private String genAuthCode(String msgString, String authKey) {
		try {
			String HMAC_SHA1_ALGORITHM = "HmacSHA1";
			SecretKeySpec key = new SecretKeySpec(authKey.getBytes("UTF-8"), HMAC_SHA1_ALGORITHM);
			Mac mac = Mac.getInstance(HMAC_SHA1_ALGORITHM);
			mac.init(key);
			byte[] rawHmac = mac.doFinal(msgString.getBytes("UTF-8"));
			String authCode = javax.xml.bind.DatatypeConverter.printBase64Binary(rawHmac);
			authCode = authCode.toLowerCase();
			logger.info("### message string: [" + msgString + "] -> [" + authCode + "]" + authKey);

			return authCode;
		} catch (NoSuchAlgorithmException ex) {
			logger.error("NoSuchAlgorithmException", ex);
		} catch (InvalidKeyException ex) {
			logger.error("InvalidKeyException", ex);
		} catch (UnsupportedEncodingException e) {
			logger.error("UnsupportedEncodingException", e);
		}
		return null;
	}
	
	public RequestBuilder createWsRequestBuilder(String endPoint, String action, String accountName, String accessKey, String authKey){
		final String reqId = "1111-3333-555";
		final String actor = "R@r2.com";
		final long ts = System.currentTimeMillis();
		final String version = "2014.08.15";

		String msgString = String.format("%d~%s~%s~%s~%s~%s~%s", ts, version, accountName, accessKey, action, actor,
				reqId);
		String authCode = genAuthCode(msgString, authKey);
		
		RequestBuilder builder = RequestBuilder.post(endPoint.concat(action))
							.setCharset(Charset.forName("UTF-8"))
							.addParameter("accountName", accountName)
							.addParameter("reqId", reqId)
							.addParameter("actor", actor)
							.addParameter("accessKey", accessKey)
							.addParameter("action", action)
							.addParameter("ts", String.valueOf(ts))
							.addParameter("version",version)
							.addParameter("authCode",authCode);
		
		return builder;
	}
	
	public RequestBuilder createRequestBuilder(String endPoint, String action){
		RequestBuilder builder = RequestBuilder.post(endPoint.concat(action))
				.setCharset(Charset.forName("UTF-8"))
				.addParameter("action", action);
		
		return builder;
	}
	
	public String postRequest(HttpUriRequest postRequest) throws Exception{
		postRequest.setHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		postRequest.setHeader("Accept", "application/json");
		
		CloseableHttpResponse response = (CloseableHttpResponse) httpClient.execute(postRequest);

		HttpEntity entity = response.getEntity();
		
		String result = EntityUtils.toString(entity, "UTF-8");
		
		logger.info("POST RESPONSE: " + response.getStatusLine().getStatusCode());
		EntityUtils.consume(entity);
		
		return result;
	}
	
	public static void main(String[] args) throws Exception {
//		test();
		test2();
	}

	public static void test() throws Exception {
		Relay2RestClient client = Relay2RestClient.getInstance();
		
		final String endPoint = "https://www.qc.cn/exnms/";
		final String action = "GetClientCounts";
		final String acctName = "UEC-金马";
		final String accessKey = "12E683B6FAEB47F383156C16FF81CFDE";
		final String authKey = "ECD7CFDB7B7649EB9F40A1F1466FD4A6";
		
		RequestBuilder builder = client.createWsRequestBuilder(endPoint, action, acctName, accessKey, authKey);
		builder.addParameter("timeFrame", "1");
		builder.addParameter("countType", "1");
		
		String result = client.postRequest(builder.build());
		
		System.out.println(result);
	}
	
	public static void test2() throws Exception {
		Relay2RestClient client = Relay2RestClient.getInstance();
		
		final String endPoint = "http://trunk-mysql-01.mgmt.dev.relay2.cn:8836/dpi-dsas/query/";
		final String action = "topAppAccess";
		
		RequestBuilder builder = client.createRequestBuilder(endPoint, action);
		//builder.addParameter("timeFrame", "1");
		//builder.addParameter("countType", "1");
		
		String result = client.postRequest(builder.build());
		
		System.out.println(result);
	}

}
