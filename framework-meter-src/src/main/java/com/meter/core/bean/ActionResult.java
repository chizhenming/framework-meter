/*
 * Copyright (c) 2012. tAngo
 * 	Email : org.java.tango@gmail.com
 */
package com.meter.core.bean;


import java.util.HashMap;
import java.util.Map;

public class ActionResult {

    private Map resultMap = new HashMap();

    private Object result;

    private String message;

    public ActionResult() {
    }

    public ActionResult(Object result, String message) {
        this.result = result;
        this.message = message;
    }

    public final static ActionResult getActionResult(Object result) {
        return getActionResult(result, null);
    }

    public final static ActionResult getActionResult(Object result, String message) {
        return new ActionResult(result, message);
    }

    public Object getResult() {
        return result;
    }

    public void setResult(Object result) {
        this.result = result;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;

    }

    @Override
    public String toString() {
        if (result.equals("") || result.equals(null)) {
            resultMap.put("code", 1);
            message = "服务器有点异常哦！程序猿同志正在紧张修复中。请稍等片刻";
        } else {
            resultMap.put("code", 0);
        }
        resultMap.put("dataObject", result);
        result = resultMap;
        return "{" +
                "result=" + result +
                ", message='" + message + '\'' +
                '}';
    }

}

